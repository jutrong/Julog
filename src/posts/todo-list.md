---
date: "2023-08-08"
title: "React 배운사람들은 다 만든다는 Todolist 저도 한 번 만들어봤습니다"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://velog.velcdn.com/images/jutrong/post/e565fea8-0b6a-4340-a77a-768e32be3f03/image.png"
---

## Todolist 왜 만들려고하나?

리액트를 배운 사람들은 모두 다 todolist를 연습삼아 만들어 보더라.
현직에 있는 프론트엔드 개발자가 조언을 해주었다
"포트폴리오에 흔하디 흔한 Todolist같은거 만들지말고 남들과 다른 색다른거 만들어봐라." 그 조언을 듣고 난 신박한거 만들어 봐야지라고 생각했다.
_하지만!_ 결국 리액트로 만들어본 두 번째 작품이 투두리스트가 되었다.

![](https://velog.velcdn.com/images/jutrong/post/c72e9bc6-b056-4505-8168-3ef380e466df/image.png)

원티드 프리온보딩 프론트엔드 인텁십이라는 교육을 참여하기위해서는 todolist의 회원가입, 로그인, todolist 기능을 구현하여 제출을 해야했기에 만들지 않으려했던 todolist를 만들게 된 거시다.

인턴십에 참여하려면 사전과제를 수행해야하는데 진행 가이드를 제시해주어서 그대로 맞추어서 기능을 만들면 된다.

1. 회원가입, 로그인 기능

- 회원가입, 로그인 유효성 검사
- 로그인시 토큰 로컬스토리지 저장
- 로그인 여부에 따른 리다이렉트 처리

2. 투두리스트 기능

- 할 일 추가
- 할 일 완료(체크박스)
- 할 일 수정
- 할 일 삭제

정말 간단한 기능 구현이지만 처음 만들어본 나에게는 도전적인 과제였다.
![](https://velog.velcdn.com/images/jutrong/post/d88affb1-5d56-4a1a-a126-614648068c01/image.png)
데이터는 과제에서 주어진 API에 맞추어 요청,응답을 하면 된다.
인턴십 교육에 합격이 안될지라도 연습해볼겸 만들어보면 좋겠다고 생각해서 일주일동안 만들어 보았다.
개인 리액트 프로젝트하는 스터디원들에게도 이런게 있다고 알려주었고 2명도 같은 주제로 todolist를 만들어 본다고 하였는데 나중에 코드 공유를 해서 서로 피드백하기로 했다.

## 어떻게 만들었나?

일단 기본기능 구현하고 코드를 깔끔하게 만들어보자라는 마인드를 가지고 시작했다.
![](https://velog.velcdn.com/images/jutrong/post/0810709e-a353-49f3-8f44-0b30c5858821/image.png)![](https://velog.velcdn.com/images/jutrong/post/f10b343c-1319-41de-8bdc-73541a83296b/image.png)![](https://velog.velcdn.com/images/jutrong/post/e565fea8-0b6a-4340-a77a-768e32be3f03/image.png)

### 회원가입

```
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
      fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((data) => {
        if (data.status === 201) {
          navigate("/signin");
        } else {
          console.log(data);
        }
      });
    }
  };
```

내가 처음으로 만든 회원가입 유효성 검사이다.
눈감고 보아도 고칠점이 많아보이는 코드... 하나하나 뜯어가며 코드를 수정해보아야겠다.

1. isValid state를 만들어 초기값을 false로 설정한다.
2. 삼항연산자를 이용해 1차적으로 조건이 맞는지 검사한다.
   조건이 맞으면 isValid값을 true로 맞지 않으면 false
3. handlePsdInput 함수로 2차적으로 조건이 맞는지 검사한다.
4. isValid 값에 따라 button의 색을 달리한다.

```
const [isValid, setIsValid] = useState(false);


const handleIdInput = (e) => {
    setEmail(e.target.value);
    email.includes("@") && password.length > 9
      ? setIsValid(true)
      : setIsValid(false);
    console.log(email);
  };
  const handlePsdInput = (e) => {
    setPassword(e.target.value);
    email.includes("@") && password.length > 9
      ? setIsValid(true)
      : setIsValid(false);
    console.log(password);
  };

   <button data-testid="signup-button"
            onClick={onSubmit}
            style={{ backgroundColor: isValid ? "green" : "red" }}>
            회원가입
   </button>
```

이렇게 코드를 작성하니깐 handleIdInput, handlePsdInput 함수에서 'email' 'password' 상태를 업데이트할 때 컴포넌트가 변경사항을 즉시 반영하는 리렌더링이 발생하지 않는다.
그래서 버튼창이 유효성 검사를 통과해도 즉시 색이 변하지 않는 문제가 생겼다.

```
  useEffect(() => {
    setIsValid(email.includes("@") && password.length > 7);
  }, [email, password]);
```

useEffect 훅을 사용해 email,password값이 변할때마다 렌더링 시켜주었다.

handleIdInput, handlePsdInput 함수를 제거하고 useEffect에 isValid값을 정해주는 코드를 작성하니 함수를 지정해주지 않아도 유효성 검사가 가능했다 !

```
<input
            placeholder="이메일을 입력해주세요."
            onChange={(e) => setEmail(e.target.value)}
          />
<input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => setPassword(e.target.value)}
```

전에 작성했던거에 비해 많이 깔꼼해졌다.

![](https://velog.velcdn.com/images/jutrong/post/203f6b36-6678-44ba-8c8b-72dad3b7de14/image.mov)

다음엔 투두리스트를 수정해봐야겠다 !
