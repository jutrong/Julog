---
date: "2023-11-11"
title: "내가 생각하는 클린코드란"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://images.unsplash.com/photo-1489110804417-276c3f517515?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

# 원티드 11월 프리온보딩 클린코딩에 대한 특강을 듣고 정리한 내용입니다.

---

<br/>

## 1. 내가 생각하는 클린코드란

🌍 빠르게 이해

-- 어떤 누군가가 코드를 볼 때 의도를 이해할 수 있고, 어떤 화면, 어떤 기능을 나타내는지 알아차릴 수 있어야 한다.

-- 코드 작성자만이 코드를 이해하는 것이 아닌 모든 팀원이 로직을 빠를게 찾을 수 있는 코드이다.

🌍 확장성

-- 수정과 확장에 용이한 코드

🌍 명확한 목정성 & 역할

- 어떤 역할을 하는지 명확하게 보여주는 함수명이나 변수명을 사용한 코드

🌍 기능

-- 기능적으로도 리소스의 많은 낭비 없이 만들고자 하는 기능에 충실할 수 있는 코드

## 2. 프론트엔드에서 클린 코드란

🌍 성능을 고려한 코드

🌍 크로스 브라우징을 고려한 코드

** 백엔드에서 잘못된 코드는 서버의 자원을 먹는다!
** 그러면 프론트엔드에서 잘못된 코드는 ??

- 브라우저와 서버의 리소스를 모두 냠냠한다!

## 3. 내가 클린코드보다 중요하게 생각하는 것

🌍 관성 있는 규칙

🌍 기능이 먼저 우선시 된 후 리팩토링 과정을 통해 클린코드로나마 발전시키는 것도 좋은 방향이다

## 4. 선호하는 방식

#### 4-1 Tab vs Space

🌍 물리적으로는 Tab을 누르지만 소프트웨어에서는 Space로 인식하도록 설정

#### 4-2 세미콜론 O vs 세미콜론 X

- 세미콜론 0
  - 세미콜론 있는 것을 선호합니다. 그리고 린트와 포매터에게 모든걸 위임

#### 4-3 count ++; vs count +=1; vs count = count + 1

- count = count + 1
  - 사람은 생각보다 똑똑하지 않다.
    후위 연산자나 단축을 해주는 연산자들이 반복문에 있거나 조건문에 들어가 있을 때 대부분 동작하는 것을 예측하지 못한다
    런타임에러가 나는 것을 쉽게 찾기위해

#### 4-4 if(isLogin){} vs if (isLogin === true){}

- is -Prefix는 불리언 플래그를 의미하기 때문에 당연히 Truthy를 사용해도 된다고 생각
  팀내에서 규칙을 만들어야 한다.

## case-01

1. 매개 변수를 2개가 넘지 않도록 만든다.
2. arguments, rest parameter 너무 남용하지 말자
3. 매개변수를 객체에 담아서 넘긴다.
4. 함수를 쓰는게 두려우면 랩핑하는 함수를 만들자

```
// 내가 만든 이 함수가 100개 이상의 스코프에서 사용된다면?
// 첫번째 argument랑 네번째 argument만 사용하고 싶다면?
// 래퍼함수를 하나 만든다..

function someFunc(someArg1, someArg2, someArg3, someArg4){
}
// 100개 이상의 함수 사용성을 보존한다.
function someSomeFunc(arg1, arg4) : void
{
	someFunc(arg1, undefined, undefined, arg4)
}
```

## case-02

```
// 1. 동작한다 vs 안한다
<p>
{(()=>{
switch(this.state.color) {
	case 'red' : return 'FF0000';
    case 'green' : return '#00FF00';
    case 'blue' : return '#0000FF';
    default : return '#FFFFFF';
    }
  })()}
</p>
```

동작한다.
왜 동작할까 ? > 즉시실행함수(IIFE) 표현식이기 때문에 > 표현식이 무엇일까 > 값을 생성하는 것 > 그렇기 때문에 JS에서 렌더링이 된다.
{()()} > 함수가 실행된다.

## case-03

```
// 1. 실행된다 vs 안된다
function ReactComponent ( ) : any {
	return (
    	<tbody>
        	{(()=>{
            	const rows = [];
                for (let i = 0l i < objectRows.length; i++) {
                rows.push(<ObjectRow key={i} data={objectRows[i]}/>)
                }
                return rows;
                })()}
          </tbody>
        );
      }

```

가운데 있는건 상관업이 return이 있기 때문에 실행된다.

## case-04

```
function ReactComponent() {
	return (
    	<div>
        	{{()=>{
            	if (conditionOne) return <span>One</span>
                if (conditionTwo) return <span>Two</span>:
                else conditionOne;
                return <span>Three</span>;
            })()}
    	</div>
    )
}
```

조건부 렌더링을 이해하고 있는지 판단해보자

