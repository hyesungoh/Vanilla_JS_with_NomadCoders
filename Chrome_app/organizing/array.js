// const daysOfWeek
// Camel Case란? 소문자로 시작하고 띄어쓰기 대신 대문자를 사용

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri'];
console.log(daysOfWeek);
console.log(daysOfWeek[0]);

// 에러가 아닌 undeifined가 호출된다 !
console.log(daysOfWeek[100]);


// 파이썬과 마찬가지로 array에 자료형이 국한되지 않는다.
const value = 'val';
const whatEver = ['string', 123, true, value];
console.log(whatEver);
