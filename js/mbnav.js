window.onload = function () {
  const mbNav = document.querySelector(".mb-nav");
  // 나는 mbNav라는 이름의 변수에 저장할래
  // =라는 기호는 연산자라고 하는데 공식 명칭은 할당/대입이라고한다
  // document.querySelector(".mb-nav"); 를 저장한다
  const mbNavA = "mb-nav-active"
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapA = "mb-wrap-active"
  const mbSize = 1024;

  mbNav.addEventListener("click", function () {
    // 토글도 좋다.
    // mbNa.classList.toggle("mb-nav-active")
    // mb-nav-active 클래스 적용 여부(true, false)
    let checkActive = mbNav.classList.contains(mbNavA);

    if (checkActive === false) {
      mbNav.classList.add(mbNavA);
      mbWrap.classList.add(mbWrapA);
    } else {
      mbNav.classList.remove(mbNavA);
      mbWrap.classList.remove(mbWrapA);
    }
  });
  // 화면의 리사이즈를 체크해서 처리
  // this.window.onresize = function(){}
  this.window.addEventListener("resize", function(){
    let windWidth = window.innerWidth
    if(windWidth > mbSize) {
      mbNav.classList.remove(mbNavA)
      mbWrap.classList.remove(mbWrapA)
    }
  })
};
