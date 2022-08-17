const clock = document.querySelector('div#clock');

function getClock() {
  const date = new Date(); // Date object 생성 // Date object는 아래 시간,분,초를 가져온다
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `시간 : ${hours}:${minutes}:${seconds}`;
}

getClock(); // 1초 기다리지 않고 시간을 호출하려면 함수를 먼저 호출한 후 setInterval을 호출한다.
setInterval(getClock, 1000); // 1초마다 gerClock 함수를 호출한다

// setInterval(TimerHandler, timeout?: number) : 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출 (반복 실행)
// setTimeout(TimerHandler, timeout?: number) : 만료된 후 함수나 지정한 코드 조각을 1회만 실행하는 타이머를 설정

// padStart() : 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환 (문자열 맨앞에 추가)
// - 구문 : str.padStart(목표 문자열 길이, 현재 문자열에 채워넣을 다른 문자열) = String.prototype.padStart()
// - 시작점부터 주어진 문자열로 채워 목표 길이를 맞춤

// padEnd() : 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환 (문자열 맨끝에 추가)
// - 구문 : str.padEnd(목표 문자열 길이, 현재 문자열에 채워넣을 다른 문자열) = String.prototype.padEnd()
// - 끝부터 주어진 문자열로 채워서 목표 길이를 맞춤
