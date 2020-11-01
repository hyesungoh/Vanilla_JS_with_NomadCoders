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
#### - [DOM Function](../master/Chrome_app/DOM_function/index.js)
  - Document Object Module

#### - [Event and event handlers](../master/Chrome_app/Event_and_event_handlers/index.js)
  - 아래와 같이 이벤트를 listen 할 수 있음
  ``` js
  function handleClick() {
    title.style.color = "red"
  }
  // 클릭하면 title 객체의 색을 빨강으로 바꿈
  title.addEventListener("click", handleClick);
  ```
  - 아래와 같이 작성 시 이벤트 확인 전 즉시 함수를 실행
  ``` js
  title.addEventListener("click", handleClick());
  ```
#### [if_else_or_and](../master/Chrome_app/if_else_or_and/index.js)
  - JS에서는 아래와 같은 문법을 사용
  ```js
  if(A && B || C){
    ...
  } else if(D === E){
    ...
  } else {
    ...
  }
  ```

#### - [DOM_function_with_if_else](../master/Chrome_app/DOM_function_with_if_else/index.js)

---
###### 이론 끝 개발 시작
## [OHMENTUM](../master/Chrome_app/ohmentum)
#### - Clock
  - 쉼표로 여러개의 변수 선언 가능
  ```js
  const A = document.querySelector(".clsName"),
    B = A.querySelector("h1");
  ```
  - Date 클래스를 이용하여 현재 시각 사용
  ```js
  const date = new Date();
  // Fri Oct 30 2020 04:36:31 GMT+0900 (대한민국 표준시)
  const hours = date.getHours();
  // 4
  ```
  - 삼항 연산자를 이용하여 한자리 수일 때 예외처리
  ```js
  condition ? trueValue : falseValue
  ```
  - setInterval 함수를 사용하여 정해진 시간마다 함수 호출
  ```js
  // 1000ms 마다 호출
  setInterval(functionName, 1000);
  ```

#### - Save Name (localStorage)
  - url을 기준으로 저장되는 localStorage를 사용할 수 있음
  ```js
  const currentUser = localStorage.getItem("KEY");
  // 없을 시 null

  localStorage.setItem("KEY", "VALUE");
  ```

  - Enter 입력 시 form에서 defalut로 실행되는 submit을 방지할 수 있음
  ```js
  const form = document.querySelector(".js-form");

  function handlerSubmit(event){
    event.preventDefault();
  }

  form.addEventListener("submit", handlerSubmit);
  ```

  - display 설정을 다르게 한 css class와 classList의 add, remove를 이용하여 저장 유무에 따라 예외처리


#### - Make to do list
  - `createElement`, `appendChild`를 사용하여 html에 추가, `removeChild`를 사용하여 삭제

  - localStorage를 이용하여 오브젝트로 이루어진 array를 저장

  - ls에 설정, 불러오기 시 JSON fn을 사용
  ```js
  // JSON = JavaScript Object Notation
  JSON.stringify(something);
  // 모든 객체들을 문자열 형태로 만들어 줌
  JSON.parse(something);
  // 문자열을 JS 형태로 읽어줌

  // python의 exec와 같은 느낌
  ```

  - array의 forEach, filter fn을 사용하여 불러왔을 때, 삭제했을 때 설정
  ```js
  // array에 있는 모든 요소들을 함수의 매개변수로 사용
  array.forEach(funtion(ex){
    console.log(ex);
  });

  // array에 있는 모든 요소들을 함수의 매개변수로 사용 후 반환 값이 true인 요소들로 이루어진 새 array를 반환
  newArray = array.filter(funtion(ex){
    return ex % 2 === 0;
  });
  ```

#### - Image Background
  - Math 모듈의 랜덤과 버림을 이용
  ```js
  // Math.random() * 5 = 0~5까지 랜덤으로
  // Math.floor = 나머지 버림
  // Math.ceil = 나머지 올림
  const number = Math.floor(Math.random() * IMG_NUMBER);
  ```
