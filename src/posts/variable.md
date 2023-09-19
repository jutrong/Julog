---
date: "2023-05-30"
title: "[deep dive] 1. 변수 (variable)"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "data:image/jpeg;base64,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"
---

웹개발 공부를 시작하면서, 접하게 되는 단어들에 대해서 깊게 생각을 해본적이 없는거같다. 그냥 변수, 객체, 함수, 할당, 선언 등등 아 그런 것이 있구나, 어떻게 쓰면 될까라는 쓰임새에 대해서만 인지하고 넘어가는 정도였다.
하지만
내가 웹 개발을 공부하기로 마음 먹었으면 그리고 프론트엔드 개발자가 되기 위해서는 그러면 안되겠다는 것을 깨닫고 *[모던 자바스크립트 deep dive]*를 통해 개발자가 되기 위한 초석을 다지려 한다.

# 1. 변수가 대체 무엇일까?

> 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름이다.

![](https://velog.velcdn.com/images/jutrong/post/24a3d550-4f4a-4fc8-adab-60b2024c29ed/image.png)

각 셀은 고유의 메모리 주소를 갖는다.
숫자 10과 20은 메모리 상의 임의의 위치에 기억되고 cpu는 이 값을 읽어들여 연산을 수행한다. 숫자 30도 메모리 상의 임의의 위치에 저장된다.
하지만,
숫자 30이라는 값을 꺼내어 재활용을 할 수는 없을 것이다.
직접적인 메모리 제어를 하지 않고, 값을 저장하고 그 값을 읽어들이기 위해 변수라는 메커니즘을 제공한다.

```
var result = 10 + 20;
```

변수에 값을 저장하는 것은 할당(대입,저장)이라 하며, 변수에 저장된 값을 읽어 들이는 것을 참조라고 한다.

## 1-1 식별자

**식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.**

- 식별자는 값이 저장되어 있는 메모리 주소와 매핑 관계를 맺으며, 매핑 정보도 메모리에 저장된다.
- 식별자는 값이 아니라 메모리 주소를 기억하고 있다.

즉 식별자는 메모리 주소에 붙인 이름이다.

## 1-2 변수 선언

```
var score; // 변수 선언(변수 선언문)
```

![](https://velog.velcdn.com/images/jutrong/post/af8e606f-cbda-47c1-919c-1f1b56193f47/image.png)

변수 선언은 선언 단계, 초기화 단계를 거쳐 수행한다.

- 선언 단계 : 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
- 초기화 단계 : 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

초기화란 변수가 선언된 이후 최초로 값을 할당하는 것이다.
var 키워드로 선언한 변수는 어떠한 값도 할당하지 않아도 undefined라는 값을 가진다.

**var 키워드를 사용한 변수 선언은 선언 단계와 초기화 단계가 동시에 진행된다.**

## 1-3 호이스팅

자바스크립트 변수는 총 3단계에 걸쳐 생성된다.

1. 선언단계
2. 초기화 단계
3. 할당 단계 : 변수에 실제로 값을 할당하는 단계이다.

```
console.log(score); // undefined

var score; // 변수 선언문
```

> 변수 선언은 소스코드가 한 줄씩 순차적으로 진행되는 런타임이 아니라, 그 이전 단계에서 먼저 실행된다.
> 소스 코드의 평가 과정이 끝나면 비로소 변수 선언을 포함한 모든 선언문을 제외하고 소스 코드를 한 줄씩 실행한다.

위에서 언급했던 var 선언 방식은 선언 단계와 초기화 단계가 동시에 일어나게 되어서 호이스팅한 var 선언으로 인해 undefined가 출력된다.

###### **(마치 변수 선언문이 맨위로 끌어올려져(Hoisting) 실행되는 것처럼 보여서, 호이스팅이라고 한다.)**

_**선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.**_

```
function sayHi() {
	alert(phrase); // undefined

    var phrase = "hello"; // 할당은 실행 흐름이 해당 코드에 도달했을 때 실행됨
 }
 sayHi();
```

var phrase = "hello" 행에서는 두 가지 일이 일어납니다.

1. 변수 선언 ( var )
2. 변수에 값을 할당( = )

변수 선언은 함수 실행이 시작될 때 처리되지만(hoisting) 할당은 호이스팅 되지 않기 때문에 할당 관련 코드에서 처리됩니다.

## 1-4 값의 할당

```
var score; // 변수 선언
score = 80; // 값의 할당
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var score = 80; // 변수 선언과 값의 할당 (단축표현)
```

**변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다.**

![](https://velog.velcdn.com/images/jutrong/post/2849b960-bf1c-4e8e-897c-9c8a75c8c65b/image.png)

\*이전 값 undefined가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 할당 값 80을 새롭게 저장하는 것이 아니라 새로운 메모리 공간을 확보하고 그곳에 할당 값 80을 저장한다.

## 1-5 값의 재할당

```
var score =80; // 변수 선언과 값의 할당
score = 90; // 값의 재할당
```

> 값을 재할당할 수 없어서 변수에 저장된 값을 변경할 수 없다면 변수가 아니라 상수(constant)라고 한다.

![](https://velog.velcdn.com/images/jutrong/post/56f28cf5-1f66-4fa4-bd41-72ad173d02f5/image.png)

- 재할당은 현재 변수에 저장된 값을 버리고 새로운 값을 저장하는 것.
- 변수에 처음으로 값을 할!
  당하는 것도 재할당.
  (원시타입은 변경이 불가능하므로 재할당을 해야함)
- 지우고 다시 그 자리에 저장하는 것이 아닌 새로운 메모리 공간을 확보.

## 1-6 식별자 네이밍 규칙

식별자는 다음과 같은 네이밍 규칙을 준수해야 한다.

> - 특수문자를 제외한 문자, 숫자, 언더스코어(\_), 달러기호($)를 포함할 수 있다.

- 단, 식별자는 특수문자를 제외한 문자, 언더스코어(\_), 달러기호($)로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
- 예약어는 식별자로 사용할 수 없다.

```
var person, $elem, _name, first_name, val1; // ok
var 이름, tiếng Việt; // ok

var first-name; // - 사용금지
var 1st;  // 가장 첫글자 숫자금지
var const; 예약어금지
```

```
var firstname;
var firstName;
var FIRSTNAME; // 대소문자 구별하므로 모두 다른 변수이다.
```

#### 네이밍 컨벤션

```
// 카멜 케이스 (camelCase)
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase )
var FirstName;

// 헝가리언 케이스 (typeHungarianCase )
var strFirstName; // type + 식별자
var $elem = document.getElementById('myId') // DOM 노드
```

**자바스크립트에서는 일반적으로 변수나 함수의 이름에는 카멜 케이스를 사용하고,
생성자 함수, 클래스의 이름에는 파스칼 케이스를 사용한다.**

---

변수는 간결하고, 명확해야 한다. 변수가 담고있는 것이 무엇인지 변수를 통해서 알 수 있어야 한다.
변수의 이름을 짓는 것은 프로그래밍에서 가장 복잡하고 중요한 기술 중 하나이다. 변수명만 슬쩍 봐도 초보자가 코드를 작성했는지, 노련한 개발자가 작성했는지 한 눈에 알 수 있다.
협업과 품질 향상에 도움을 줌으로 변수 이름은 _**첫아이 이름을 짓듯이 심사숙고해서 지어야 한다.**_
