---
date: "2023-06-08"
title: "[deep dive] 6.타입 변환과 단축 평가"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://i.pinimg.com/550x/6e/38/58/6e385876fc0825c967cad3bc935bf176.jpg"
---

## 6-1 타입 변환과 단축 평가

개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다.

개발자의 의도와는 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.  
이를 암묵적 타입 변환, 타입 강제 변환이라 한다.

이 둘의 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니다.
기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.

## 6-2 암묵적 타입 변환

자바스크립트는 가급적 에러를 발생시키지 않도록 암묵적 타입 변환을 통해 표현식을 평가한다.

### 6-2-1 문자열 타입으로 변환

+연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.

```
// 숫자 타입
0 + ''              // "0"
-0 + ''             // "0"
1 + ''              // "1"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
-Infinity + ''      // "-Infinity"

// 불리언 타입
true + ''           // "true"
false + ''          // "false"

// null 타입
null + ''           // "null"

// undefined 타입
undefined + ''      // "undefined"

// 심볼 타입
(Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
[10, 20] + ''       // "10,20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"
```

### 6-2-2 숫자 타입으로 변환

```
1 - '1'    // 0
1 * '10'   // 10
1 / 'one'  // NaN
```

자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.

피연산자를 숫자 타입으로 변환해야 할 컨텍스트는 산술 연산자 뿐만이 아니다.

```
'1' > 0   // true
```

비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.

```
// 문자열 타입
+''             // 0
+'0'            // 0
+'1'            // 1
+'string'       // NaN

// 불리언 타입
+true           // 1
+false          // 0

// null 타입
+null           // 0

// undefined 타입
+undefined      // NaN

// 심볼 타입
+Symbol()       // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{}             // NaN
+[]             // 0
+[10, 20]       // NaN
+(function(){}) // NaN
```

### 6-2-3 불리언 타입으로 변환

자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 인식할 값) 또는 Falsy 값(거짓으로 인식할 값)으로 구분한다. 즉, Truthy 값은 true로, Falsy 값은 false로 변환된다.

아래 값들은 불리언 값으로 평가되어야 할 컨텍스트에서 false로 평가되는 falsy값이다.

- false
- undefined
- null
- 0, -0
- NaN
- '' (빈 문자열)

Falsy 값 외의 모든 값은 모두 true로 평가되는 Truthy 값이다.

## 6-3 명시적 타입 변환

### 6-3-1 문자열 타입으로 변환

1. String 생성자 함수를 new 연산자 없이 호출하는 방법
2. Object.prototype.toString 메소드를 사용하는 방법
3. 문자열 연결 연산자를 이용하는 방법

```
/ 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1));        // "1"
console.log(String(NaN));      // "NaN"
console.log(String(Infinity)); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log(String(true));     // "true"
console.log(String(false));    // "false"

// 2. Object.prototype.toString 메소드를 사용하는 방법
// 숫자 타입 => 문자열 타입
console.log((1).toString());        // "1"
console.log((NaN).toString());      // "NaN"
console.log((Infinity).toString()); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log((true).toString());     // "true"
console.log((false).toString());    // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"

// 불리언 타입 => 문자열 타입
console.log(true + '');     // "true"
console.log(false + '');    // "false"
```

### 6-3-2 숫자 타입으로 변환

1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
3. +단항 산술 연산자를 이용하는 방법
4. \*산술 연산자를 이용하는 방법

```
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53

// 불리언 타입 => 숫자 타입
console.log(Number(true));    // 1
console.log(Number(false));   // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseFloat('10.53')); // 10.53

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0
console.log(+'-1');    // -1
console.log(+'10.53'); // 10.53

// 불리언 타입 => 숫자 타입
console.log(+true);    // 1
console.log(+false);   // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
console.log('-1' * 1);    // -1
console.log('10.53' * 1); // 10.53

// 불리언 타입 => 숫자 타입
console.log(true * 1);    // 1
console.log(false * 1);   // 0
```

