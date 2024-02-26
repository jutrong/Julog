---
date: "2023-12-12"
title: "⚠️ React 회원가입 유효성 검사 그리고 겪은 문제"
thumbnail: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVBJUIyJTgwJUVDJTgyJUFDfGVufDB8fDB8fHww"
categories: "React"
summary: "유저가 회원가입을 할 때에 ID,Password등 입력값에 유효한 값을 넣을 수 있게 제한을 거는 유효성 검사는 대부분 사이트에 있을 것이라 생각하여, 유효성 검사 로직을 작성해보았다. "
---

## 개요

로그인, 회원가입을 구현하면서 비동기 통신, 유저 상태관리 등등 구현해보았는데, 또 기본적으로 모든 회원가입 기능에서 빠지지 않는게 무엇일까 생각해보았다.

유저가 회원가입을 할 때에 ID,Password등 입력값에 유효한 값을 넣을 수 있게 제한을 거는 유효성 검사는 대부분 사이트에 있을 것이라 생각하여, 유효성 검사 로직을 작성해보았다. 구현하기 전에는 그까짓거 입력값 받아서 정규표현식으로 제한하면 되는거 아니야? 쉬울거같은데? 라는 오만한 생각을 가졌었는데.. 생각보다 깔끔하게 구현하기 어렵다는걸 느꼈다...
반복되는 코드를 줄이고, 무분별한 state 확장을 줄이는 것을 신경쓰면서 최대한 가독성 좋게 구현하며 느꼈던 어려운점을 기술해보려한다.

## 조건

- ID는 이메일 주소 형식 , 영문 대/소문자, 숫자, 특수문자(.\_%+-) 중 하나 이상 포함
- Password는 적어도 하나의 특수문자를 포함, 적어도 하나의 숫자를 포함, 8에서 15 글자
- displayName은 영문 대/소문자 또는 한글 글자 중 2에서 8 글자까지 허용
- 비밀번호와 비밀번호확인 입력값이 같아야됨
- profileImg는 선택
- 각 조건에 맞지 않을시 에러메시지 표현
- 각 조건에 맞지 않을시 제출 버튼 비활성화
- 조건에 만족하는지 유무는 빨간글씨 혹은 초록글씨의 안내를 실시간으로 띄우고 있다.

## 고려사항

- 필수정보 입력 유무 확인
- 정규식 충족 여부 확인
- 비밀번호 & 비밀번호확인 일치 확인

입력된 데이터 값과 조건에 만족하는지는 하나의 inputValue State에서 관리

```
const [inputValue, setInputValue] = useState({
    email: "", // 입력된 이메일 데이터
    validEmail: false, // 이메일 정규식 충족 여부
    nonIdDuplication: false, // 이메일 중복확인 여부
    displayName: "", // 입력된 닉네임 데이터
    validDisplayName: false, // 닉네임 정규식 충족 여부
    password: "", // 입력된 비밀번호 데이터
    validPassword: false, // 비밀번호 정규식 충족 여부
    passwordConfirm: "", // 입력된 비밀번호 확인 데이터
    correctPwCheck: false, // 패스워드 데이터와 일치 여부
    profileImg: "", // 업로드된 프로필 이미지 (선택)
  });
```

모든 입력값에 입력되고 정규식에 충족하고 비밀번호 데이터와 일치를 하는지 체크하기 위해서 true, false값을 내뱉는 변수를 선언하였다.

```
const submitRequirements =
    inputValue.email &&
    inputValue.validEmail &&
    inputValue.displayName &&
    inputValue.validDisplayName &&
    inputValue.password &&
    inputValue.validPassword &&
    inputValue.correctPwCheck;
```

모든 조건이 true이면 submit button이 활성화되게 하려고 이 변수를 주었으니 button 태그에 disabled 속성과 className에 따라 동적으로 스타일 변화를 주었다.

```
<SignUpBtn
            disabled={!submitRequirements}
            className={submitRequirements ? "enabled" : "disabled"}
          >
            Register
          </SignUpBtn>
```

그러면 어떻게 정규표현식을 검사하고 state안의 값을 바꾸는지 알아보자

## inputValue 업데이트

입력폼에 입력된 값을 state값에 저장하기 위해서 handleChange함수에 value값을 추출하였다.

```
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
}
```

각 input속성에 name을 주어 email인지 password인지 입력되는 곳이 어디인지 알 수 있게 하였다.

