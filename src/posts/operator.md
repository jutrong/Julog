---
date: "2023-06-06"
title: "[deep dive] 4. 연산자"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "data:image/jpeg;base64,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"
---

## 4. 연산자

> 연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입, 지수 연산 등을 수행해 하나의 값을 만든다.

피연산자 - "값"이라는 명사의 역할
연산자 - "피연산자를 연산하여 새로운 '값'을 만든다"라는 동사의 역할

### 4-1 산술 연산자

피연산자의 개수에 따라 이항 산술 연산자와 당항 산술 연산자로 구분

#### 이항 산술 연산자

모든 이항 산술 연산자는 피연산자의 값을 변경하는 _부수 효과가 없다._
어떤 산술 연산을 해도 피연산자의 값이 바뀌는 경우는 없고 언제나 새로운 값을 만들 뿐이다.
![](https://velog.velcdn.com/images/jutrong/post/a5e9c34c-7b5e-4363-8dae-5103c09a8a9d/image.png)

#### 단항 산술 연산자

1개의 피연산자를 산술 연산하여 숫자 값을 만든다.
증가/감소(++/--)연산자는 피연산자의 값을 변경하는 부수 효과가 있다.

증감 연산자는 연산자가 어디에 위치했는가에 따라
전위 연산자와 후위 연산자로 구분된다.

**후위 연산자**

- 피연산자 뒤에 위치한 후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후, 피연산자의 값을 증가/감소시킨다.

```
let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`); // x:4 , y:3
```

후위 연산자는 변수를 먼저 할당한 뒤에 연산을 수행한다.
![](https://velog.velcdn.com/images/jutrong/post/f080ecb6-99f5-4f7a-a296-4acf9b7bbbf0/image.png)

```
let x = 3;
let y; // 이 시점에서 y는 undefined 상태

y = x; // 대입 한 뒤에 (이 시점에서 x=3, y=3)
x = x+1 // 연산을 수행 (이 시점에서 x=4, y=3)
console.log(`x:${x}, y:${y}`); // x:4 , y:3
```

**전위 연산자**

- 피연산자 앞에 위치한 전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소 시킨 후, 다른 연산을 수행한다.

```
let x = 3;
let y = ++x;

console.log(`x:${x}, y:${y}`); // x:4, y:4
```

결과는 x:4 , y:4이다. 처음에는 이해가 안되었지만
연산을 먼저 수행한 뒤에 변수를 할당된다고 생각하니 이해가 된다.

![](https://velog.velcdn.com/images/jutrong/post/a1ac6b03-e5eb-4dc7-b92d-a5bcd7c6d4af/image.png)

```
let x = 3;
let y = 3; // undefined

x = x + 1 // 증가를 먼저 시켜주고
y = x // x를 할당
console.log(`x:${x}, y:${y}`); // x:4, y:4
```

결국 전위, 후위 연산자의 차이는 연산이 먼저 수행되냐 할당이 먼저되냐 차이인거같다. 전위는 ++가 앞에 있기 때문에 연산먼저 후위는 ++가 뒤에 있기 때문에 할당 먼저라고 이해를 해두자.

### 4-2 할당 연산자

> 할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 좌항에 변수에 값을 할당하므로 변수 값이 변하는 부수 효과가 있다.

```
// 연쇄 할당, 오른쪽에서 왼쪽으로 진행
let x = 5;
let y = 10;
let z = 25;

x = y; // x는 10입니다.
x = y = z; // x,y,z 모두 25입니다.
```

### 4-3 비교 연산자

> 좌항과 우항의 피연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.

#### 동등/일치 비교 연산자

동등 비교(==)연산자는 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다. - 편리한 경우도 있지만 결과를 예측하기 어렵고 실수하기 쉽다.

일치 비교(===)연산자는 타입도 같고 값도 같은 경우에 한하여 true를 반환한다. - 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.

### 4-4 삼항 조건 연산자

![](https://velog.velcdn.com/images/jutrong/post/a3c7dda6-6ee5-40bb-a29e-dd385c95d504/image.png)

물음표(?) 앞의 첫 번째 피연산자는 조건식
조건식이 참이면 콜론(:) 앞의 두 번째 피연산자가 평가되어 반환되고
거짓이면 콜론 뒤의 세 번째 피연산자가 평가되어 반환된다.

```
let a = 10;
let b = 5;

if(a > b) {
  console.log(true);
 } else {
  console.log(false);
 } // true
```

=

```
let a = 10;
let b = 5;

const value = a > b ? true : false;

console.log(value); // true
```

삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if...else문은 값처럼 사용할 수 없다.

위에서 예시를 보면 value라는 변수에 true를 반환한다.
조건에 따라 어떤 값을 결정해야 한다면 if...else문보다 삼항 조건 연사자 표현식을 사용하는 편이 유리하다.
하지만 조건에 따라 수행해야 할 문이 하나가 아니라 여러 개라면 if...else문의 가독성이 더 좋다.

### 4-5 논리 연산자

![](https://velog.velcdn.com/images/jutrong/post/6e14c377-617a-4ef1-875f-69888fca4555/image.png)

#### 첫 번째 truthy를 찾는 or 연산자 ||

```
result = value1 || value2 || value3;
```

result는 무엇을 반환할까?

- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가
- 각 피연산자를 불린형으로 변환. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
- 피연산자를 모두 평가한 경우(모든 피연산자가 false로 평가된 경우) 마지막 피연산자를 반환.

**반환 값은 형 변환을 하지 않은 원래의 값이다**

```
alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)
```

```
let first = "";
let last = "";
let benchPress = "chest"
alert(first || last || benchPress || "주현"); // 120
```

왜 120이 출력될까?
benchPress가 truthy이기 때문에
모든 변수가 falsy이면 "주현"이 출력되었을 것.

#### 첫 번째 falsy를 찾는 AND 연산자 &&

or 연산자의 알고리즘과 유사하지지만 or 연산자는 첫 번째 truty를 반환하는 반면 and 연산자는 첫 번째 falsy를 반환한다.

```
// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0
```

모두 truthy이면 마지막 값 반환..

```
alert( 1 && 2 && 3 ); // 마지막 값 3 반환
```

### 4-6 typeof 연산자

> 피연산자의 데이터 타입을 문자열로 반환한다.

null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하자.
선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined를 반환한다.

출처
https://velog.io/@iamhayoung/JavaScript-증감-연산자-Feat.-전위-연산자-후위-연산자
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Assignment
https://ko.javascript.info/logical-operators
