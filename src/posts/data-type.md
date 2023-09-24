---
date: "2023-06-02"
title: "[deep dive] 3. 데이터 타입"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrvjtiSJKJhze1nvoUOCLYyxAzxwA9LaDow&usqp=CAU"
---

최근에 강의를 들으면서 모르는 개념들과 추상적인 것들을 머릿속에 후두둑 붓는 느낌이 강하게 든다. 지금 내 머릿속은 과부하 상태일 것이다.
그런 상태일수록 원래 알고 있던 내용물들을 정리하면서 자리를 만들어주어야 새로운 지식이 들어올거같다.
블로그에 글을 쓰는 것도 머릿속에 있는 방을 정리하는 것이다.
새로운 것들이 잘 들어올 수 있게 정리를 잘 해놓자..!

# 데이터 타입

자바스크립트는 7개의 데이터 타입을 가진다.
6개의 원시 타입 그리고 객체 타입..
![](https://velog.velcdn.com/images/jutrong/post/c4cd8588-9083-4c8d-94e2-06794dbd514f/image.png)
데이터 타입에 따라 생성된 목적과 용도가 다르다.
**개발자는 명확한 의도를 가지고 타입을 구별해서 값을 생성해야한다.**

## 3-1 숫자 타입

```
3 // 정수 리터럴
5.3 // 부동 소수점 리터럴
0b111 // 2진수 리터럴 (binary literal)
0o423 // 8진수 리터럴 (octal literal)
0xf2 // 16진수 리터럴 (hexademical literal)
```

정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 메모리에 2진수로 저장된다.

### 숫자인지 문자열인지 판별하기

isNaN을 통해 판별

```
isNaN(123) // false
isNaN(elice) // true
isNaN(0) // false
isNaN(true) // false
isNaN("123") // false
isNaN(NaN) // true
```

### 정수인지 실수인지 판별하기

자바스크립트는 다른 프로그래밍 언어와는 다르게 정수와 실수를 별도의 타입으로 다루지 않습니다.
Number.isInteger 메소드를 사용해 판별할 수 있습니다.

```
Number.isInteger(1); // true
Number.isInteger(0.1); // false
```

### 문자열을 숫자 타입으로 바꾸기

문자열을 숫자 타입으로 바꾸기 위해 parseInt 혹은 parseFloat를 사용한다.
parseInt 함수는 첫 번째 인자를 문자열로 변환하고, 그 값을 파싱하여 정수나 NaN을 반환한다.

```
parseInt('123'); // 123
parseInt('110',2); // 6 (문자열을 2진수로 반환)
parseFloat('12.345'); // 12.345
parseInt('hello'); // NaN
```

## 3-2 문자열 타입

문자열은 작은따옴표(' '), 큰따옴표(" ") 또는 백틱(``)으로 텍스트를 감싼다.
다른 타입과 달리 따옴표로 감싸는 이유는 키워드나 식별자 같은 토큰과 구분하기 위해서이다.

그리고 따옴표로 문자열을 감싸지 않는다면 스페이스와 같은 공백 문자도 포함시킬 수 없다.

## 3-3 템플릿 리터럴

문자열 리터럴의 일종으로 템플릿 리터럴을 사용하려면 백틱(``)으로 문자열을 둘러싸면 된다.

```
const name1 = 'Foo';
const name2 = 'Bar';

const sentence1 = `${name1} meets ${name}!` // Foo meets Bar!
const sentence2 = name1 + ' meet ' + name2 + '!';
```

또한, 템플릿 리터럴을 사용하면 여러 줄로 이루어진 문자열을 쉽게 표현할 수 있다.

```
`hello
elice
my
name
is
`

//일반적으로 \n을 통해 개행시킴
hello\nelice\nmy\nname\nis
```

## 3-4 불리언 타입

boolean 타입에 해당하는 값은 true, false 두 가지 밖에 없다.

### truthy & falsy

자바스크립트에서는 불리언 타입이 있어야하는 자리에 다른 타입의 값이 와도 에러가 나지 않고 실행된다.

```
if(1) {
	console.log('이 코드는 실행됩니다.');
}

if(0) {
	console.log('이 코드는 실행되지 않습니다.')
}
```

어떤 값들을 true로, 어떤 값들은 false로 취급되는데, 전자를 truthy, 후자를 falsy라고 부른다. 자바스크립트에서는 아래의 값들을 모두 falsy이고, 이를 제외한 모든 값들은 truthy이다.

- false
- null
- undefined
- 0
- NaN
- ' '
  이것을 활용하면 짧은 코드를 만들 수 있지만, 코드 의미가 불분명해지거나 논리적으로 놓치는 부분이 생길 수 있으니 주의해서 사용해야 한다.

## 3-5 undefined 타입

변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다.
개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값이다.

## 3-6 null 타입

변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미이다.

프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 undefined보다 항상 null을 사용하는 것이 좋다.

## 3-7 심벌 타입

변경 불가능한 원시 타입의 값으로 다른 값과 중복되지 않는 유일무이한 값이다.

## 3-8 데이터 타입의 필요성

메모리 값을 저장하려면 먼저 확보해야 할 메모리 공간의 크기를 결정해야 한다.
자바스크립트 엔진은 데이터 타입, 즉 값의 종류에 따라 정해진 크기의 메모리 공간을 확보한다. 데이터 다입에 따라 확보해야 할 메모리 공간의 크기가 결정되는 것이다.

### 데이터 타입이 필요한 이유

- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
- 겂울 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

## 3-9 동적 타이핑

### 동적 타입 언어와 정적 타입 언어

자바스크립트는 동적 타입 언어이다.
정적 타입 언어와 다르게 동적 타입 언어는 변수를 선언할 때 변수에 할당할 수 있는 데이터 타입을 사전에 선언하지 않아도 된다.
값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든지 자유롭게 변경할 수 있다.
변수는 선언이 아닌 할당에 의해 타입이 결정된다.
재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. - 동적 타이핑

### 동적 타입 언어의 장점과 단점

동적 언어 타입의 특징은 데이터 타입에 대해 무감각해질 정도로 편리하다는 것이다.
변수 값을 바꾸기 쉬워서 변수 값을 추적하기 어려울 수 있다.

> 결국 동적 타입 언어는 _**유연성은 높지만 신뢰성은 떨어진다.**_

### 변수를 사용할 때 주의점

- 변수는 꼭 필요한 경우에 제한적으로 사용한다.
  (변수의 개수가 많으면 많을수록 오류 발생 빈도가 높아진다.)
- 변수의 유효 범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.
- 전역 변수는 최대한 사용 금지한다.
  (의도치 않게 변경 가능성이 높고 다른 코드에 영향을 줌, 오류 추적이 어려움)
- 변수보다는 상수를 사용해 값의 변경을 억제해야 한다.
- 변수 이름은 목적이나 의미를 파악할 수 있게 네이밍해야 한다.

> 컴퓨터가 이해하는 코드는 어떤 바보도 쓸 수 있다. 하지만 프로그래머는 사람이 이해할 수 있는 코드를 쓴다. -마틴 파울러

나는 아직 컴퓨터가 이해하는 코드도 못쓰는 바보이다.
일단 바보가 되려고 노력해보자.
오늘부터 나의 목표는 바보다.
road to be 바보!