console을 찍어보니 각 입력값이 해당 input value로 잘 들어가는 것을 확인 할 수 있었다.
![](https://velog.velcdn.com/images/jutrong/post/ae2ab10a-e1fd-4433-ae63-0e1108c40b73/image.png)

## 유효성 검사와 오류 메시지

그러면 정규표현식으로 유효성 검사를 어떻게 진행할 것인가에 대한 문제가 있었는데 각 입력폼에 대해 handleChange함수를 만들면 비슷한 함수가 많이 만들어지게 되어 어떻게 하면 하나의 handleChange함수에서 진행할 수 있을까 고민해보았다.

name이라는 속성으로 swich에 각 name에 맞는 입력폼을 처리할 수 있었다.
각 input별로 각 value를 처리하였다.

> RegExp.prototype.test() 메서드는 문자열이 정규표현식을 만족하는지 판별하고 그 여부를 true와 false로 반환한다.

```
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));

    let isEmailValid = false;
    let displayNameValid = false;
    let psdValid = false;
    let psdConfirm = false;
    let errorMessage = "";

    switch (name) {
      case "email":
        isEmailValid = inputRegexs.idRegex.test(value);
        errorMessage = isEmailValid ? "" : "유효하지 않은 이메일 형식입니다.";
        setInputValue((prev) => ({ ...prev, validEmail: isEmailValid }));
        break;
      case "displayName":
        displayNameValid = inputRegexs.nicknameRegex.test(value);
        errorMessage = displayNameValid
          ? ""
          : "유효하지 않은 닉네임 형식입니다.";
        setInputValue((prev) => ({
          ...prev,
          validDisplayName: displayNameValid,
        }));
        break;
      case "password":
        psdValid = inputRegexs.pwRegex.test(value);
        errorMessage = psdValid ? "" : "유효하지 않은 비밀번호 형식입니다.";
        setInputValue((prev) => ({ ...prev, validPassword: psdValid }));
        break;
      case "passwordConfirm":
        psdConfirm = inputValue.password === value;
        errorMessage = psdConfirm ? "" : "비밀번호가 같지 않습니다";
        setInputValue((prev) => ({
          ...prev,
          correctPwCheck: psdConfirm,
        }));
        break;
      default:
        break;
    }
    // console.log(`isValid: ${isEmailValid}, errorMessage: ${errorMessage}`);

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [`${name}Error`]: errorMessage,
    }));
  };

```

### ❗️비밀번호확인에 비밀번호를 똑같이 입력하면 값이 변경되지 않는 문제

```
psdConfirm = inputValue.password === inputValue.passwordConfirm;
        errorMessage = psdConfirm ? "" : "비밀번호가 같지 않습니다";
        setInputValue((prevValue) => ({
          ...prevValue,
          correctPwCheck: psdConfirm,
        }));
```

비밀번호와 비밀번호확인 값이 같은지 비교하여 같으면 ture, 다르면 false를 받는 변수를 만들었는데, 입력된 비밀번호값이 같아도 오류메시지가 출력되는 문제를 마주했다.

콘솔을 찍어보니

![](https://velog.velcdn.com/images/jutrong/post/37fe5e8d-8d82-42e7-afb4-174c85e3fec2/image.png)
![](https://velog.velcdn.com/images/jutrong/post/2d5271b2-7adb-48a2-b5eb-1e97d44e66a2/image.png)

입력된 값을 같지만 correctPwCheck에는 false가 출력되었다.

> 특이한점은 비밀번호확인 입력값에 아무값이나 한 번 더 입력하면 오류메시지가 뜨지 않는 것이였다.

이유를 생각해보니 state가 변경되었지만 리렌더링이 발생하지 않아 입력값은 같지만 correctPwCheck가 false에서 true로 변하지않고, 한 번 더 입력했을 때 true로 바뀌어 오류메시지가 안나오는게 아닐까하는 생각이 들었다.
</br >
</br >
위의 가정이 맞다면 state의 변경 방식에 답이 있다 생각하여 검색해보니 useState(정확히는 setState)가 비동기적으로 작동하여 일어나는 문제였다.
</br >
</br >
생각해보니 inputValue.password랑 inputValue.passwordConfirm 값을 왜 비교했지? 현재 value값을 바로 받아서 비교를 하면 되지 않나? 라는 생각이 문득 들었다.

코드를 psdConfirm = inputValue.password === value; 이렇게 수정하니 값을 바로 받을 수 있었고 값의 비교도 바로 되었다.
</br >
</br >

> ## useState는 왜? 비동기적으로 방식하는 것일까?
>
> setState는 React 컴포넌트의 상태를 업데이트하고 컴포넌트를 리렌더링하기 위한 함수인데 한 번에 상태 업데이트를 수행하여 성능 최적화를 가능하게 한다.
> 여러 setState호출을 동기적으로 처리한다면, 각각의 호출이 발생할 때마다 리렌더링이 발생하고 성능저하가 발생될 수 있다.

useState를 동기적으로 사용하고 싶다면 다양한 방식이 존재하지만
useEffect의 dependency를 활용하는게 쉽고 간단한 방법이다 !
</br >
</br >
useState가 비동기적으로 동작하는 것에 대해서는 따로 더 깊게 조사하고 포스팅해봐야겠다.
