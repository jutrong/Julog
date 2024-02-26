---
date: "2024-01-10"
title: "[BAB-FRIEND] 백엔드와 서버 전송 상태값 맞추다 마주한 문제"
thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D"
categories: "Project"
summary: "밥프렌드 프로젝트에서 게시글 작성부분을 구현하던 중 카카오맵에서 마커를 찍은 위치객체정보를 백엔드에서 string값으로 전달해달라고 부탁하였다."
---

밥프렌드 프로젝트에서 게시글 작성부분을 구현하던 중 카카오맵에서 마커를 찍은 위치객체정보를 백엔드에서 string값으로 전달해달라고 부탁하였다.
현재 게시글 작성 상태값은 useState훅을 사용하여 state값으로 저장해놓았었다.

```
const [formData, setFormData] = useState(
	{
		  "eatTime": "2024-01-10T11:00:00.000",
		  "joinLimit": 0,
		  "fix": true,
		  "location": {
          	content:'',
            position : {
            	lat: 0,
                lng: 0
            }
          },
		  "priceRange": 0,
		  "alcohol": true,
		  "ageGroupLimit": true,
		  "categoryType": "KOREAN",
		  "genderType": "MALE"
}
);
```

입력필드에서 입력된 값들을 하나의 상태로 관리하고 있었고, 다음 페이지에서 글의 제목과 내용, 참여 링크도 함께 서버로 보내야했다. 그래서 이전의 formData들은 useNavigate, useLocation으로 state를 넘겨 post 요청시 같이 넘겨주려는 그림을 그렸다.

```
const [contentData, setContentData] = useState({
	title: '',
    content: '',
    linkUrl: '',

})

const mutation = useMutation({
    mutationFn: () => postsBoards(accessToken, { ...formData, ...contentData })
  });
```

그러나 백엔드에서 api를 만들었는데 카카오맵에서 받은 location값을 객체가 아닌 string형태로 전달해달라고 하셨다.
간단하게 생각해서 JSON.stringify로 값을 감싸서 보내주면 된다.

그러나 location.content값으로 지정한 가게의 명을 표시해주고, 위치를 띄워줘야 했기에 location을 그냥 string형태로 바꾸게되면 type에러가 발생했다.

> 나름의 해결책으로 생각해낸 것은 recoil의 selector로 location을 string 형태로 변환하여 그 값을 서버에 전송하면 되지 않나라는 생각을 해봤다.

그래서 recoil에 formData, contentData의 값들을 전역상태로 관리하고
selector를 통해 location값들을 string형태로 변환하여 변수에 저장하였다.

```
export const postsState = atom<PostDataType>({
  key: 'postsState',
  default: {
    categoryType: '',
    eatTime: '',
    joinLimit: '',
    alchol: false,
    fix: false,
    gender: 'ALL',
    priceRange: 0,
    ageGroupLimit: false,
    location: {
          	content:'',
            position : {
            	lat: 0,
                lng: 0
            }
          },
    title: '',
    content: '',
    linkUrl: '',
  },
});

export const locationStringSelector = selector<string>({
  key: 'locationStringSelector',
  get: ({ get }) => {
    const locationObject = get(locationData);

    const locationString= JSON.stringify(locationObject.location);

    return locationString;
  },
});

const mutation = useMutation({
    mutationFn: () => postsBoards(accessToken, { ...postData, location :  locationString})
  });
```

이렇게하면 해결될줄 알았지만,
location 객체에는 string타입이 허용되지 않는다고 타입 에러가 발생했다.

아.... 다양한 방법을 시도했지만 해결이 되지않았다. 마지막 남은 방법은 백엔드분에게 string형식이 아닌 객체로 보내면 안될까요라고 물어보는 방법이 있었지만 만약 이게 회사에서 하는 일이었다면 물어봤겠지만 공부하는 입장에서는 혼자 해결해보고 싶었다. 그리고 그렇게 어려운 문제도 아니라고 생각했다.

결국 location객체를 담을 atom을 하나 더 만들었고, location에 대한 내용을 표시할 때는 이 객체를 사용했고, selector를 사용해 location을 string형식으로 바꾸어 원래의 상태에 location : string형태로 담아 백엔드 데이터에 전송을 시켰다.

이렇게 얘기하니 바로바로 문제해결을 한 것 같지만 오랫동안 생각해서 내놓은 해답이 이거였다...
