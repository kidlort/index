// shift - удаляет элемент с начала массива
// unshift - добавляет элемент в начало массива
// push - добавляет элемент в конец
// pop - забирает элемент с конца



//1
let arr = ["Банан","Клубника","Черника"];
arr.pop();
console.log(arr);


//2
let arr2 = ["Абрикос","Ананас","Мандарин"];
arr2.shift();
console.log(arr2);


//3
let arr3 = ["Хурма","Арбуз","Дыня"];
arr3.unshift("Груша");
console.log(arr3);


//4
let arr4 = ["Авокадо","Персик","Киви"];
arr4.push("Черника");
console.log(arr4)


//5
let arr5 = ["Иван", "Мария", "Даша"];
arr5.push("Коля");
arr5.pop();
console.log(arr5);


//6
let arr6 = ["Яблоко", "Апельсин", "Клубника"];
arr6.shift();
arr6.push("Яблоко");
console.log(arr6);


//7
let arr7 = ["Смородина","Черника","Голубика"];
arr7.pop();
arr7.unshift("Голубика");
arr7.pop();
arr7.unshift("Черника");
console.log(arr7);
