'use strict';

import { questionInt } from 'readline-sync';
import { question } from 'readline-sync';

// 문제95) 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.

const arrays = [10.11, 11.23, 45.64, 68.45];
let num = questionInt('2~5 사이의 정수 입력: ');

// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다. << 이걸 모르겠..

while (true) {
  if (arrays.includes(num)) {
    console.log('number not in array');
    num = questionInt('다시 숫자 입력: ');
  } else {
    const initialValue = 0;
    const calculation = arrays.reduce(
      (previousValue, currentValue) => (previousValue + currentValue) / 2,
      initialValue
    );
    console.log(calculation.toFixed(2));
    break;
  }
}
// .reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환