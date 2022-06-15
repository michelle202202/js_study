
const toDoFrom = document.getElementById("todo-from");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

function painToDo(newTodo){
    const li = document.createElement("li"); //li를 만든다
    const span = document.createElement("span"); // span을 만든다
    li.appendChild(span) // span은 li의 내부에 있기 때문에 li 안에 span을 넣는다.
    span.innerText = newTodo; // span 내부에 from에서 준 새로운 텍스트(newTodo)값을 넣는다
    toDoList.appendChild(li); // toDoList를 li에 추가한다.
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // newTodo는 toDoInput.value값을 비우기 전에 나타내는 string
    toDoInput.value = "";
    painToDo(newTodo); // painToDo 함수에 newTodo를 넣어서 호출한다.
}

toDoFrom.addEventListener("submit", handleToDoSubmit);