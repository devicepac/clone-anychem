window.addEventListener("load", function () {

  // nav 에 마우스 오버하면 header 높이 260px 변경주기
  // nav 에 마우스 아웃하면 header 높이 100px 변경하기
  // header 를 js 로 저장해 보자(변수 정의해 보자)
  let header = document.querySelector(".header");
  // nav 를 js 로 저장해 보자(변수 정의해 보자)
  let nav = document.querySelector(".nav");
  //   console.log(header);
  //   console.log(nav);

  //   nav 에 마우스 오버 처리
  //  html 요소에 마우스 오버 처리하는 법
  nav.addEventListener("mouseenter", function () {
    // header 의 높이를 260 픽셀로 고치고 싶다.
    // header.style.height = "260px";
    // 우리는 260 픽셀로 변경되는 class 를 작성해 두었다.
    header.classList.add("header-active");
  });
  //   nav 에 마우스 아웃 처리
  //  html 요소에 마우스 아웃 처리하는 법
  nav.addEventListener("mouseleave", function () {
    // header 의 높이를 100 픽셀로 고치고 싶다.
    // header.style.height = "100px";
    // 클래스를 제거한다.
    header.classList.remove("header-active");
  });

  // let a = document.querySelectorAll(".gnb > li");
  // console.log(a);
  // a.forEach(function (item) {
  //   console.log(item);
  //   console.log(item.getBoundingClientRect().left);
  //   console.log(item.offsetWidth);
  // });

  // 모바일 아코디언 메뉴
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li >.submenu");
  // sideMenuA 의 각각을 클ㄹ릭하면, 클릭되어진 순간
  // index 값을 console.log애 출력해 주세요.
  // for을 사용해도 좋구요
  // forEach를 사용해도 좋아요
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function(event){
      // a 태그의 href를 막는다.
      event.preventDefault();
      changeSubmenu(index);
    });
  });
  function changeSubmenu(_index) {
    sideSubMenu.forEach((item, index) => {
      if(_index === index) {
        if(item.style.display === "block"){
          item.style.display = "none";
        }else{
          item.style.display = "block";
        }
      }else{
        item.style.display = "none";
      }
    });
  }
});
