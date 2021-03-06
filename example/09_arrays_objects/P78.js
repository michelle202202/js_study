'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제78) 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.

const tvs = ['tv1', 'tv2', 'tv3', 'tv4'];
tvs.forEach((tv) => console.log(tv));
const user1 = question('다른 프로그램 입력: ');
const user2 = questionInt('원하는 배열 위치 입력: ');
tvs.splice(user2, 0, user1); // user의 위치에 0개 삭제하고 user1를 추가한다 (.splice() 사용)
console.log(tvs);
