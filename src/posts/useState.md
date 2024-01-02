---
date: "2023-12-16"
title: "useState는 어떻게 동작할까"
thumbnail: "https://i.pinimg.com/550x/6e/38/58/6e385876fc0825c967cad3bc935bf176.jpg"
---

React를 통해 개발하면서 useState는 필수적으로 사용할 것이다. 리액트 deep dive를 보기 전에는 hook의 역할과 사용법만 알고 내부 동작 원리가 어떻게 되는가, 정말 잘 사용하려면 어떻게 해야하나? 라는 깊은 생각은 하지 않았었다.
책을 읽고 이런 훅들이 어떻게 구현되는지 알아보려한다.

## useState

내부 구현 코드는 어떤가 리액트 깃허브 저장소를 살펴보면 react 모듈 내부의 useState는 initialState를 인자로 받는 함수로 선언되어있다.
더 거슬러 올라가서 dispatcher를 반환하는 resolveDispatcher 함수가 있다.
![](https://velog.velcdn.com/images/jutrong/post/d9d2afe5-639c-4956-adea-b7360cc5116d/image.png)
![](https://velog.velcdn.com/images/jutrong/post/c9543f95-d70d-4ed6-8c75-f9483ac628cd/image.png)
![](https://velog.velcdn.com/images/jutrong/post/1fa807b1-4c81-4ad1-8056-0d39b470bf4b/image.png)
ReactCurrentDispatcher라는 객체는 전역에 선언되었다.

useState를 포함한 hooks는 react 모듈에 선언되어있는 함수이고
실행 될 때 마다 dispatcher를 선언하고 useState 메소드 실행해서 그 값을 반환한다.
할당부를 거슬러 올라가니 dispatcher는 전역 변수 ReactCurrentDispatcher로부터 가져온다

함수가 선언부보다 상위에 있는 값에 접근한다. 그것은 ? 클로져 !

useState 메소드는 바로 이 클로저를 이용해서 함수의 상태를 기억한다.

외부에 선언된 상태값에 접근해서 이전 상태를 가져오고, 변경된 상태값을 관리한다.
함수형 컴포넌트도 결국 함수이기 때문에, 클로저를 통해 선언되는 시점에 접근 가능했던 외부 상태값에 계속 접근 할 수 있다.

> useState는 컴포넌트 내부에서 값을 변경시키는 것이 아니다. 외부에 있는 값을 변경시키기 때문에 상태가 변경된 직후 컴포넌트가 가진 값은 이전의 값을 그대로 참조한다.

```
let _value
export useState( initialValue){
	if(_value === undefined \{
		, - value = inttialvalue
	const setState = (newValue) =>{
_value = newValue
}
return [_value, setState]
}
```

useState 밖에 전역으로 선언된 \_value가 있다. 우리가 useState를 통해 관리하는 '상태'는 바로 이녀석이다. setState는 선언된 state가 아니라, 자신이 선언된 위치에서 접근할 수 있는 \_value를 변경한다.
setState 함수는 자신과 함께 반환된 변수를 변경시키는게 아니라, 다음 useState가 반환할 react 모듈의 \_value를 변경시키고, 컴포넌트를 리렌더링 시키는 역할. 변경된 값은 useState가 가져온다

```
const [state, setState] = useState(0);
useEffect(() => {
  setState(state + 1); // 분명 state에 1을 더했는데?
  console.log(state); // 호출: 0
}, []);
```

state 값이 새로운 값이 되려면 리랜더링이 되어야 하는데, JS는 싱글 스레드로 돌아가기 때문에 useEffect 에 들어있는 콜백이 마무리된 이후에 리랜더링이 진행될 것이다. 그러면 아직 console.log(state) 를 실행하는 시점에는 리랜더링이 되기 전이라는거니까, state 값은 0인 것이 당연하다ㅕr

### useState는 비동기적으로 동작한다.

회원가입을 구현할 때 비밀번호와 비밀번호확인이 같아야 true값을 반환하는 조건을 걸었다. state의 값들을 비교하였다. 같은 값을 입력했지만 여전히 false를 반환하였다. 무엇이 문제였을까해서 콘솔에 찍어보니 비밀번호 확인에서 입력된 값이 하나 덜 찍혀있었다. 무슨일일까?

이유는 useState(정확히는 setState)가 비동기적으로 동작하여 발생한 문제였다.
왜 비동기적으로 동작할까 ?

> 페이지를 구성하는데는 수많은 state가 존재한다. 만약 하나하나의 state 변화에 리랜더링을 발생시킨다면 성능 저하가 발생할 것이다.
> 이를 해결하기 위해서, React는 setState가 연속 호출되면 배치(batch) 처리를 통해 한번에 랜더링하게 하는 것이다.
> 많은 setState를 연속으로 사용해도 배치 처리로 인해 랜더링은 한번만 되는 것이다.

### useState를 동기적으로 사용하려면 ?

- useEffect의 dependency를 활용
  useEffect는 각 state를 dependency로 하여, state가 변경될 시 내부에 있는 함수들을 실행

```
useEffect(()=>{
	setState(value)
	},[value])
```

- setState 콜백 함수를 사용
  콜백 함수를 사용하여 이전 상태값을 참조

```
setState((prev)=>{...prev, currentValue : value})
```
