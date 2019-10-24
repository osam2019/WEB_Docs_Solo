#프로젝트명
 * Docs
 
# Docs 주요내용
 * 다양한 이메일 계정들을 하나로 통합시키고, 첨부파일 까지 날짜별 사용자별 모아 볼수있는 어플리케이션이며, 직관적인 시각화를 통해 누가 얼마나 보내는지 트렌드를 쉽게 파악 가능하다.
<img src='https://i.imgur.com/XBk52XG.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

# 개발자/팀명
 * 상병 이재중
 
## 개발문서(화면정의서)
* [Link](https://github.com/JaeLee18/roka/blob/master/WEB_DOCS_%EC%9D%B4%EC%9E%AC%EC%A4%91_%EA%B0%9C%EB%B0%9C%EB%AC%B8%EC%84%9C(%ED%99%94%EB%A9%B4%EC%A0%95%EC%9D%98%EC%84%9C).pdf)

## 프로젝트 PPT
* [Link](https://github.com/JaeLee18/roka/blob/master/WEB_DOCS_%EC%9D%B4%EC%9E%AC%EC%A4%91_PPT(pdf%EB%B2%84%EC%A0%84).pdf)

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* node.js 설치


## 설치 안내 (Installation Process)
* 설치방법
  1) npm install
  

## 사용법 (Getting Started)
 1) npm run serve
 2) http://localhost:8080
    * 모바일 디스플레이를 위해 크롬브라우저 - 마우스 오른쪽 버튼 - 검사 -Ctrl+Shift+M 을 누르고 디스플레이 대상은 상단에서 "iPhone6/7/8Plus" 로 설정

## 파일 정보 및 목록 (File Manifest)
1) Assets
    * ttf files:무료폰트 파일
2) Components
    * Landing.vue: 첫 페이지 컴포넌트
     * MailRender.vue: "받은편지함"에서 이메일 정보들을 처리
     * NaviBar.vue: 로그인후 상단에 나오는 네비게이션 바 파일
     * SortByDate.vue: "분석-날짜별 첨부파일 모아보기" 에 해당
     * SortByName.vue: "분석-사용자별 첨부파일 트렌드 보기" 에 해당
3) router
    * index.js: 라우터 기능
  
4) views
    * Analyze.vue: "분석"에 해당
    * Home.vue: 첫페이지
    * MailList.vue: "받은편지함"에 해당
    * Statistics.vue: "분석"에 해당
5) public
    * png파일들: "분석-날짜별 첨부파일 모아보기"에 삽입하기위한 파일 로고들.
## 저작권 및 사용권 정보 (Copyright / End User License)
 * [MIT](https://github.com/JaeLee18/roka/blob/master/LICENSE.md)
## 배포자 및 개발자의 연락처 정보 (Contact Information)
  * Github Id: JaeLee18
  
## 알려진 버그 (Known Issues)

   None
   
## 문제 발생에 대한 해결책 (Troubleshooting)

   Creating an issue on Github
    
## 크레딧 (Credit)
 1) [vue.js](9https://vuejs.org/)
    * [Element-ui](https://element.eleme.io/#/en-US)
    * [Bootstrap-vue](https://bootstrap-vue.js.org/docs)
    * [vue-good-table](https://xaksis.github.io/vue-good-table/)
    * [vue-trend](https://madewithvuejs.com/vue-trend)
## 업데이트 정보 (Change Log)
