## 프로젝트 설치 및 실행 방법

1. 저장소를 클론합니다.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. 프로젝트 폴더로 이동합니다.
```
cd mobile-wedding-invitation
```
3. 필요한 의존성을 설치합니다.
```
npm install
```
4. (필수) `.env.sample` 파일의 이름을 `.env`으로 바꾸고, VITE_APP_NAVERMAPS_CLIENT_ID에 Naver Cloud에서 발급 받은 `client_id`로 채웁니다. `client_id`는 [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application) 에서 어플리케이션 등록 후 발급받을 수 있습니다.
5. (선택) likes와 방명록 기능 사용을 원한다면 Firebase 설정이 필요합니다. src/firebase.ts 파일에 Firebase SDK를 설정합니다. [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) 문서를 참고하여 SDK를 설정할 수 있습니다.
6. 사용자 정의가 필요한 파일들을 수정합니다. (아래의 체크리스트 참고)
7. 애플리케이션을 실행합니다.
```
npm run dev
```


## 커스텀 체크리스트

- [ ] `src/data.json` 청첩장에 들어갈 정보를 수정합니다.
- [ ] `index.html` 파비콘, title, og tag에 쓰일 meta tag 등을 수정합니다.
- [ ] `public/thumbnail.jpg` 썸네일 사진을 수정합니다.
- [ ] `assets/images`에 갤러리에 들어갈 사진을 넣고, `src/layout/Gallery/Images.ts` 에서 import합니다. 이곳에서 사진에 맞게 사이즈를 수정합니다.
- [ ] `.env` VITE_APP_NAVERMAPS_CLIENT_ID=client_id 입력이 필요합니다.
- [ ] (선택) `src/firebase.ts` likes, 방명록을 사용한다면 firebase sdk 설정이 필요합니다.
- [ ] (선택) `src/data.json` 혼주 계좌번호 작성시 `kakaopayAccount`, `tossAccount` 항목을 이용해 카카오페이나 토스 링크를 추가할 수 있습니다.
