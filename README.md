# [Nomad Coders](https://nomadcoders.co/)와 함께 Vanilla JS 배우기
## Chrome App
#### - [Hello world with JS](../master/Chrome_app/hello_world)
#### - [Variable](../master/Chrome_app/variable)
  - 변수 선언 시 `let`, `var` 사용. 상수는 `const`
#### - [Data_types](../master/Chrome_app/data_types)
#### - [Organizing - Array](../master/Chrome_app/organizing/array.js)
  - `array`는 `[]`을 이용하여 선언
  - 자료형에 국한되지 않음
  - index가 넘어간 값을 호출해도 error 발생 안함
#### - [Organizing - Object](../master/Chrome_app/organizing/object.js)
  - `objName.val`처럼 호출
  - `object`안에 `array`, `object` 등 복합하여 사용 가능
#### - [Function](../master/Chrome_app/function/function.js)
  - 아래와 같은 방법으로 작성 가능
  ```js
  function funName(arg){
    return arg + 1
  }
  ```
  - 함수 사용 시 인자값이 작성한 함수보다 많을 때도 error가 발생하지 않음
#### - [Function - with Object](../master/Chrome_app/function/moreFunction.js)
  - 아래와 같은 방법으로 문자열안에 변수를 넣어 사용가능
  ```js
  // ``는 백틱이라 호칭
  `${name} is ${age} years old`
  ```
  - 아래와 같은 방법으로 object에 function을 넣어 사용가능 <i> 타언어의 클래스같은 느낌 </i>
  ```js
  const myObj = {
    func1: function(num){
      return num + 10
    },
    func2: function(num){
      return num - 10
    }
  };
  ```
