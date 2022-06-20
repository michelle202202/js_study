'use strict';

// Math.round() : 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
console.log(Math.round(0.9)); //출력값: 1

// Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
console.log(Math.floor(5.95)); //출력값: 5

// Math.max() : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환
console.log(Math.max(1, 3, 2)); //출력값: 3

// Math.PI : 원의 둘레와 지름의 비율, 약 3.14159의 값을 가짐
console.log(Math.PI); //출력값: 3.141592653589793

// Math.random() :  0 이상 1 미만의 구간에서 근사적으로 균일한(approximately uniform) 부동소숫점 의사난수를 반환

// Math.pow() : 특정 숫자의 거듭제곱 값을 반환 - 문법 : Math.pow([대상 숫자], [거듭제곱 횟수]); (연산자 ** 와 동일하게 사용)
console.log(Math.pow(7, 3)); //출력값: 343

// Math.sqrt() : 특정 숫자의 제곱근 값을 반환 - 문법 : Math.sqrt([대상 숫자]);
const num = 123.123;
console.log(Math.sqrt(num).toFixed(2)); //출력값: 11.10 // 특정숫자의 제곱근을 소수점 2자리까지 반올림 출력

// .parseInt() : 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환 // Number.parseInt()

// .toFixed() : 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시 // Number.prototype.toFixed()
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456)); //출력값: "123.46"

// .split() :  string을 배열로 변환 // String.prototype.split()
const str = 'The quick brown fox jumps over the lazy dog.';
const words1 = str.split(' ');
console.log(words1[3]); //출력값: "fox"
const chars = str.split('');
console.log(chars[8]); //출력값: "k"
const strCopy = str.split();
console.log(strCopy); //출력값: Array ["The quick brown fox jumps over the lazy dog."]

//.toUpperCase() : 문자열을 대문자로 변환해 반환 // String.prototype.toUpperCase()
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence1.toUpperCase()); //출력값: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

//.toLowerCase()  : 문자열을 소문자로 변환해 반환 // String.prototype.toLowerCase()
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence2.toLowerCase()); //출력값: "the quick brown fox jumps over the lazy dog."

// .replaceAll : 문자열을 선택한 후 원하는 문자로 변환하는 함수 // String.prototype.replace()
const name1 = 'kim eun young';
console.log(name1.replaceAll(' ', '').length);

// String.length :  UTF-16 코드 유닛을 기준으로 문자열의 길이
const str1 = 'Life, the universe and everything. Answer:';
console.log(`${str1} ${str1.length}`); //출력값: "Life, the universe and everything. Answer: 42

// Array.length : 배열의 길이를 반환
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length); //출력값: 4

// .charAt() : 문자를 배열화한 후 n번째 문자를 반환 // String.prototype.charAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); //출력값: "The character at index 4 is q"

// substring() : string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환 // String.prototype.substring()
const str5 = 'Mozilla';
console.log(str5.substring(1, 3)); //출력값: "oz"
console.log(str5.substring(2)); //출력값: "zilla"

// .slice() : 문자열의 일부를 추출하면서 새로운 문자열을 반환 // String.prototype.slice()
const str2 = 'The quick brown fox jumps over the lazy dog.';
console.log(str2.slice(31)); //출력값: "the lazy dog."
console.log(str2.slice(4, 19)); //출력값: "quick brown fox"
console.log(str2.slice(-4)); //출력값: "dog."

// .slice() :  어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환 (원본 배열은 바뀌지 않음) // Array.prototype.slice()
// 문법 : slice(삭제할 시작 인덱스 번호, 마지막 인덱스 번호) 단, 마지막 인덱스 번호는 제외되므로 +1 해줘야 함
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); //출력값: Array ["camel", "duck", "elephant"]

// .indexOf :  배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환 // Array.prototype.indexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); //출력값: 1

// .indexOf : 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환 // String.prototype.indexOf()
const paragraph =
  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
); //출력값: "The index of the first "dog" from the beginning is 40"

