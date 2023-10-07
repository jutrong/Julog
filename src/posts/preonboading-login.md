---
date: "2023-10-07"
title: "Login logic 이해하기"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStR_4qGmLjIMCMUzOrmztoOLla1CQ_Nn5AHg&usqp=CAU"
---

## 개요

이번 원티드 프리온보딩 10월 챌린지에서 로그인을 위주로 2주동안 챌린지가 진행되었다. 강의를 기반으로 실습문제를 정리하는 글을 작성하면 좋겠다 생각하여, 로그인 로직을 정리해보려고 한다.
<br/>
<br/>

회원가입, 로그인은 거의 모든 웹페이지에 존재한다. 무조건 있는 기능이기에 소홀히 생각하여 제대로 공부해본 적이 없어, 이번 기회에 로직을 이해하고 직접 만들어보면서 체득해보자.
<br/>
<br/>

```
<div>
      <h1>Login with Mock API</h1>
      <form onSubmit={loginSubmitHandler}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit" value="Submit">
          submit
        </button>
      </form>
      <div>
        <h2>User info</h2>
        {JSON.stringify(userInfo)}
      </div>
    </div>
```

<br/>
input창에 정보를 입력하고 버튼을 누르면 loginSubmitHandler 함수가 실행된다.
<br/>
<br/>

```
const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const loginRes = await login(
      formData.get("username") as string,
      formData.get("password") as string
    );
    if (!loginRes) return;

    const userInfo = await getUserInfo(loginRes.token);
    if (!userInfo) return;

    setUserInfo(userInfo);
  };
```

<br/>
<br/>

formData에서 username,password를 response로 받아온다.
값이 비어있거나 올바른 값이 아니면 요청하지 않도록,
<br/>

그리고 formData를 가지고 mockup api를 호출한다.
<br/>

login함수에서 username, password를 받아 users(user data)에서 username,password 둘 다 일치하는 유저를 찾는다.
<br/>

여기에 해당하는 유저가 있다면 성공과 함께 토큰을 전달.
<br/>
<br/>

```
const login = async (
  username: string,
  password: string
): Promise<LoginResponse | null> => {
  const user: User | undefined = users.find((user: User) => {
    return user.username === username && user.password === password;
  });
  return user
    ? {
        message: "SUCCESS",
        token: JSON.stringify({ user: user.userInfo, secret: _secret }),
      }
    : null;
};
```

<br/>

아이디 / 비밀번호를 확인하고 해당하는 유저가 있다면 로그인 결과 반환
<br/>

userInfo를 가져오기위해서 token값을 넘기면 토큰을 JSON parsing해서
secret을 확인한다.
secret이 일치하는지 >> 로그인 단계에서 올바른 로그인이 된 것인지 확인하기위해
올바르다면 유저네임을 찾아서 그 유저를 반환, 그 유저가 없다면 null 반환
<br/>
<br/>

---

<br/>

전체 로직 흐름을 다시 살펴보면
<br/>
<br/>

1. onClick을 통해 formData제출이 된다.
2. 로그인 시도를 한다.
3. 로그인은 username,password를 이용하여 유저가 올바른 유저인지 확인
4. 해당하는 유저가 있다면 로그인 결과와 함께 서버만 알고 있는 값(\_secret)을 반환
5. 그 값을 가지고서 다시 유저 정보를 조회할 때 활용할 수 있도록 한다.
   <br/>
   <br/>

---

<br/>

## 전체코드

![](https://velog.velcdn.com/images/jutrong/post/3a0f72a5-af78-41de-9498-db667bfefb7c/image.png)
