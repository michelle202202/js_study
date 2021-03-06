'use strict';

import { question } from 'readline-sync';

// 문제54) 앞면과 뒷면('h' 그리고 't') 중 임의로 선택한다. 사용자에게 어떤 것을 고를지를 요청한다.
//만약 사용자의 선택과 임의로 선택한 값이 서로 같으면 "You win" 메시지를 출력하고, 그렇지 않다면 "Bad luck" 메시지를 출력하라.
// 마지막에 컴퓨터가 선택한 것이 무엇인지를 사용자에게 알려줘라.

const arry = ['h', 't']; // h 와 t 가 배열된 randomStr1를 선언
const randomStr2 = Math.floor(Math.random() * 2); // 랜덤 함수 선언

const result = arry[randomStr2]; // 배열된 문자를 랜덤으로 출력
const str = question('h 와 t 중 입력: ');

if (result === str) {
  console.log('You win');
} else {
  console.log('Bad luck');
}
console.log(`컴퓨터가 선택한 답: ${result}`);
