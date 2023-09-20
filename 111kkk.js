//144
let arr = ['a', 'b', 'c', 'd', 'e'];{
    console.log(elem);
}

//145
//1
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(key);
}
//2
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(obj[key]);
}

//146
let i = 1;
while (i<=100){
    console.log(i);
    i++;
}

//2
let i = 11;
while( i <= 33){
    console.log(i);
    i++;
}

//3
let num = 250;
let iterations = 0;
while (num < 1000){
    num = num * 3;
    iterations++;
}
console.log(num);
console.log(iterations);

//147
//1
for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

//2
for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

//3
for (let i = 0; i <= 100; i += 2) {
	console.log(i); 
}

//4
for (let i = 1; i <= 99; i += 2){
    console.log(i);
}

//5
for (let i = 100; i > 0; i--){
    console.log(i);
}

//148
//1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//2
let arr = ['a', 'b', 'c', 'd', 'e'];
for  (let i = 1; i < arr.length - 1; i++) {
	console.log(arr[i]);
}

//3
let arr = ['a', 'b', 'c', 'd', 'e'];
for  (let i =  arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}

//4
let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//149
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr){
    if(elem > 3 && elem < 10){
        console.log(elem);
    }
}

//2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
	if (obj[key] % 2 != 0) {
		console.log(obj[key]);
	}
}

//150
//1
let res = 0;
for (let i = 2; i <= 100; i += 2) {
	res = res + i;
}
console.log(res); 

//2
let res = 0;
for (let i = 1; i <= 99; i += 2) {
	res = res + i;
}
console.log(res); 

//3
let res = 1;
for (let i = 1; i <= 20; i ++ 1) {
	res = res * i;
}
console.log(res); 

//151
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res);

//2
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    if(elem % 2 == 0){
        res += elem;
    }
}
console.log(res);

//3
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let i = 0; i < arr.length; i++){
    res += arr[i] ** 2;
}
console.log(res);

//4
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let i = 0; i < arr.length; i++){
    res *= arr[i] ;
}
console.log(res);

//152
let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str); 

//2
let str = '';
for (let i = 1; i <= 9; i++) {
	str += i;
}
console.log(str)

//3
let str = '';
for (let i = 9; i >= 1; i--) {
	str += i;
}
console.log(str)

//4
let str = '';
for (let i = 1; i <= 9; i++) {
	str += '-' + i;
}
console.log(str)

//153
for (let i = 1; i <= 1000; i++) {
	const first = parseInt(i.toString()[0]);
    console.log(first);
}

//2
for (let i = 10; i <= 1000; i++) {
    const digits = i.toString();
        if (digits.length >= 2) {
            const firstDigit = parseInt(digits[0]);
            const secondDigit = parseInt(digits[1]);
            const sum = firstDigit + secondDigit;
        console.log(sum);
    }
}

//3
for (let i = 10; i <= 1000; i++) {
    const firstDigit = parseInt(i.toString()[0]);
        if (firstDigit === 1) {
            console.log(i);
            }
}

//4
for (let i = 10; i <= 1000; i++) {
    const digits = i.toString();
    
    if (digits.length >= 2) {
        const firstDigit = parseInt(digits[0]);
        const secondDigit = parseInt(digits[1]);
        const sum = firstDigit + secondDigit;
    
        if (sum === 5) {
            console.log(i);
        }
    }
}

//154
const numbers = [1, 2, 3, 0, 4, 5];
for (const number of numbers) {
    console.log(number);
    if (number === 0) {
        break;
    }
}

//2
const numbers = [1, 2, 3, -4, 5, 6];
let sum = 0;
for (const number of numbers) {
    if (number < 0) {
        break;
    }
    sum += number;
}
console.log(sum);

//3
const numbers = [1, 2, 3, 4, 3, 5];
let position = -1;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 3) {
        position = i;
        break;
    }
}
console.log(position);

//4
let sum = 0;
let count = 0;
while (true) {
    count++;
    sum += count;
    if (sum > 100) {
        break;
    }
}
console.log(count);

//156 
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i);
    }
}

