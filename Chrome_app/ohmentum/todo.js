const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const toDos = []

const TODOS_LS = "toDos"

function saveToDos(){
  // JSON.stringify는 모든 객체들을 문자열 형태로 만들어줌
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  const newId = toDos.length + 1;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);

  saveToDos();
}

function handlerSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    // JSON = JavaScript Object Notation
    // JSON.parse를 이용하여 문자열을 객체로
    const parsedToDos = JSON.parse(loadedToDos);

    // array.forEach(fnc) = array안에 있는 모든 요소들을
    // fnc 함수에 적용. 괄호안에 함수를 직접 작성 가능
    // python의 map과 비슷한듯

    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    })
  }
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handlerSubmit);
}

init();
