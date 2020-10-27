// console, alret 등 built-in function이라 호칭

console.log(console);

/* 아래를 출력
Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context]
}
*/


function sayHello(name){
  console.log('Hello!', name);
}

sayHello("Hyesung");

function sayHello(name){
  console.log('Hello!', name);
}

sayHello("Hyesung", 23); // 위와 동일하게 출력, 에러가 아님


// 위에 있는 sayHello 함수를 호출하는 것들도 제일 아래있는 함수를 호출한다.
// 파이썬과 마찬가지로 아래에 있는 함수를 사용할 수 있나보다.
// 생각보다 js가 고급언어라 놀랐다.

function sayHello(name, age){
  console.log(name, 'is', age, 'years old');
}

sayHello('Hyesung', 23);
