'use strict';

import { questionInt } from 'readline-sync';

// 문제32) 원기둥의 반지름과 깊이를 입력하도록 요청한다.
// 원기둥의 부피(원 넓이 * 깊이)를 구하고 결과를 반 올림하여 소수점 세째 자리까지 출력하라.

const radius = questionInt(`원기둥의 반지름 입력: `);
const depth = questionInt(`원기둥의 깊이 입력: `);
const area = Math.PI * radius ** 2;

console.log((area * depth).toFixed(3));
