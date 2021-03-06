'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제75) 세자리 숫자 네 개가 담긴 배열을 생성한다.
// 배열의 각 항목을 한 줄에 하나씩 출력하여 사용자에게 표시한다.
// 사용자에게 세 자리의 숫자를 입력하라고 요청한다.
// 만약 입력한 숫자가 배열에 있는 숫자들 중 하나라면 배열에 그 숫자가 위치한 인덱스를 출력하라.
// 그렇지 않다면 "That is not in the list"라는 메시지를 출력하라.

const num1 = [120, 121, 122, 123];
num1.forEach((num) => console.log(num));
const user = questionInt('세자리 숫자 입력: ');

if (num1.includes(user)) {
  console.log(`인덱스 번호: ${num1.indexOf(user)}`);
} else {
  console.log('That is not in the list');
}

// forEach는 배열 안에 들어있는 value 들마다 내가 전달한 함수를 출력한다
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
