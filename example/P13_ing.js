'use strict';

import { question } from 'readline-sync';

// qusestion은 입력받고 consol.log는 출력한다
// window powershell에서 한글 깨질 때 [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8 선언 후 시작

// 문제13) 사용자에게 20보다 작은 숫자를 입력하라고 요청한다.
// 만약 입력된 값이 20과 같거나 크면 "Too high"라는 메시지를 출력하라.
// 그렇지 않다면 "Thank you"를 출력하라.