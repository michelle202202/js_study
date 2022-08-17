
// 폴더내 이미지를 파일명으로 배열화한다.
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg"
];

// 이미지를 랜덤으로 출력한다.
const chosenImage = images[Math.floor(Math.random() * images.length)];

// Document.createElement() : 지정한 tagName의 HTML 요소를 만들어 반환, 구문: document.createElement(생성할 요소의 유형을 가리키는 문자열);
const bgImage = document.createElement("img");
bgImage.className = 'background'
bgImage.src = `img/${chosenImage}`;

// .appendChild() : 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
//. appendChild()는 부모 노드의 가장 뒤에, .prependChild()는 부모 노드의 가장 앞에 넣는다.
document.body.appendChild(bgImage);