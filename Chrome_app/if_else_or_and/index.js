// if(condition){
//   blah blah
// } else {
//   blah blah
// }


// == 이 아니라 === !
if (10 === 5) {
  console.log('hi');
} else {
  console.log('bye');
}


// else if라 사용
if ('10' === 10) {
  console.log('hi');
} else if ('10' === '10') {
  console.log('ho');
} else {
  console.log('he');
}

// and === && / or === ||

// prompt로 브라우저에서 입력받을 수 있음
// 하지만 잘 쓰이지 않음
const age = prompt("ask");

if(age >= 20 && age <= 21){
  console.log("you are child");
} else if(age > 21) {
  console.log("adult");
} else {
  console.log("kid");
}
