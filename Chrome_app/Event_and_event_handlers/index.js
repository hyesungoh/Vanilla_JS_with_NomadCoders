
const title = document.querySelector("#title");


function handlerResize(){
  // console.log("I have beem RESIZED");
  console.log();
}
// handlerResize() 이렇게 작성 즉시 함수를 호출
window.addEventListener("resize", handlerResize);




function handleClick() {
  title.style.color = "red"
}
// 클릭하면 title 객체의 색을 빨강으로 바꿈
title.addEventListener("click", handleClick);
