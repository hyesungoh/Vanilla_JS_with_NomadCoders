// const title = document.querySelector("#title");
//
// const BASE_COLOR = 'rgb(39, 60, 117)';
// const OTHER_COLOR = '#0097e6';
//
// function handleClick(){
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }
//
// function init(){
//   title.style.color = BASE_COLOR;
//   // title.addEventListener("click", handleClick);
//   title.addEventListener("mouseenter", handleClick);
//
// }
//
// init();



// function handleOffline(){
//   console.log("Im OFFLINE");
// }
//
// function handleOnline(){
//   console.log("Im ONLINE");
// }
//
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);


const title = document.querySelector("#title");
const CLICKED_CLASS = 'clicked';

// JS에서 html, css를 직접적을 조작하는 것 보다
// 논리적인 연산만을 하는 것이 좋음

function handleClick(){
  // const currentClass = title.className;
  // 아래와 같은 방향으로 대입 시 기존 클래스가 사라짐
  // if (currentClass !== CLICKED_CLASS) {
  //   title.className = CLICKED_CLASS;
  // } else {
  //   title.className = "";
  // }


  // classList.contains(CLSNAME)은 괄호 안 클래스 포함 여부를 반환
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  //
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }


  // 위와 같이
  // 클래스가 있으면 remove, 없으면 add하는 연산을 하는 toggle 함수가 있음
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);
}

init();
