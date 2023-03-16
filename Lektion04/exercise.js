/*
const fruits = ['apple', 'orange', 'pear']
fruits.push('mango')//add mango in the end
fruits.unshift('strawberries')//add in the begaining
fruits.pop(); //take away the element in the end
console.log(fruits)

//object
const person = {
    firstName: "Ling",
    lastName: "Wang",
    age: 31,
    hobbies:["music", "painting", "nature"],
    address: {
        street: "mörbyvägen 4",
        city: "Stockholm",
        state: "Stockholm"
    }
}

console.log(person.address.city)
//get veribles 
const {firstName, lastName, address: {city}} = person
console.log(city)

//add properties
person.email = 'ling.wang@gmail.com'
console.log(person.email)

*/

//todo list
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplited:true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isComplited: true
    },
    {
        id: 3,
        text: "dentist appt",
        isComplited: false
    }
]

console.log(todos[1].text)

//convert to json format
const todoJson = JSON.stringify(todos);
console.log(todoJson)

//for-loop

for(let i = 0; i< 10; i++){
console.log(`for loop number: ${i}`);
}

//while
let i = 0;
while(i<10){
    console.log(`While loop number: ${i}`)
    i++
}

for(let i = 0; i< todos.length; i++){
    console.log(todos[i].text);
    }

//for(let todo of todos){
   // console.log(todo.text)
//}

//function programming
//forEach
todos.forEach(function(todo){
    console.log(todo.text)
})

console.log("hera is an other version with functional programming")
todos.forEach((todo)=> console.log(todo));

//map
const todoText = todos.map(function(todo){
    return todo.text
})

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isComplited === true;
}).map(function(todo){
    return todo.text
})
console.log(todoCompleted)

//if x > 10 then red else blue
const x = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color)

//functions
function addNums(num1 = 1, num2 = 1){ //works with default values
    return num1 + num2
}
console.log(addNums(1,4))

//the samme as above
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2
console.log(addNums2(5,5))

