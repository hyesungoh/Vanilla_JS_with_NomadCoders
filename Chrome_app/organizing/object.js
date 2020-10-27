// []는 브라켓이라 부르고 {}는 컬리 브라켓이라 부른다.

const hyesung = {
  name: 'hyesungoh',
  age: 23,
  isHandsome: true,
  // object안에 array
  favMovies: ['LOTR', '50/50'],
  // object안에 array안에 object
  favFood: [
    { name: 'pizza', isFatty: true },
    { name: 'chicken breast', isFatty: false }
  ],
  // object안에 object
  dog: {
    name: 'hodu',
    age: 6
  }
};

console.log(hyesung);

console.log(hyesung.name);

console.log(hyesung.favMovies[0]);

console.log(hyesung.favFood[0].isFatty);

console.log(hyesung.dog.name);

const testObject = {
  'str': 'str',
  // 123: 456 여기서 에러는 안나타나지만 호출은 불가
};

console.log(testObject); // { str: 'str' }
console.log(testObject.str); // str
// console.log(testObject.'str'); // ERROR
// key 값을 문자열로 할 시 저장은 되나 호출은 문자열로 못하네
