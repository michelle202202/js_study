const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 자주 사용하는 string은 정의해서 사용한다.
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작(새로고침)을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 이라는 class name을 더해줘서 form 을 숨긴다.
  const username = loginInput.value; // loginInput.value 값을 username 이라는 변수로 지정해주고, 그 이름을 h1에 넣는다.
  localStorage.setItem(USERNAME_KEY, username); // 그 변수 값을 localStorage에 username 이라는 key로 저장한다.
  paintGreetings(username);
}

// 자주 사용하는 코드는 함수로 만들어서 사용한다.
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // 텍스트를 출력한다.
  greeting.classList.remove(HIDDEN_CLASSNAME); // classList에 hidden 을 삭제한다.
}

// localstorage에 username을 불러온다.
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  // localstorage가 null 일 때
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form의 hiddin class명을 제거한다.
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}

// localStorag에 이름을 저장/불러오기/삭제하는 방법
// - localStorage.setItem : 이름을 저장한다
// - localStorage.getItem : 이름을 불러온다
// - localStorage.removeItem : 이름을 삭제한다
