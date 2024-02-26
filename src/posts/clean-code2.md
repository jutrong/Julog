---
date: "2023-11-16"
title: "프리온보딩-클린코딩"
categories: CleanCode
summary: "런타임 에러는 구분할 수 있어야한다."
thumbnail: "https://images.unsplash.com/photo-1489097474497-6db3de299415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVCJUFDJUI0JUVDJUIxJTg0JUVDJTgzJTg5fGVufDB8fDB8fHww"
---

# 원티드 11월 프리온보딩 클린코딩에 대한 특강을 듣고 정리한 내용입니다.

---

## 1. 런타임 에러는 구분할 수 있어야한다.

프론트엔드 개발자라면 런타임 에러를 막을줄 알아야한다... 그래야한다...
대부분의 프론트엔드 개발자들은 런타일 에러가 뭐인지 모른다고한다. 나도 그렇다..
개발환경에서 잘되고 빌드해서 잘되고 배포도 잘되었는데,,화면이 안뜬다..이것이 런타임 에러이다.
런타임 vs 컴파일의 차이를 모르면 나중에 대형사고 치니 무조건 알아놓자.
브라우저에서 해석하는 것과 빌드에서 해석하는 것 구분...
타입스크립트는 컴파일 단계에서 에러를 잡아주는 것이다.
런타임 에러를 잡아주는 것은 yup, zod이다.

## 2. 배열 잘 알고 사용하기

```
arr[3] = 'test';

arr['property'] = 'Hello Wanted'
arr['obj'] = {}
arr[{}] = [1,2,3]

arr['func'] = function() {
	return 'hellow'
}
```

자바스크립트의 배열은 객체이다. 객체이기 때문에 내부적으로 키와 쌍이 만들어진다.
너무나 많은 부분에 수용이 되다보니 특이점이 많이 있다.

- Prototype 조작하는건 지양
  Why ?
  애초에 조작할 이유가 없다.
  npm도 있고 모듈도 있기 때문... 과거에는 자바스크립트 문법을 발전시키고 고치고 공유가 힘들었지만 지금은 언어가 발전하면서 npm, 모듈만들어서 export. import 시킬 수 있기 때문에 위험하게 prototype을 만들 필요가 없다.
- prototype이 왜 위험할까 ?
  런타임에 동작하니 예측하기 힘들다.

```
// 이건 기가 막히게 잘 사용하는데 ( 리액트 문법인줄안다 ㅜㅜ )

// 왜 이건 이렇게.. ?
const [firstEle, secondEle] = document.querySelectorAll('#id')

// 배열 요소에 접글할 때... 매직 넘버 접근은 당연히 지양해야한다..
const confirmButton = document.getElementsByTagName('button')[0]
const cancleButton = document.getElementsByTagName('button')[0]
const resetButton = document.getElementsByTagName('button')[0]
```

매직 넘버 = 알 수 없는 마법의 넘버
0,1,2 는 상대적 위치라서 언제 변할지 모른다.

```
function formatDate(targetDate) {
	const date = targetDate.toISOString().split('T')
    const date2 = date.split('-')

    return `${date2[0]}년 ${date2[1]}월 ${date2[2]}일`
}

// 이렇게 매직넘버를 사용하기 보다는 아래의 방식을 지향하자
function formatDate(targetDate) {
	const [date] = targetDate.toISOString().split('T')
    const [year,month,day = '알 수 없음'] = date.split('-')

    return `${year}년 ${month}월 ${day}일`
}

```

## map() vs forEach()

// 배열의 원소를 반복하면서 콜백 함수 반복시 매번 실행해준다.(forEach)
// 배열의 원소를 반복하면서 콜백 함수를 반복시 매번 실행해서 새로운 배열을 반환해준다 (map)

forEach는 멈출 수 없다.
대부분의 JS 배열 고차 메서드는 멈출 수 없다.
// 대부분 멈출 수 없다.
map(), filter(), reduce(), toSorted(), slice()

- 항상 마지막 아이템을 반환하고 싶다면?
  const wanted = ['w', 'a', 'n'];
  wanted[wanted.length - 1]
  wanted.at(-1) << 요새는 많이 발전해서 편한 코드가 많다~

### 후기

아직 내가 작성하는 코드는 동작을 만들어내기 바쁘지만,
프론트엔드 개발자의 길을 계속 걸어간다면 클린코드에 대한 생각을 항상 해야될 것이다.
이전에는 이해가 가지 않는 것들이 있었지만 시간이 지나면서 아 그 때 배운게 지금 사용되는구나 하고 요즘 느낄 때가 많다.
언젠가는 내가 이 지식을 사용하게 될 날이 오겠지 하면서 강의를 듣다보니 그 언젠가를 일찍 당기고 싶어지는 마음이 든다.
