---
date: "2023-06-29"
title: "[deep dive] 14. 생성자 함수에 의한 객체 생성"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://mblogthumb-phinf.pstatic.net/MjAyMTEyMTRfNjYg/MDAxNjM5NDA4MDAyMTcx.jP4btz_zxxcy3gT7z10vmBrjjwVLtkEFBU1y1qteAR4g.hDFMPWRjQIoWvk71IXahICpS2VXMc_e6NGSFskiFwWwg.JPEG.hy0294/IMG_4485.JPG?type=w800"
---

## 14-1 생성자 함수

생성자 함수는 자바스크립트 객체를 생성하기 위해 사용되는 특수한 함수이다.
생성자 함수로 객체를 생성하기 위해서는 new 연산자를 호출한다.

```
// 생성자 함수
function UserInfo() {
  this.name = 'Nick';
  this.age = 20;
  this.addresss = 'Busan';
}

// 객체 생성
let userInfo = new UserInfo();

console.log(userInfo);
```

생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
Object 생성자 함수 이외에도 String,Number,Boolean,Function,Array,Date,RegExp,Promise등의 빌트인 생성자 함수를 제공한다.

## 14-2 생성자 함수 vs 객체 리터럴

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 할 때 비효율적이다.
생성자 함수에 의한 객체 생성 방식은 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체를 여러 개 간편하게 생성할 수 있다.

- 객체 리터럴 방식

```
let userInfo1 = {
  name: '홍길동',
  age: 20,
  address: '서울'
}

let userInfo2 = {
  name: '마이콜',
  age: 40,
  address: '부산'
}

let userInfo3 = {
  name: '또치',
  age: 12,
  address: '대구'
}
```

- 생성자 함수 방식

```
function UserInfo(name, age, address) {
  this.name = '홍길동';
  this.age = 20;
  this.address = '서울';
}

let userInfo1 = new UserInfo("홍길동",20,"서울");
let userInfo2 = new UserInfo("마이콜",40,"부산");
let userInfo3 = new UserInfo("또치",12,"대구");

```

## 14-3 생성자 함수의 인스턴스 생성 과정

new UserInfo(...)를 써서 함수를 실행시키면 다음과 같은 알고리즘이 동작한다.

1. 인스턴스 생성하여 this에 할당한다.
2. 코드가 한 줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.
3. this를 반환한다.

```
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this가 반환된다.
  // 명시적으로 원시값을 반환하면, 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
  return 100;
}

// 인스턴스 생성. 원시값은 무시되므로 this를 반환한다.
const c1 = new Circle(1);
console.log(c1); // Circle {radius: 1, getDiameter: f}
```

생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다. 따라서 생성자 함수 내부에서 return문을 반드시 생략해야 한다.

생성자 함수는 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없다.
그런데 만약 return문이 있다면 어떤 일이 벌어질까?

- 객체를 return 한다면 this 대신 객체가 반환된다
- 원시형을 return 한다면 return문이 무시된다.

---

- 생성자 함수는 일반 함수이다. 다만, 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 작성한다.
- 생성자 함수는 반드시 new 연산자와 함께 호출해야 한다.
  new와 함께 호출하면 내부에서 this가 암시적으로 만들어지고, 마지막엔 this가 반환된다.
