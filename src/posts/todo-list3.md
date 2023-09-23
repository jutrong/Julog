---
date: "2023-08-10"
title: "투두리스트 수정, 삭제 기능"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://image.bugsm.co.kr/album/images/500/205024/20502402.jpg"
---

#### 3. 할 일 수정

수정 버튼은 3개의 함수로 나누어져있다.
**1. 수정하기 버튼 클릭 2. 수정하기 클릭 후 제출 버튼 클릭 3. 수정하기 클릭 후 취소 버튼 클릭
**

##### (1) 수정 버튼 클릭

```
  const updateBtnClick = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      setIsUpdateClick(true);
      setUpdateId(id);
    }
  };
```

```
{isUpdateClick && updateId === todo.id ? ( <div></div> ) }
```

isUpdateClick이 true이고 현재 순회 중인 todo의 id가 updateId와 일치한다면 수정하기 input을 보여준다

---

##### (2) 수정 제출 버튼 클릭

```
const updateSubmitClick = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);

    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        todo: updateValue,
        isCompleted: todoToUpdate.isCompleted,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, todo: updateValue } : todo
          )
        );
      });
    setIsUpdateClick(false);
  };
```

비슷하게 에러처리 추가하고, async await를 사용하여 코드를 고쳤다.

(수정 코드)

```
 const updateSubmitClick = useCallback(async (id) => {
    const getTodoById = todos.find((todo) => todo.id === id);

    const updatedTodoData = {
      todo: updateValue,
      isCompleted: getTodoById.isCompleted,
    };
    try {
      const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "PUT",
        headers: getAuthHeaders(),
        body: JSON.stringify(updatedTodoData),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }

      const data = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, todo: updateValue } : todo
        )
      );

      setIsUpdateClick(false);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  });
```

##### (3) 수정 취소 버튼 클릭

```
 const updateCancleClick = () => {
    setIsUpdateClick(false);
    setUpdateId(null);
  };

```

### TodoItem.jsx

```
<li>
          {isUpdateClick && updateId === todo.id ? (
            <div>
              <input
                data-testid="modify-input"
                onChange={(e) => {
                  setUpdateValue(e.target.value);
                }}
              ></input>
              <button
                data-testid="submit-button"
                onClick={() => updateSubmitClick(todo.id)}
              >
                제출
              </button>
              <button data-testid="cancel-button" onClick={updateCancleClick}>
                취소
              </button>
            </div>
          ) : (
            <label onClick={handleItemClick}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  checkboxClick(todo.id);
                  setIsChecked(!isChecked);
                }}
              />
              <span className={todo.isCompleted ? "completed" : ""}>
                {todo.todo}
              </span>
              <button
                onClick={() => {
                  updateBtnClick(todo.id);
                }}
                className="update-btn"
              >
                수정
              </button>
              <button
                data-testid="delete-button"
                onClick={() => handleRemove(todo.id)}
                className="delete-btn"
              >
                삭제
              </button>
            </label>
          )}
        </li>
```

#### 4. 할 일 삭제

```
  const handleRemove = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (response.status === 204) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } else {
      console.error("삭제 오류:", response.status);
    }
  } catch (error) {
    console.error("API 요청 실패:", error);
  }
};
```

![](https://velog.velcdn.com/images/jutrong/post/2a955ebd-bcee-44a7-8251-48014ac27607/image.mov)

이렇게 투두리스트 기본기능 할 일 추가, 완료, 수정, 삭제 4가지 기능을 구현해봤다.
남들 다 하는거는 해보고 거기에 내가 만들어 보고싶은 것들을 추가해볼 생각이다.

추가해볼 것들 리스트

- 리스트 우선순위 설정
- 할 일 마감 기한 설정
- 알림 기능
- 카테고리 분류
- 검색 및 필터링
- 다크 모드
- 다중 사용자
- 통계 및 진행 상황

등등 추가하고 싶은 것들이 많다. 꼭 연습 겸 기능을 하나하나 야금야금 추가해봐야지

투두리스트를 만들어보고 나만을 위한 운동일지 어플을 만들어 보고싶다는 생각이 들었다.
이번에 진행하는 프로젝트가 끝나고 내가 만들어보고 싶은 것을 기획해서 꾸준하게 만들어보자라는 생각을 가지게 됐다.
