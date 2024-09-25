![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&text=Paul%20Bassett%20&fontAlign=50)

# 👑 Paul Basset Team Project

- 팀원 : 이하은, 장민주, 예이원, 이정은 
- 개발 기간 : 2024.07.26 ~ 2024.08.14
- 분류 : 팀프로젝트
  
### 배포 주소 : https://paulbassett-42763.web.app/

### 발표 자료 피피티 

[pdf 파일](폴바셋리뉴얼.pdf)

[ppt 파일](폴바셋리뉴얼.pptx)

## 📌 목차

<b>

- [👑 Paul Basset Team Project](#-paul-basset-team-project)
    - [배포 주소 : https://paulbassett-42763.web.app/](#배포-주소--httpspaulbassett-42763webapp)
    - [발표 자료 피피티](#발표-자료-피피티)
  - [📌 목차](#-목차)
  - [⚒️ 사용 기술](#️-사용-기술)
  - [💡 기획](#-기획)
    - [기획 의도](#기획-의도)
    - [🍎 주색](#-주색)
  - [⚒️ 본인 맡은 파트](#️-본인-맡은-파트)
  - [📝 로그인 전 및 메뉴리스트 매장선택에서 디테일 페이지까지](#-로그인-전-및-메뉴리스트-매장선택에서-디테일-페이지까지)
  - [❤️ 나만의 메뉴 등록 (즐겨찾기 메뉴)](#️-나만의-메뉴-등록-즐겨찾기-메뉴)
    - [메뉴 디테일 페이지에서의 모습](#메뉴-디테일-페이지에서의-모습)
    - [나만의 메뉴 목록 페이지에서의 모습](#나만의-메뉴-목록-페이지에서의-모습)
  - [📝 바로 주문 \& 장바구니 주문](#-바로-주문--장바구니-주문)
  - [📝 결제 후 주문내역 \& 적립](#-결제-후-주문내역--적립)
  
</b>

---

## ⚒️ 사용 기술

**디자인 작업**

<div align="center">

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-ef6262?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-2B2A4C?&style=for-the-badge&logo=css3&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)

</div>

**데이터, 서버, 프레임워크**

<div align="center">

![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

</div>

**검색 활용**

<div align="center">

  ![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

</div>

**사용 에디터 & 협업**

<div align="center">

  ![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) 
  ![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)


</div>

---

## 💡 기획

### 기획 의도 

폴바셋 어플의 불편함과 올드한 디자인을 리뉴얼하고자 Vue.js 프로젝트를 진행함.

### 🍎 주색 

<div align="center">
  <img src="readmeimgfile/스크린샷 2024-08-14 오후 3.51.21.png" alt="기획 의도 이미지" width="400"/>
</div>

기존 앱의 주조색으로 사용되던 Dark Brown이 올드한 느낌을 주어 메인 색상을 블랙, 화이트로 변경.  
전체적인 주조색 및 보조색 사용 비율을 조정하고 기존 색상에서 채도를 조금씩 변경.  
전체적으로 깔끔하고 가독성이 좋으며, 고급스러운 느낌을 강조함.

## ⚒️ 본인 맡은 파트

- JSON 방식 메뉴 데이터 구축과 메뉴마다 다른 옵션 설정
- 메뉴 리스트 카테고리 별로 출력
- [📌매장 선택 후 주문 기능](#-로그인-전-및-메뉴리스트-매장선택에서-디테일-페이지까지)
- [📌메뉴 좋아요 기능](#️-나만의-메뉴-등록-즐겨찾기-메뉴) 
- [📌장바구니와 바로주문 기능](#-바로-주문--장바구니-주문) 
- [📌주문 후 주문 내역과 멤버십 적립](#-결제-후-주문내역--적립)



## 📝 로그인 전 및 메뉴리스트 매장선택에서 디테일 페이지까지 

<div align="center">
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 005.png" alt="메뉴 이미지" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-20-13.png" alt="매장 미선택 시 알림" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 001.png" alt="매장 리스트" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-20-37.png" alt="로그인 우선 모달" width="200"/>
</div>


## ❤️ 나만의 메뉴 등록 (즐겨찾기 메뉴)

### 메뉴 디테일 페이지에서의 모습

<div align="center">
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-20-41.png" alt="나만의 메뉴 등록" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-20-44.png" alt="나만의 메뉴 삭제" width="200"/>

### 나만의 메뉴 목록 페이지에서의 모습
  
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-40-59 002.png" alt="나만의 메뉴 목록" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-40-58 001.png" alt="나만의 메뉴 목록에서 삭제" width="200"/>
</div>

## 📝 바로 주문 & 장바구니 주문

<div align="center">
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-47-22.png" alt="장바구니 추가 모달" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 008.png" alt="장바구니 페이지" width="200"/>

  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 011.png" alt="바로 주문하기 페이지" width="200"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 006.png" alt="최종 결제창" width="200"/>
</div>

## 📝 결제 후 주문내역 & 적립 

<div align="center">
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 002.png" alt="결제 후 주문 내역" width="150"/>
  <img src="readmeimgfile/KakaoTalk_Photo_2024-08-14-17-08-43 003.png" alt="멤버십 크라운 적립" width="150"/>
  <img src="readmeimgfile/스크린샷 2024-08-14 오후 6.05.13.png" alt="메인 페이지에서 모습" width="150"/>
</div>
