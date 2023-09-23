---
date: "2023-06-28"
title: "[deep dive] 13. 프로퍼티 어트리뷰트"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAyMTEyMTRfMTQy/MDAxNjM5NDA4MjA1NjU2.pF-GiyxZ6TSVkk6ya8awQ5iH9XbZIpwyRpPzkXrtDgog.5n__gfgepDj1BF3w25_wjue82p2OPESocm6Ag7VUjbsg.JPEG.hy0294/IMG_4496.JPG?type=w800"
---

## 13. 프로퍼티 어트리뷰트

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

### 13-1 프로퍼티의 상태

> - 값(value)

- 갱신여부 가능(writable)
- 열거 가능 여부(enumerable)
- 재정의 가능 여부(configurable)

```
const person = {
	name : "Lee"
};

// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));

// 출력
{
  name : {value: "Lee", writable : true, enumerable: true, configurable : true},
  age : {value: "Lee", writable : true, enumerable: true, configurable : true}
}
```

### 13-2 데이터 프로퍼티와 접근자 프로퍼티

프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

- 데이터 프로퍼티

##### 키와 값으로 구성된 일반적인 프로퍼티이다.

![](https://velog.velcdn.com/images/jutrong/post/7ad45f30-de27-49fa-95a6-885c94048045/image.png)

프로퍼티가 생성될 때 [[Value]]값은 프로퍼티 값으로 초기화되며 [[Writable]],[[Enumerable]],[[Configurable]]의 값은 true로 초기화된다.

- 접근자 프로퍼티

##### 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티이다.

![](https://velog.velcdn.com/images/jutrong/post/d596710f-a0f9-4427-8cde-f39f0a1bdbab/image.png)
접근자 프로퍼티는 자체적으로 값을 가지지 않으며 데이터 프로퍼티의 값을 읽거나 저장할 때 관여할 뿐이다.

```
const person = {
	// 데이터 프로퍼티
  	firstName : 'Junseung',
  	lastName : 'Hwang'

// fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
// getter 함수
  get fullName(){
      return `${this.firstName} ${this.lastName}`
  }

// setter 함수
  set fullName(name){
      [this.firstName, this.lastName] = name.split(" ");
  }
};
```

### 13-3 프로퍼티 정의

```
const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});

person.fullName = 'Heegun Lee';
console.log(person); // {firstName: "Heegun", lastName: "Lee"}
```

### 13-4 객체 변경 방지

자바스크립트는 객체의 변겨을 방지하는 다양한 메서드를 제공한다. 객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다.
![](https://velog.velcdn.com/images/jutrong/post/51f8115f-1960-4e0a-a459-b6623a39af86/image.png)

#### 불변 객체

Object.freeze메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.
객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze메서드를 호출해야 한다.