### 6-3-3 불리언 타입으로 변환

1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. ! 부정 논리 연산자를 두 번 사용하는 방법

```
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 숫자 타입 => 불리언 타입
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true
// null 타입 => 불리언 타입
console.log(Boolean(null));      // false
// undefined 타입 => 불리언 타 입
console.log(Boolean(undefined)); // false
// 객체 타입 => 불리언 타입
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
console.log(!!'');        // false
console.log(!!'false');   // true
// 숫자 타입 => 불리언 타입
console.log(!!0);         // false
console.log(!!1);         // true
console.log(!!NaN);       // false
console.log(!!Infinity);  // true
// null 타입 => 불리언 타입
console.log(!!null);      // false
// undefined 타입 => 불리언 타입
console.log(!!undefined); // false
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
console.log(!![]);        // true
```

## 6-4 단축 평가

### 6-4-1 논리 연산자를 사용한 단축 평가

```
'Cat' && 'Dog' // “Dog”
```

논리곱 연산자 &&는 두개의 피연산자가 모두 true로 평가될 때 true를 반환한다. 대부분의 연산자가 그렇듯이 논리곱 연산자도 오른쪽에서 왼쪽으로 평가가 진행된다.

1. 첫번째 피연산자 ‘Cat’은 Truthy 값이므로 true로 평가된다. 하지만 이 시점까지는 위 표현식을 평가할 수 없다. 두번째 피연산자까지 평가해 보아야 위 표현식을 평가할 수 있다.
2. 두번째 피연산자 ‘Dog’은 Truthy 값이므로 true로 평가된다. 이때 두개의 피연산자가 모두 true로 평가되었다. 이때 논리곱 연산의 결과를 결정한 것은 두번째 피연산자 ‘Dog’다.
3. 논리곱 연산자 &&는 논리 연산의 결과를 결정한 두번째 피연산자의 평가 결과 즉, 문자열 ‘Dog’를 그대로 반환한다.

```
'Cat' || 'Dog' // 'Cat'
```

논리합 연산자 ||는 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 대부분의 연산자가 그렇듯이 논리합 연산자도 오른쪽에서 왼쪽으로 평가가 진행된다.

1. 첫번째 피연산자 ‘Cat’은 Truthy 값이므로 true로 평가된다. 이 시점에 두번째 피연산자까지 평가해 보지 않아도 위 표현식을 평가할 수 있다.
2. 논리합 연산자 ||는 논리 연산의 결과를 결정한 첫번째 피연산자의 평가 결과 즉, 문자열 ‘Cat’를 그대로 반환한다.
   ![](https://velog.velcdn.com/images/jutrong/post/809424f5-090b-4dde-956f-14804ce513a1/image.png)

단축평가는 다음과 같은 상황에서 유용하게 사용된다.

- 객체가 null인지 확인하고 프로퍼티를 참조할 때

```
var elem = null;

console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // null
```

- 함수의 인수를 초기화 할 때

```
/ 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```

함수를 호출할 때 인수를 전달하지 않으면 매개변수는 undefined를 갖는다. 이때 단축 평가를 사용하여 매개변수의 기본값을 설정하면 undefined로 인해 발생할 수 있는 에러를 방지할 수 있다.

### 6-4-2 옵셔널 체이닝 연산자

옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조
var value = elem?.value;
console.log(value); // undefined
```

옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 false로 평가되는 falsy값이라도 우항의 프로퍼티 참조를 이어간다.

```
var str = '';

// 좌항 피연산자가 false로 평가되는 값
var length = str?.length;
console.log(length); // 0
```

### 6-4-3 null 병합 연산자

null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

_**null 병합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.**_

```
var foo = null ?? 'default string';
console.log(foo); // "default string"
```

null 병합 연산자??는 좌항의 피연산자가 false로 평가되는 falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.

```
// 좌항의 피연산자가 Falsy 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 반환한다.
var foo = '' ?? 'default string';
console.log(foo); / ""
```
