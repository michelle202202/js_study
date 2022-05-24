'use strict';

// prompt() : 사용자에게 메시지를 보여주고 값을 입력하라고 요청함
// parseInt() string을 number 로 변환할 때 사용
// isNaN() : 입력한 인자가 숫자가 아닌지 true, false 를 반환함
// querySelector(".xx") : 요소를 CSS 방식으로 검색할 수 있음
// - class name과 그 안에 h1를 명시해줘야 함
// - querySelector()는 첫번째 요소만 반환함
// - 동일한 요소를 다 가져 오려면 querySelectorAll() 사용해야 함

const title = document.querySelector('div.Hello:first-child h1');

// console.dir(title);
// title.innerText = 'Hello';

// Click 이벤트 만들기
// addEventListener() : 이벤트를 추가할 때 사용
// - 문법 : addEventListener(listen 하고싶은 이벤트명, 이벤트 발생시 호출할 function 입력)
function handleTitleClick() {
  title.style.color = 'blue';
}
title.addEventListener('click', handleTitleClick); // function 불러올 때 ()는 넣지 말것!
