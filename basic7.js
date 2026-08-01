//Array in javascript
let student1="Anu";
let student2="anjali";
let student3="kiran";
let student=["Anu","anjali","kiran"];
console.log(student[0]);
console.log(student[1]);

let fruit=["orange","apple","mango"];
//return length of an array
console.log(fruit.length);
//add element end of te array
fruit.push("banana");
console.log(fruit);
//remove the last element
fruit.pop();
console.log(fruit);
//add elements at the beginning

fruit.unshift("kiwi");
console.log(fruit);
//remove the 1st elements
fruit.shift("kiwi");
console.log(fruit);
//index of elements
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("guava"));
//check whether elements exists
console.log(fruit.includes("apple"));
console.log(fruit.includes("pineapple"));