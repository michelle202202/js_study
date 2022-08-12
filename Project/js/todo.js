
const toDoFrom = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // 자주 사용하는 string은 미리 정의해둔다.

let toDos = []; 

// localStorage에 저장하는 함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) // JSON.stringify() : string으로 변환해준다.
}

// 등록한 목륵을 지우는 함수
function deleteToDo(event){
    const li = event.target.parentElement; // target은 클릭된 HTML element, parentElement는 클릭된 element의 부모
    li.remove(); // Element.remove() : 메서드는 DOM에서 요소를 제거

    // .filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환 // Array.prototype.filter()
    // parseInt() : 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수(숫자)를 반환
    toDos = toDos.filter((toDo => toDo.id !== parseInt(li.id))); // toDos의 배열 중에 li.id와 같은 타입이 아닌 것만 필터해서 새 배열을 만든다.
    saveToDos(); // 새 배열을 저장한다.
}

// 체크박스에서 체크시 취소선 넣기
function isChecked(event){
    const checkbox = event.target.parentElement;
    checkbox.classList.toggle("checked");
}

function painToDo(newTodo){
    const li = document.createElement("li"); //li를 만든다
    li.id = newTodo.id; // li에 id 값을 넣는다.

    const span = document.createElement("span"); // span을 만든다
    span.className = "todolist-box";
    span.innerText = newTodo.text; // span 내부에 from에서 준 새로운 텍스트(newTodo)값을 넣는다
    // 오브젝트를 .text를 사용해 변환해줘야 한다.
    
    const button = document.createElement("button");
    button.className = "close-button";
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    const checkbox = document.createElement("input") // input을 만든다
    checkbox.className = "check-box" // 클래스 이름을 지정한다
    checkbox.setAttribute("type", "checkbox"); // 지정된 요소의 속성 값을 설정한다
    checkbox.addEventListener("click", isChecked); // 클릭시 isChecke 함수를 실행한다

    li.appendChild(checkbox); // li 안에 checkbox를 넣는다
    li.appendChild(span); // span은 li의 내부에 있기 때문에 li 안에 span을 넣는다.
    li.appendChild(button); // li 안에 button을 넣는다

    toDoList.appendChild(li); // toDoList를 li에 추가한다.
    
}



function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // newTodo는 toDoInput.value값을 비우기 전에 나타내는 string
    toDoInput.value = ""; // form을 submit 하면 우리는 input을 비운다.
    const newTodoObj = {
        // text 값과 id 값이 포함된 newTodoObj 객체를 만든다.
        text: newTodo,
        id: Date.now(), // Date.now() : UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환
        // date: 날짜를 저장 // 
    };
    toDos.push(newTodoObj); // newTodo를 toDos 새로운 배열에 추가한다. (과거 내역은 없는 상태)
    painToDo(newTodoObj); // painToDo 함수에 newTodo를 넣어서 호출한다.
    saveToDos();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);

// 
const savedToDos = localStorage.getItem(TODOS_KEY); // savedToDos에 TODOS_KEY 값을 가져오는 변수를 정의한다.

if(savedToDos !== null){
    // JSON.parse(text) : JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성한다.
    // text : JSON으로 변환할 문자열 
    const parsedToDos = JSON.parse(savedToDos);
    // 날짜를 todolist 셋팅할 때 내가 선택한 날짜가 맞는지 필터 돌린다? 해당되는것만  painToDo로 보내서 보여준다.
    toDos = parsedToDos; // 맨 위 빈 배열에 let 을 사용하여 이전 값을 넣어 모든 값을 넣는다.
    parsedToDos.forEach(painToDo);
}

// 다른 날짜를 선택할 때 새로운 todolist를 그려줘야 하는 함수가 필요함