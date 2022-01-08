const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
};

const KrAge = calculateKrAge(age);

console.log(KrAge);

const calculator = {
    add : function(a,b) {
        return a + b;
    },

    min : function(a, b) {
        return a - b;
    },

    mul : function(a, b) {
        return a * b;
    },

    div : function(a,b) {
        return a / b;
    },

    pow: function(a, b) {
        return a ** b;
    },
};

const plusResult = calculator.add(2,4);
const minusResult =calculator.min(plusResult,4);
const mulResult =calculator.mul(20,4);
const divideResult =calculator.div(60,4);
const powerResult =calculator.pow(4,4);



/* const calculator = {
    add : function(a,b) {
        console.log(a + b);
    },

    min : function(a, b) {
        console.log(a - b);
    },

    mul : function(a, b) {
        console.log(a * b);
    },

    div : function(a,b) {
        console.log(a / b);
    },

    pow: function(a, b) {
        console.log(a ** b);
    },
};

calculator.add(2,4);
calculator.min(5,4);
calculator.mul(20,4);
calculator.div(60,4);
calculator.pow(4,4); */

/* const player = {
    name : "Bob",
    sayHello : function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
console.log(console);
 */


/* function plus(a, b) {
    console.log(a + b);
};

function divide() {
    console.log(a / b);
};

plus(8,20);
divide(90, 20);

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 12);
sayHello("nice", 32);
sayHello("Bob", 35); */


/* const player = {
    name:"Bob",
    points: 10,
    fat: false,
};

console.log(player);
console.log(player["name"]);
player.lastName ="potato";
player.points += 15;
console.log(player["points"]); */


/* const amIFat = true;
let something;
console.log(something, amIFat);

const daysOfWeek = ["mon" , "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("apple"); */

/* alert("hi"); */

/* const a = 5;
const b = 2;
let myName = "Bab";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello" + myName);

myName = "juice";
console.log("your" + myName);  */

/* 변수만들때 let, const, var차이
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능

let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능 */