// .includes() : 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환 // String.prototype.includes()
const sentence3 = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence3.includes(word) ? 'is' : 'is not'
  } in the sentence`
); //출력값: "The word "fox" is in the sentence"

// .includes() : 배열이 특정 요소를 포함하고 있는지 판별 // Array.prototype.includes()
const array4 = [1, 2, 3];
console.log(array4.includes(2)); //출력값: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); //출력값: true

// .at() : 정수 값을 받아, 배열에서 해당 값에 해당하는 인덱스의 요소를 반환 // Array.prototype.at()
const array1 = [5, 12, 8, 130, 44];
let index1 = 2;
console.log(`index of ${index1}: ${array1.at(index)}`); //출력값: index of 2: 44

// .pop() : 배열에서 마지막 요소를 제거하고 그 요소를 반환 // Array.prototype.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); //출력값: "tomato"

// .push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환 // Array.prototype.push()
const animals1 = ['pigs', 'goats', 'sheep'];
const count = animals1.push('cows');
console.log(count); //출력값: 4
console.log(animals1); //출력값: Array ["pigs", "goats", "sheep", "cows"]

// .shift() : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 함 // Array.prototype.shift()
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log(array2); //출력값: Array [2, 3]
console.log(firstElement); //출력값: 1

// .sort() : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 // Array.prototype.sort()
// .sort((a, b) => a - b) 의 형식으로 사용해도 됨
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //출력값: Array ["Dec", "Feb", "Jan", "March"]

// .splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경 // Array.prototype.splice()
// 문법 : .splice(시작하는 인덱스 번호, 삭제할 개수 입력), 삭제할 개수 미입력시 시작하는 인덱스 번호부터 모두 삭제됨
const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months1); //출력값: Array ["Jan", "Feb", "March", "April", "June"]

// .filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환 // Array.prototype.filter()
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result); //출력값: Array ["exuberant", "destruction", "present"]

// .join() : 배열의 모든 요소를 연결해 하나의 문자열로 만듬 // Array.prototype.join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); //출력값: "Fire,Air,Water"
console.log(elements.join('')); //출력값: "FireAirWater"
console.log(elements.join('-')); //출력값: "Fire-Air-Water"

// .forEach() : 주어진 함수를 배열 요소 각각에 대해 실행함 // Array.prototype.forEach()
const array3 = ['a', 'b', 'c'];
array3.forEach((element) => console.log(element));
//출력값: "a"
//출력값: "b"
//출력값: "c"

// .concat() : 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환 // String.prototype.concat()
const str3 = 'Hello';
const str4 = 'World';
console.log(str3.concat(' ', str4)); //출력값: "Hello World"

// concat() : 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환 // Array.prototype.concat()
// 기존 배열을 변경하지 않고, 추가된 새로운 배열을 반환함
const array5 = ['a', 'b', 'c'];
const array6 = ['d', 'e', 'f'];
const array7 = array5.concat(array6);
console.log(array7); //출력값: Array ["a", "b", "c", "d", "e", "f"]

// .reverse() : 배열의 순서를 거꾸로(역순) 배열 // Array.prototype.reverse()
const array8 = ['one', 'two', 'three'];
console.log('array1:', array8); //출력값: "array1:" Array ["one", "two", "three"]

// .find() : 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환 // Array.prototype.find()
const array9 = [5, 12, 8, 130, 44];
const found = array9.find((element) => element > 10);
console.log(found); //출력값: 12

// .reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
const array10 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
const initialValue = 0; // initialValue : 초기값
const sumWithInitial = array10.reduce(
  (previousValue, currentValue) => previousValue + currentValue, // previousValue : 이전값, currentValue : 현재값
  initialValue
);
console.log(sumWithInitial); //출력값: 10

// .toString() : 지정된 배열 및 그 요소를 나타내는 문자열을 반환 // Array.prototype.toString()
const array11 = [1, 2, 'a', '1a'];
console.log(array11.toString()); // 출력값: "1,2,a,1a"

// .toString() : 객체의 문자열 표현을 반환 // String.prototype.toString()
const stringObj = new String('foo');
console.log(stringObj); // 출력값: String { "foo" }
console.log(stringObj.toString()); // 출력값: "foo"

// map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const array12 = [1, 4, 9, 16];

// pass a function to map
const map1 = array12.map((x) => x * 2);

console.log(map1);
// 출력값: Array [2, 8, 18, 32]

// 숫자의 배열을 받아 각 숫자들의 제곱근이 들어있는 새로운 배열 만들기
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
// roots는 [1, 2, 3]
// numbers는 그대로 [1, 4, 9]

// 인자를 받는 함수를 사용하여 숫자 배열 재구성하기
// 인자인 배열과 안의 요소들은 map을 통해 순회하면서 원본 배열로 부터 자동으로 할당됨
const numbers1 = [1, 4, 9];
const doubles = numbers1.map(function (num) {
  return num * 2;
});
// doubles는 이제 [2, 8, 18]
// numbers는 그대로 [1, 4, 9]

// map을 활용해 배열 속 객체를 재구성하기
//  오브젝트의 배열을 받아 각 오브젝트를 다른 형태으로 재구성해 새로운 배열을 만든다
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(function (obj) {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
// reformattedArray는 [{1:10}, {2:20}, {3:30}]
// kvArray는 그대로
// [{key:1, value:10},
//  {key:2, value:20},
//  {key:3, value: 30}]
