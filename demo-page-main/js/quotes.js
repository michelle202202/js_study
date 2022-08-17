// 명언을 객체 형태로 만든다.
const quores = [
    {
        quote: "우리 인생의 가장 큰 영광은 결코 넘어지지 않는 데 있는 것이 아니라넘어질 때마다 일어서는 데 있다.",
        author: "넬슨 만델라",
    },
    {
        quote: "안심하면서 먹는 한 조각의 빵이 근심하면서 먹는 잔치보다 낫다.",
        author: "이솝",
    },
    {
        quote: "오늘 할 수 있는 일에 전력을 다하라, 그러면 내일에는 한 걸음 더 진보한다.",
        author: "뉴턴",
    },
    {
        quote: "변명중에서도 가장 어리석고 못난 별명은 '시간이 없어서'이다",
        author: "에디슨",
    },
    {
        quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
        author: "캐롤 버넷",
    },
    {
        quote: "출생과 죽음은 피할 수 없으므로 그 사이를 즐겨라.",
        author: "조지 산타야나",
    },
    {
        quote: "끝을 맺기를 처음과 같이 하면 실패가 없다.",
        author: "노자",
    },
    {
        quote: "질병은 입을 쫓아 들어가고 화근은 입을 좇아 나온다.",
        author: "태평어람",
    },
    {
        quote: "탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다.",
        author: "몽테뉴",
    },
    {
        quote: "힘으로 사람을 복종시키려 말고 덕으로써 사람을 복종시켜라.",
        author: "맹자",
    },
    {
        quote: "몸가짐은 각자가 자기의 모습을 비추는 거울이다.",
        author: "괴테",
    },

]

// Document.querySelector() : 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element를 반환
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// Math.random() : 랜덤 값으로 반환, Math.roung() : 반올림 처리하여 정수로 반환, Math.ceil() : 무조건 올림 처리하여 정수로 반환, Math.floor() : 무조건 버림 처리하여 정수로 반환
const todaysQuote = quores[Math.floor(Math.random() * quores.length)]; 

// 명언을 표시한다.
quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;