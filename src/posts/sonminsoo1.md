---
date: "2023-10-01"
title: "React-router v6을 활용한 당장손민수 리팩토링"
categories: ["Web", "SEO", "Optimization"]
summary: "홈페이지를 운영하는 많은 사람들 또는 기업들이 검색 페이지 최상단에 보여지게 하기 위해 어떤 최적화 작업을 하는지 알아보자."
thumbnail: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDhfMjUw%2FMDAxNjgzNTQ5Mjg3Mjc3.gfPmk3-BrVj2oJP-gdAal2SFdeBo_ut2DXkRdXKvY6Yg.laSn2cyZfc4anjpdCn2-kxuLBptQx8XicOzN6vhkRL4g.JPEG.conkowisa469%2FKakaoTalk_20230508_005503373_24.jpg&type=ofullfill340_600_png"
---

## 개요

당장손민수 프로젝트 리팩토링 진행중에 react-router v6에 대한 강의를 듣다가 useOutletContext, useLocation, usePramas에 대해 알게되었다. 이것을 활용하여 기존 프로젝트에 도입하면 괜찮겠다(?)라는 생각이 들었다.

## 기존 프로젝트 구조

pages폴더에 page를 보여주는 하나의 폴더 and 파일이 있고 데이터를 패칭받는다 그리고 components폴더에서는 비즈니스 로직이 생성된다.

![](https://velog.velcdn.com/images/jutrong/post/8cc12709-c2b4-45b6-bf88-8dc99b686a31/image.pdf)

컴포넌트 구조를 간단하게 시각화 시켜보았다.

## useLocation으로 이미지 파일 전송

FeedWrite 컴포넌트에서 이미지 파일을 선택하여 피드 글을 작성하는 것을 구현하려고 했다.
선택한 이미지 파일을 state값에 담고 context api를 사용하여 넘기려고 고민을 하였다. 그런데 이 기능 구현을 위해 context api를 사용하는건 자제하고 싶었고 최대한 react hook을 이용하여 구현하고 싶었다.

깊게 고심하던 중 같은 팀원에게 물어보니 useNavigate를 사용하면 state값까지 전달할 수 있다하여 검색을 해보니 useNavigate로 state를 전달하고 useLocation으로 state값을 받을 수 있었다.

```
HeaderBar.tsx
// 선택된 이미지의 URL을 저장하기 위한 상태
const [selectedImage, setSelectedImage] = useState<string | null>(null);


const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Non-null assertion operators
    const imageUrl = URL.createObjectURL(file!);
    if (file) {
      // 파일을 선택했을 때 수행할 작업
      setSelectedImage(imageUrl);
      navigate("/feedwrite", {
        state: {
          isUpdate: false,
          selectedImage: imageUrl,
          imageObject: fileInputRef.current?.files?.[0],
        },
      });
    }
  };
```

/feedwrite로 navigate하면서 동시에 isUpdate, selectedImage, imageObject를 state로 넘겨주었다.

```
feedWrite.tsx

  const $updatePage = location.state?.isUpdate;
  const writeImg = location.state?.selectedImage;
  const selectImg = location.state?.imageObject;
```

이렇게 변수에 저장하여 이미지를 업로드 시킬 수 있었다.
$updatePage는 boolean값, writeImg는 글쓰기 화면에서 띄워지는 이미지, selecImg는 formdata post 전송되는 값이다.

![](https://velog.velcdn.com/images/jutrong/post/df76c3b5-8cff-4c0d-a47a-dd7209c96938/image.mov)

## boolean값에 따라 달라지는 피드 업데이트와 작성

![](https://velog.velcdn.com/images/jutrong/post/61e64c2d-e0ea-4583-923a-e6e063be104c/image.pdf)

피드 작성, 피드 수정부분을 boolean값으로 구분을 지었다.
useNavigation으로 isUpdate값을 넘겨주어서 false이면 피드 작성,
true면 피드 수정으로 화면을 보여주었다.

수정하는 것은 기존의 feedData의 이미지를 불러오고,
피드 작성하는 것은 useLocation으로 받은 이미지 파일 값을 화면에 보여주었다.

```
 {$updatePage && feedData ? (
        <S.FeedWriteImage src={feedData.image} />
      ) : (
        <S.FeedWriteImage src={writeImg} />
      )}
```

```
 <S.WritingFandom>
      <S.WritingFandomText>작성 팬덤</S.WritingFandomText>
      <Select
        value={selectedOption}
        options={fandomOptions}
        styles={S.FandomStyles($updatePage)}
        placeholder={$updatePage ? "팬덤" : "팬덤을 선택해주세요."}
        isDisabled={$updatePage}
        onChange={handleOptionChange}
      />
    </S.WritingFandom>
```

그리고 팬덤을 선택하는 부분에서도 구분을 시켜주었다.
피드 작성하려고 할 때는 팬덤을 선택하게 하였고,
수정하려고 할 때에는 isDisabled을 true로 주면서 선택창을 막아버렸다.

이외에도 수정할 때에는 피드 내용과 해쉬태그만 수정가능하게 하기위해서
나머지 입력 부분은 기존의 내용을 불러왔다.
