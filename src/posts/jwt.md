---
date: "2023-10-16"
title: "About JWT"
categories: "JWT"
summary: "jwt 안에는 무엇이 들어 있을까?"
thumbnail: "https://cdn.imweb.me/upload/S2022072697bdeb0d71cf5/fd6a3973f5426.jpeg"
---

## JWT에 대해 알아보기

-- jwt 안에는 무엇이 들어 있을까?
<br/>

![](https://velog.velcdn.com/images/jutrong/post/39e2263c-63a5-4a5f-ab92-c324433717ad/image.png)

![](https://velog.velcdn.com/images/jutrong/post/bfc67f12-107a-441a-908e-80a935735eb8/image.png)

Header에는 알고리즘과 타입이 들어가있다.
알고리즘은 어떻게 이 토큰을 암호화할 것인가...암호화를 어떻게 처리할 것인지 정보가 들어가 있다.

![](https://velog.velcdn.com/images/jutrong/post/af510a29-3186-4388-a70e-3ce8549f05af/image.png)

Payload에는 데이터가 들어가있다.
유저 네임, 번호, 토큰 발급 시등등 데이터조각이 포함되어있다.

헤더와 페이로드값을 인코딩하여 저장된다.
두 개는 디코딩하여 풀어볼 수 있지만 시그니쳐는 암호화 키가 포함되어있어 접근하지 못한다.

![](https://velog.velcdn.com/images/jutrong/post/afe3ef31-6f2c-4a1a-9412-665f6deabae9/image.png)
<br/>
인코딩된 헤더 + 인코딩된 페이로드 + 시크릿키를 넣어서 암호화를 한다.
시크릿키는 서버에서 값이 올바른지 확인하기 위해 사용된다.

정리하자면 헤더, 페이로드를 인코딩해서 시크릿키랑 합쳐 해싱을 한다.
시크릿키는 서버만 알고 있는 것이다.

서버의 목적은 토큰이 누가 준 토큰인지 찾는 것이다.
어떤 유저가 준 토큰인지 찾아야지 정보를 줄지 안줄지 판단 할 수 있기 때문
어떻게 확인하느냐 .. ?
헤더랑 페이로드를 서버에 보내면 서버에서 토큰을 발급해준다.
jwt 토큰을 서버에 다시 주게되면 서버는 헤더랑 페이로드 시그니쳐 해싱된 값과 비교한다.
해싱된 값이 똑같으면 같은 유저라고 판단.

\*서버에서는 암호화 되지않은 secret key가 있고, signature에서는 암호화된 secret key가 있다.
<br/>

![](https://velog.velcdn.com/images/jutrong/post/73908b51-b268-4b84-8ec4-242f63d04ce7/image.png)

> ⚠️ 시크릿키가 노출되면 토큰을 무한한게 찍어낼 수 있다 >> 보안 사고
> <br/>

❓중요한 정보를 왜 넣어두나요?

-- 토큰 자체가 스스로의 유효성을 검증하는 완결성을 가진다.
