
let date = new Date(); // 날짜 Date 객체 활용

const renderCalendar = () => {
    
    const viewYear = date.getFullYear(); // 년도 변수 생성
    const viewMonth = date.getMonth(); // 월 변수 생성

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

// 지난 달 날짜 몇 일을 몇 개를 그려내야 될지 결정, 다음 달 날짜 며칠, 몇 개를 그려내야 될지를 결정
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate(); // 이전달 날짜 변수 생성
const PLDay = prevLast.getDay(); // 이전달 요일 변수 생성

const TLDate = thisLast.getDate(); // 다음달 날짜 변수 생성
const TLDay = thisLast.getDay(); // 다음달 요일 변수 생성

// 날짜를 넣기 위한 빈 배열 만들기
const prevDates = []; 

// keys() 메서드를 활용하면 0부터 n - 1까지의 Array Iterator가 생성 
// 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어냄
// 이번 달 마지막 날짜 + 1을 n에 전달
// 제일 앞에 있는 0을 없애기 위해서 slice 메서드를 활용
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

// prevDates, nextDates 채우기

// 이전 달을 표현할 날짜들을 생성
// 만약 토요일(6)이 아니면 지난 날짜를 반복 생성하는데 1씩 줄어든 값을 .unshift() 메서드로 prevDates 배열의 앞쪽에 계속 채워넣는다
if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
    }
}

// 다음 달을 표현할 날짜들을 생성
// 이번달 마지막 날짜의 요일을 기준으로 필요한 개수를 파악해서 1씩 증가시켜 nextDates 배열에 계속 채워넣는다.
for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
}

// concat()을 이용해 새배열을 합친다.
const dates = prevDates.concat(thisDates, nextDates);

// 지난달 부분을 알아내기 위해서 첫날의 index(firstDateIndex) 찾기
const firstDateIndex = dates.indexOf(1);

// 다음 달 부분을 알아내기 위해서 마지막 날의 index(lastDateIndex) 찾기
const lastDateIndex = dates.lastIndexOf(TLDate);

// foreach 메서드로 전체 요소를 돌면서 html 코드로 데이터를 하나씩 수정해준다.
dates.forEach((date, i) => {
    // 이번 달에 해당하는 부분은 this, 그리고 나머지는 other라는 문자열로 구분
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
    ? "this"
    : "other";
    // 날짜 부분을 span 태그로 감싸서 class로 지정 (날짜에만 투명도를 주기 위함)
    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
})

// dates 태그의 innerHTML 프로퍼티에 dates 배열에 join 메서드를 호출한 결과를 할당한다.
document.querySelector('.dates').innerHTML = dates.join('');


// dates 클릭 이벤트를 함수로 생성
// const Day = document.querySelector(".date")
// const li = document.createElement("li");#todo-form input

// Day.addEventListener('click',(event)=>{
//     if(event.target!==li){
//         li.style.border = '3px solid black';
//     }
//     Day.appendChild(li);

// Day.addEventListener('click',(event)=>{
//     if(event.target.tagName==='UL')return;
//     if(event.target.className!=='disabled'){
//         clearEvent();
//         todoTitle.textContent = `What are you going to do on ${year}.${mon}.${event.target.textContent} 👀⁉`;
//         event.target.style.border='3px solid red';
//         DayOfChoice = (event.target.textContent)*1;
//         MonOfChoice = mon;
//         yearOfChoice = year;
        
//         displayToDoOnDays();
//         clickEventArr.push(event.target);
//         console.log(clickEventArr);
//         input.focus();
//     }
    
// });


// 오늘 날짜 표시
const today = new Date(); // new Date()를 통해 오늘 날짜에 맞는 date객체를 새로 만든다.
if(viewMonth === today.getMonth() && viewYear === today.getFullYear()){ // viewMonth와 viewYear가 today의 데이터와 같은지 비교해서 충족하면
    for(let date of document.querySelectorAll('.this')){ // this라는 클래스를 가진 태그들을 모두 찾아내서 for문을 돌린다.
        if(+date.innerText === today.getDate()){ // 해당 태그가 가지고 있는 날짜는 문자열이기 때문에 + 단항 연산자를 통해 숫자로 변경한 후 오늘 날짜와 비교해서 참이면
            date.classList.add('today'); // 해당 태그에 today라는 클래스를 추가하고 break로 반복문을 종료한다.
            break; 
        }
    }
}

}


renderCalendar(); // 위 코드를 함수로 만들어 호출


// 지난달 생성
const prevMonth = ((event)=>{
    event.preventDefault();
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

// 다음달 생성
const nextMonth = ((event) => {
    event.preventDefault();
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})
    
// 오늘로 이동
const goToday = ((event) => {
    event.preventDefault();
    date = new Date();
    renderCalendar();
})


