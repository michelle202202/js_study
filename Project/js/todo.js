
const toDoFrom = document.getElementById("todo-from");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

// localStorage에 저장하는 함수
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos)) // JSON.stringify() : string으로 변환해준다.
}

// 등록한 목륵을 지우는 함수
function deleteToDo(event){
    const li = event.target.parentElement; // target은 클릭된 HTML element, parentElement는 클릭된 element의 부모
    li.remove(); // Element.remove() : 메서드는 DOM에서 요소를 제거
}

function painToDo(newTodo){
    const li = document.createElement("li"); //li를 만든다
    
    const span = document.createElement("span"); // span을 만든다
    span.innerText = newTodo; // span 내부에 from에서 준 새로운 텍스트(newTodo)값을 넣는다
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span); // span은 li의 내부에 있기 때문에 li 안에 span을 넣는다.
    li.appendChild(button);
    toDoList.appendChild(li); // toDoList를 li에 추가한다.
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // newTodo는 toDoInput.value값을 비우기 전에 나타내는 string
    toDoInput.value = ""; // form을 submit 하면 우리는 input을 비운다.
    toDos.push(newTodo); // newTodo를 toDos 배열에 추가한다.
    painToDo(newTodo); // painToDo 함수에 newTodo를 넣어서 호출한다.
    saveToDos();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);