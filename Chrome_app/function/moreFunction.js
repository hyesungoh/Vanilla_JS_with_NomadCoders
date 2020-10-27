// ``는 백틱이라 호칭함

// function printNameAndAge(name, age){
//   // 백틱안에 ${변수명} 사용 가능
//   console.log(`${name} is ${age} years old`);
// }
//
// printNameAndAge('Hyesung', 23);


// function returnNameAndAge(name, age){
//   return `${name} is ${age} years old`;
// }
//
// const hyesung = returnNameAndAge('Hyesung', 23);
//
// console.log(hyesung);


const calcul = {
  plus: function(n1, n2){
    return n1 + n2;
  },

  minus: function(n1, n2){
    return n1 - n2;
  },

  multi: function(n1, n2){
    return n1 * n2
  },

  div: function(n1, n2){
    return n1 / n2
  },

  squar: function(n1, n2){
    return n1 ** n2
  }
};

console.log(calcul.plus(5, 6));
console.log(calcul.minus(7, 5));
console.log(calcul.multi(7, 5));
console.log(calcul.div(7, 5));
console.log(calcul.squar(7, 5));
