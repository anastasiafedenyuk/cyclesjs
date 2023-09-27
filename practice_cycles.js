//167
//1
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