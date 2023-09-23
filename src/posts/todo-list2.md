---
date: "2023-08-09"
title: "리액트 로그인, 투두리스트 코드를 예쁘게 다듬어보자"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5334387951/B.jpg?649000000"
---

## 로그인 기능

회원가입과 같이 유효성 검사를 진행하고 (이메일 @포함, 비밀번호 8자리 이상)
로그인이 성공하면 서버에서 받은 토큰을 로컬스토리지로 저장하는 코드를 짜보았다.

```
 const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePsd = (e) => {
    setPassword(e.target.value);
  };
  // 이메일 정규식
  const emailRegex = /\S+@\S+\.\S+/;

  // 이메일 유효성 검사
  const isEmailValid = emailRegex.test(email);
  // 비밀번호 유효성 검사
  const isPasswordValid = password.length >= 8;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      alert("올바른 이메일 주소를 입력해주세요.");
    } else if (!isPasswordValid) {
      alert("비밀번호는 8자리 이상 입력해주세요.");
    } else {
      fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) =>
          data.access_token
            ? (navigate("/todo"),
              localStorage.setItem("access_token", data.access_token))
            : console.log(data.message)
        );
    }
  };
```

회원가입 코드처럼 수정해보자.

```
  useEffect(() => {
    setIsValid(email.includes("@") && password.length > 7);
  }, [email, password]);
```

```
          <input
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            data-testid="signin-button"
            onClick={onSubmit}
            style={{ backgroundColor: isValid ? "green" : "red" }}
          >
            로그인
          </button>
```

유효성 검사의 alert는 따로 주지않고 버튼 활성화되는 방식으로 진행하였다.

로그인 유효성 검사가 통과하면 fetch를 통해 토큰을 받아 로컬스토리지에 저장했다.

```
    fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        data.access_token
          ? (navigate("/todo"),
            localStorage.setItem("access_token", data.access_token))
          : console.log(data.message)
      );
  };
```

access_token을 받아와서 todo페이지로 이동하게하였다.

## Todo page

![](https://velog.velcdn.com/images/jutrong/post/81106e89-78da-4883-8e4f-5c14287d5809/image.png)

컴포넌트는 간단하게 Todo컴포넌트 안에 todoitem와 할 일 내용을 보여주는 todocontent컴포넌트를 넣었다.

할 일 추가, 완료, 수정, 삭제... 이렇게 4가지 기능만 넣은 페이지인데 기능은 작동하나 코드가 엉망이라 지금부터 내 역량껏 수정해볼 작정이다.
댓글로 피드백이나 훈수주시면 너무나 고마울거같습니다!
![](https://velog.velcdn.com/images/jutrong/post/647a6c75-ee16-4f3e-81b4-db73c3be108e/image.mov)

#### 1. 할 일 추가

```
const addTodo = (e) => {
    e.preventDefault();
    setValue("");
    fetch("https://www.pre-onboarding-selection-task.shop/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        todo: value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setTodos((prevTodos) => [...prevTodos, data]));
  };
```

여기서 수정할 부분은
**1. 에러 처리 2. async, await를 활용한 비동기통신 3. 상수화 4. 헤더 설정 분리**

(수정 코드)

```
// URL, 헤더
const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

  const getAuthHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  });
```

```
try {
        const response = await fetch(`${BASE_URL}/todos`, {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            todo: value,
          }),
        });
        const data = await response.json();
        setTodos((prevTodos) => [...prevTodos, data]);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
```

---

#### 2. 할 일 완료(체크)

```
const checkboxClick = useCallback(
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );

      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            todo: todoToUpdate.todo,
            isCompleted: !todoToUpdate.isCompleted,
          }),
        }).then((res) => res.json());
      }
    },
    [todos]
  );
```

**1. setTodos로 상태를 업데이트 한 후에 API호출한다. 2. async await를 통해 비동기 처리 3. 에러 처리 추가**

먼저 getTodoById를 찾고
이 todo의 isCompleted 상태를 변경한 updatedTodo를 생성한다.
updatedTodo를 서버에 업데이트합니다.
업데이트가 성공하면 로컬 상태를 업데이트 !

(수정 코드)

```
const checkboxClick = useCallback(
    async (id) => {
      const getTodoById = todos.find((todo) => todo.id === id);

      if (!getTodoById) return;

      const updatedTodo = {
        ...getTodoById,
        isCompleted: !getTodoById.isCompleted,
      };

      try {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(updatedTodo),
        });

        if (!response.ok) {
          throw new Error("Failed to update todo");
        }

        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    },
    [todos]
  );
```