//2
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i}${j}`);
    }
}

//159
const numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

//2
const letters = [];
for (let i = 0; i < 10; i++) {
    letters.push('x');
}
console.log(letters);

//3
const originalArray = [1, -2, 3, -4, 5, 6, -7, 8, 9, -10];
const positiveNumbers = [];
for (const number of originalArray) {
    if (number > 0) {
        positiveNumbers.push(number);
    }
}
console.log(positiveNumbers);

//160
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

//2
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] - 1;
}
console.log(numbers);

//3
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 10;
}
console.log(numbers);

//161
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let daysObject = {};

for (let i = 0; i < arr1.length; i++) {
    daysObject[arr1[i]] = arr2[i];
}

console.log(daysObject);

//2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let evenNumbersObject = {};

for (let key in obj) {
    if (obj[key] % 2 === 0) {
        evenNumbersObject[key] = obj[key];
    }
}

console.log(evenNumbersObject);

//3
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let reversedObject = {};

for (let key in obj) {
    reversedObject[obj[key]] = key;
}

console.log(reversedObject);

//162
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] ** 2;
}

console.log(obj);

//2
let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
    obj[key] = obj[key] + 1;
}

console.log(obj);

//63
let arr = ['a', 'b', 'c', 'd', 'e'];

if (arr.includes('c')) {
    console.log('+++');
} else {
    console.log('---');
}

//2
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//164
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let firstDigit = Math.floor(arr[i] / 10); 

    if (firstDigit === 1 || firstDigit === 2) {
        sum += arr[i];
    }
}

console.log(sum);

//165
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let key in obj) {
    if (key[0] === '1'  key[0] === '2') { /
        sum += obj[key]; 
    }
}

console.log(sum);

//166
for (let i = 0; i < 10; i++) { 
    console.log(i);
}

//2
for (let i = 10; i >= 0; i--) { 
    console.log(i);
}

//3
for (let i = 10; i >= 0; i--) { 
    console.log(i);
}

//4
let i = 0;
while (i <= 10) { 
    console.log(i);
    i++;
}

//5
let res = 0;
for (let i = 1; i <= 10; i++) {
    res += i;
}
console.log(res);

//6
let res = 1; 
for (let i = 1; i <= 10; i++) {
    res *= i;
}
console.log(res);

//7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    sum += +elem;
}
console.log(sum);

//8
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    sum += +elem;
}
console.log(sum);

//9
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    sum += +elem;
}
console.log(sum);

//10
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) { 
    sum += +arr[i];
}
console.log(sum);

//11
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}
console.log(sum);

//12
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += +i; 
}
console.log(sum);

//13
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}
console.log(arr);

//14
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);

//15
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
console.log(sum);

//16
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
    sum += +obj[key]; 
}
console.log(sum);

//17
let arr = [1, 2, 3, 4, 5];
let res = '---'; 
for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break;
    }
}
console.log(res);

//18
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);

//19
let arr = [1, 2, 3, 4, 5];
let res = false;
for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}
console.log(res);

//20
let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
    if (elem % 2 === 0) { 
        console.log(elem);
    }
}

//21
let arr = [1, 2, 3, 4, 5];
let res = [];
for (let elem of arr) {
    if (elem % 2 !== 0) { 
        res.push(elem);
    }
}
console.log(res);

//167
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//2
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

//3
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//4
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
}

//5
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

//6
let arr = [2, 5, 8, 1, 12, 7, 6, 9, 11];
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}

//7
let arr = [1, 3, 5, 7, 9];
let found = false;
for (let elem of arr) {
    if (elem === 5) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Есть элемент со значением 5");
} else {
    console.log("Нет элемента со значением 5");
}

//8
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);

//9
let arr = [1, 2, 3, 4, 5];
let sumOfSquares = 0;
for (let elem of arr) {
    sumOfSquares += elem ** 2;
}
console.log(sumOfSquares);

//10
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
let average = sum / arr.length;
console.log(average);

//11
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);

//12
let arr = [];
for (let i = 10; i >= 1; i--) {
    arr.push(i);
}

//13
let arr = [-2, 4, -6, 8, -10, 12];
let sumOfPositives = 0;
for (let elem of arr) {
    if (elem > 0) {
        sumOfPositives += elem;
    }
}
console.log(sumOfPositives);

//14
let arr = [10, 20, 30, 50, 235, 3000];
for (let elem of arr) {
    let strElem = String(elem);
    let firstDigit = Number(strElem[0]);
    if (firstDigit === 1  firstDigit === 2  firstDigit === 5) {
        console.log(elem);
    }
}

//15
let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.reverse();
console.log(reversedArr);

//16
let arr = [0, 1, 2, 2, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
}

//17
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    document.write(elem + '<br>');
}

//18
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    document.write('<p>' + elem + '</p>');
}

//19
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let day of daysOfWeek) {
    if (day === 'Суббота' || day === 'Воскресенье') {
        document.write('<b>' + day + '</b><br>');
    } else {
        document.write(day + '<br>');
    }
}

//20
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 3; 

for (let i = 0; i < daysOfWeek.length; i++) {
    if (i === day - 1) {
        document.write('<em>' + daysOfWeek[i] + '</em><br>');
    } else {
        document.write(daysOfWeek[i] + '<br>');
    }
}

//21
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    obj[key] += obj[key] * 0.1;
}

//22
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] += obj[key] * 0.1;
    }
}

//23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let newObj = {};

for (let i = 0; i < arr1.length; i++) {
    newObj[arr1[i]] = arr2[i];
}

//24
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumOfKeys = 0;
let sumOfValues = 0;

for (let key in obj) {
    sumOfKeys += Number(key);
    sumOfValues += obj[key];
}

let result = sumOfKeys / sumOfValues;

//25
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysArr = [];
let valuesArr = [];

for (let key in obj) {
    keysArr.push(key);
    valuesArr.push(obj[key]);
}

//26
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let newArr = [];

for (let key in obj) {
    let strVal = String(obj[key]);
    if (strVal[0] === '1' || strVal[0] === '2') {
        newArr.push(obj[key]);
    }
}

//27
let arr = ['a', 'b', 'c', 'd', 'e'];
let newObj = {};

for (let i = 0; i < arr.length; i++) {
    newObj[i + 1] = arr[i];
}

//28
let arr = ['a', 'b', 'c', 'd', 'e'];
let newObj = {};

for (let i = 0; i < arr.length; i++) {
    newObj[arr[i]] = i + 1;
}