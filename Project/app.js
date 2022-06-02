const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 자주 사용하는 string은 정의해서 사용한다.
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작(새로고침)을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm에 hidden 이라는 class name을 더해줘서 form 을 숨긴다.
  const username = loginInput.value; // loginInput.value 값을 username 이라는 변수로 지정해주고, 그 이름을 h1에 넣는다.
  localStorage.setItem(USERNAME_KEY, username); // 그 변수 값을 localStorage에 username 이라는 key로 저장한다.
  paintGreetings(username); // paintGreetings 함수를 호출한다. (form안에 있는 input에 입력한 유저명을 받는다.)
}

// 자주 사용하는 코드는 함수로 만들어서 사용한다.
function paintGreetings(username) {
  // paintGreetings 함수는 username 이라는 인자를 받고 있고,
  greeting.innerText = `Hello ${username}`; // 비어있는 h1 요소 안에 텍스트를 추가한다.
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1 요소로 부터 classList에 class명인 hidden 을 제거한다.
}

// localstorage에 username을 불러온다.
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  // localstorage가 null 일 때 (값이 없을 때)
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form의 hiddin class명을 제거해서 form이 화면에 표시된다.
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}

// localStorag에 이름을 저장/불러오기/삭제하는 방법
// - localStorage.setItem : 이름을 저장한다
// - localStorage.getItem : 이름을 불러온다
// - localStorage.removeItem : 이름을 삭제한다