```
cont example = condition1 ? ( a === 0 ? 'zero' : 'positive' ) : 'negative';
// 두뇌풀가동을 당하고 싶지 않다면 괄호를 넣어서 우선순위를 매겨주자!!
```

## 5. 의식적인 훈련/함수

- 함수를 만들 때는 사용되는 입장을 생각해야 한다.
  내가 만든 함수가 회사에서 가장 인기가 많은 함수로 만들어야 된다라는 생각을 가져야 한다.
  - 누군가에게 사용될 함수를 만들자
  - 누군가가 만든 함수를 잘 사용하자
- 함수는 input을 받고 output을 준다
  - void함수가 지속된다면 의심해야한다. -함수는 반환값을 가지는게 좋다.
    비즈니스로직 함수를 만들 때 반환값이 없는 함수를 만들 때 반환값이 없으면 잘못만든 함수일 가능성이 높다.
    반환이 없으니깐 코드가 늘어지고 수많은 역할을 하다 함수 생명주기를 다하고 죽음
    api콜을 보내는 함수는 예외
  - 1급 객체를 이해해야한다.
    의식적으로 하나의 역할을 하는 함수를 만들자
- 의식적인 훈련을 할 때 서버를 생각하자.

```
function getUserType(tyoe){
	if(type === 'ADMIN') {
    	return '관리자'
    } else if (type ==='INSTRUCTOR'){
    	return '강사'
    } else if (type === 'STUDENT'){
    	return '수강생'
    }
}
```

여기서 이 함수의 문제점은 회사의 요구사항에 따라서 type이 추가되면 추가개발을하고 유지보수가 힘들다.

```
function getUserType(tyoe){
	if(type === 'ADMIN') {
    	return '관리자'
    } else if (type ==='INSTRUCTOR'){
    	return '강사'
    } else if (type === 'STUDENT'){
    	return '수강생'
    } else {
    	return '해당 없음'
    }
}
```

예외처리는 꼼꼼하게 해야한다.

```
function getUserType(type) {
	const USER_TYPE = {
    	ADMIN: '관리자',
        INSTRUCTOR: '강사',
        STUDENT: '수강생',
    }
    return USER_TYPE[type] ?? '해당 없음'
```

## 6. 의식적인 훈련/점진적으로 개선하라

- 유저가 많은 회사일수록 대기업이거나 가고 싶은 회사일 가능성이 크다.
  인기 많은 서비스에서의 리팩터링은 정말 전쟁터이다.
  그런 회사일수록 리팩터링이 힘들고 리팩터링 해야하는 근거를 마련해야한다.
  회사를 설득하고 동료를 설득하고 다른 일과 병렬로 할 수 있는가?
  철저한 PoC => 점진적으로 쪼개어 나가기

예시 ) JS 컴포넌트 만들기, Web Components로 만들기, 만든 컴포넌트 배포하기, 배포한 컴포넌트 직접 가져다쓰기,

- 개발을 모르는 유저를 위한 기능 늘려가기
- 개발자를 위한 라이브러리 만들며 확장하기
- 기술적인 챌린지하기 ( Bottom => UP )
  첫 페이지만 SSR 돌도록 직접 구현하기 > Next.js 사용
- 기술적인 챌린지하기
  Next.js 사용해보기 => 첫 페이지만 SSR 돌도록 직접 구현하기

## 7. 타인을 위한 코드

- 구조도를 그리고 공유하자
- 주석이 없는 코드를 작성하도록 노력하자
- 불필요한 코드를 지우는 것도 코딩이다.
- 내 코드를 설명하라
- 꾸준히 리뷰 받자
- 코드 리뷰에 취해있지 말자
- 못해도 한달 후에 알아봐야한다.

## 8. 자동화

- 모든 것을 사람이 다 할 수는 없다.
  ESlint, Prettier, Husky Editor Config는 기본
  성숙한 팀에서는 .vscode까지 버전관리하거나 custorm ESlint 제작
- 어느 구간에 자동화를 돌릴 것인가
  commit => merge => Deploy
  코드가 정의될 곳을 정하면 안전하고 좋은 규칙이 정해질 수 있다.

## 9. 멘탈 모델

-- 도구에 매몰된다.

- 패턴에 매몰된다
- 요구사항 분석이 아니라 패턴이나 기술부터 정하고 시작한다.
- 고민할 시간에 남들을 따라한다
- 나도 모르게 클론 코딩한다.
- 남이 공부한 자료를 생각 없이 따라 적용한다.

- 보이스카우트 규칙
  떠날 때를 찾을 때보다 캠프장을 더욱 깨끗이 해라.
  레거시를 비난하고 불평할 시간에 그 코드를 개선하자
  잘 만드는 사람이 있고 잘 고치는 사람이 있다,

- 르블랑의 법칙
  나중은 결코 오지 않는다. 그냥 지금해라. 한 번 작성한 쓰레기 코드를 나중에 수정할 수 있을까? 안한다
