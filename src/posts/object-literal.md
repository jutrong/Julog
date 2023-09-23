---
date: "2023-06-14"
title: "[deep dive] 7. 객체 리터럴"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://m.classywacky.com/file_data/ttomi628/2021/05/16/20ec3c607c715921f33316df26513cdc.jpeg"
---

## 7-1 객체란?

자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 '모든 것'이 객체이다.
![](https://velog.velcdn.com/images/jutrong/post/92846333-bc44-4475-a9a4-f044672ef71d/image.png)

프로퍼티 값이 함수일 경우, 일반 함수와 구별하기 위해 메서드라 부른다.

객체는 프로퍼티와 메서드로 구성된 집합체이다.

- 프로퍼티 : 객체의 상태를 나타내는 값
- 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작

## 7-2 객체 리터럴에 의한 객체 생성

### 7-2-1 객체 생성 방식

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

#### 7-2-2 객체 리터럴 방식

```
var person = {
	name : "Lee",
    sayHello : function() {
    	console.log(`hello, ${this.name}`)
      }
    };
```

#### 7-2-3 Object() 생성자 함수

```
//비어있는 객체 생성
var person1 = new Object();

//person1객체의 프로퍼티를 할당
person1.name = 'jutrong'
person1.age = 27
person1.sayHello = function(){
    console.log(this.name + 'Hello!');
}

// 추후에 추가하고 싶은 프로퍼티가 있다면 곧바로 추가 가능
person1.job = 'developer';
person1.hobby = 'movie';
```

_??? 무엇이 더 편리한가 ???_

object() 생성자 함수보다 객체리터럴이 더 직관적이다.
그리고 object() 생성자 함수는 비어있는 객체를 생성한 후 프로퍼티를 할당하는 방식이고 객체 리터럴 방식은 생성함과 동시에 프로퍼티를 할당한다.

### 7-2-4 생성자 함수

```
function Person(name, age){
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		console.log(this.name + 'Hello!');
	}
};

var person1 = new Person('jutrong', 27);
var person2 = new Person('frank', 36);
var person3 = new Person('demi', 27);

```

하나의 생성자 함수를 만들고 여러 객체를 만들 수 있다.
객체 생성시에 필요한 값들을 함수의 매개변수로 주면 된다.

### 7-2-5 Object.create

```
// 부모 객체 생성
var parent = {a:10, b:20};

// 자식 객체 생성(부모의 프로퍼티를 상속 받음)
var child = Object.create(parent);
console.log(child.a);  // 10
```

프로토타입 상속을 통해 객체를 만드는 방식.
나중에 프로토타입, 상속 개념에서 다룰 예정이다.

### 7-2-6 Class

```
// 클래스 선언
class person {
    name; // 프로퍼티
    age; // 프로퍼티
    speak(); // 메소드
}

// 객체 생성
// 객체를 생성할 때는 클래스앞에 new라는 키워드를 사용한다.
const jutrong = new Person('jutrong', 27);
console.log(jutrong.name);
console.log(jutrong.age);
```

## 7-3 프로퍼티

객체는 프로퍼티 집합이며, 프로퍼티는 키와 값으로 구성된다.

식별자 네이밍 규칙을 따르지 않는 프로퍼티 키를 사용하면 번거로운 일이 발생한다. 가급적 식별자 네이밍 규칙을 준수하는 프로퍼티 키를 사용할 것을 권장한다.

## 7-4 메서드

함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다.

```
const bigtop = {
    sayHi: function() {
    	console.log('Hi!?');
    }
};
// 화살표 함수로도 정의 가능

const bigtop = {
  sayHi: () => {
    console.log('Hi!?');
  }
};

// key 생략 가능
const bigtop = {
  sayHi() {
    console.log('Hi!?');
  }
};
```

## 7-5 프로퍼티 접근

객체 프로퍼티에 접근하는 방법은 크게 두 가지가 있다.

- 마침표 표기법dot notation : 마침표 프로퍼티 접근 연산자(.) 사용
- 대괄호 표기법bracket notation : 대괄호 프로퍼티 접근 연산자([ ... ]) 사용

```
var person = {
  name: 'Lee',
  age: 20
};

console.log(person.name); // 'Lee' (마침표 표기법)
console.log(person.'name'); // Uncaught SyntaxError: Unexpected string
console.log(person[name]); // undefined
console.log(person['name']); // 'Lee' (대괄호 표기법)

let name = 'age';
console.log(person[name]); // 20 (name이 식별자로 인식됨)

console.log(person.age); // 20
console.log(person.'age'); // Uncaught SyntaxError: Unexpected string
console.log(person[age]); // ReferenceError: age is not defined
console.log(person['age']); // 20
```

프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않을 경우, 반드시 대괄호 표기법을 사용해야 한다.
단, 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.

## 7-6 ES6에 추가된 객체 리터럴의 확장 기능

### 7-6-1 프로퍼티 축약 표현

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
이때 프로퍼티 키는 변수 이름으로 자동 생성된다.

```
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = {x , y};

console.log(obj); // { x:1, y:2 }
```
