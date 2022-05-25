'use strict';

// prompt() : 사용자에게 메시지를 보여주고 값을 입력하라고 요청함
// parseInt() string을 number 로 변환할 때 사용
// isNaN() : 입력한 인자가 숫자가 아닌지 true, false 를 반환함

// querySelector(".xx") : 요소를 CSS 방식으로 검색할 수 있음
// - class name과 그 안에 h1를 명시해줘야 함
// - querySelector()는 첫번째 요소만 반환함
// - 동일한 요소를 다 가져 오려면 querySelectorAll() 사용해야 함

// const h1 = document.querySelector('div.Hello:first-child h1');

// console.dir(h1); // 자세한 로그를 보고 싶다면 .dir 사용
// title.innerText = 'Hello';

// 이벤트 만들기 : addEventListener() : 이벤트를 추가할 때 사용
// - 문법 : addEventListener(listen 하고싶은 이벤트명, 이벤트 발생시 호출할 function 입력)

// // ㄴ title 클릭시 색상이 파란색으로 변경된다.
// function handleTitleClick() {
//   h1.style.color = 'blue';
// }
// h1.addEventListener('click', handleTitleClick); // function 불러올 때 ()는 넣지 말것! // = title.onclick = handleTitleClick;

// // ㄴ title 안에 마우스 커서가 오면 'Mouse is here!로 텍스트가 변경된다.
// function handleMouseEnter() {
//   h1.innerText = 'Mouse is here!';
// }
// h1.addEventListener('mouseenter', handleMouseEnter); // = title.onmouseenter = handleMouseEnter;

// // ㄴ title 밖으로 마우스 커서가 벗어나면 Mouse is gone!로 텍스트가 변경된다.
// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone!';
// }
// h1.addEventListener('mouseleave', handleMouseLeave); // = title.onmouseleave = handleMouseLeave;

// // ㄴ 윈도우 크기가 조정되었을 때 handleWindowResize를 반환한다
// function handleWindowResize() {
//   document.body.style.backgroundColor = 'tomato'; // body는 h1 처럼 document 밑으로 가져올 수 없다
// }
// window.addEventListener('resize', handleWindowResize); // 'resize' web api 사용

// // ㄴ 복사를 실행할 때 알럿창이 뜬다.
// function handleWindowCopy() {
//   alert('copier!');
// }
// window.addEventListener('copy', handleWindowCopy); // 'copy' web api 사용

// // ㄴ 인터넷 연결이 끊어지면 얼럿창이 뜬다.
// function handleWindowOffline() {
//   alert('SOS no WIFI');
// }
// window.addEventListener('offline', handleWindowOffline);

// // ㄴ 인터넷 연결되면 얼럿창이 뜬다.
// function handleWindowOnline() {
//   alert('All GOOOD');
// }
// window.addEventListener('online', handleWindowOnline);

// 클릭시 파란색이면 토마토색으로 변경하고 그게 아니면 파란색으로 변경한다.
// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   h1.style.color = newColor;
// }
// h1.addEventListener('click', handleTitleClick);

// javascript는 HTML을 변경하고, CSS는 HTML을 바라본다.
// const h1 = document.querySelector('div.Hello:first-child h1');

// function handleTitleClick() {
//   //h1.className = 'active'; // css에 active를 가져온다
//   const clickedClass = 'clicked'; // css에 정의된 클래스를 먼저 정의해서 사용하는게 좋다.
//   if (h1.classList.contains(clickedClass)) {
//     // clickedClass가 h1의 classList에 포함되어 있다면, // .contains() 사용
//     h1.classList.remove(clickedClass); // clickedClass를 제거한다. // .remove() 사용
//   } else {
//     // clickedClass가 h1의 classList에 포함되어 있지 않다면,
//     h1.classList.add(clickedClass); // clickedClass를 추가한다. // .add() 사용
//   }
// }
// h1.addEventListener('click', handleTitleClick);

// 위 코드를 간단하게 만드는 방법 : .toggle() 사용
// function handleTitleClick() {
//   h1.classList.toggle('clicked');
//   // toggle은 h1의 classList에 clickedClass가 이미 있는지 확인해서 만약 있다면 , toggle이 clicked를 제거한다.
//   // classList에 clicked가 존재하지 않는다면 toggle은 clicked를 추가해준다.
// }
// h1.addEventListener('click', handleTitleClick);
