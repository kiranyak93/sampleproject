//javascript object convert to JSON string
let students={
    name:"anju",
    name:"anjali",
    course :"QA",

};
let JSONdata=JSON.stringify(students);
console.log(JSONdata);
console.log(typeof JSONdata);


//JSON string to javascript object
const JSONdata1='{"name":"kiranya", "age":30}';
const student=JSON.parse(JSONdata1);
console.log(student);
console.log(typeof student);



