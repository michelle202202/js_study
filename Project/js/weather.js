
// 이용자의 위치 받아오기 (https://openweathermap.org/current)
const API_KEY = "c3648160aa6c4c4b18c956625763cd18";

// 위치 받아오기 성공했을 때 함수
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환한다.
    // ㄴ 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject
    fetch(url)
    // url의 json을 가져온다.
    .then((response) => response.json())
    // data에서 이름, main에 배열에 첫번째 요소를 가져온다.
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `날씨 : ${data.weather[0].main} / 온도 :  ${data.main.temp}`;
    });
}

// 위치 받아오기 실패했을 때 함수
function onGeoError(){
    alert("Can find you. No weather for you.")
}

// Geolocation.getCurrentPosition() : 장치의 현재 위치를 가져온다
// 구문 : navigator.geolocation.getCurrentPosition(success, error, [options])
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
