const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    //const clickedClass = "clicked"
   h1.classList.toggle("clicked");
   
   
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // }
    // else {
    //     h1.classList.add(clickedClass);
    // }


    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue") {
    //     newColor = "tomato";
    // }
    // else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
}

// function handleMouseEnter() {
//     h1.innerText = "mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI!!");
// }

// function handleWindowOnline() {
//     alert("ALL GOOOOD!");
// }

console.dir(h1);


h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

/* const title = document.getElementById("title");
title.innerText = "got you!";
console.log(title.innerText);

const hellos = document.getElementsByClassName("hello");

const title01 = document.querySelector(".hello h1");
const title02 = document.querySelectorAll(".hello h1");

console.log(title01);
console.log(title02); */


/* const age = parseInt( prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} */


/* else if(age < 18) {
    console.log("you are too young.");
    //console.log("Thank you for writing your age.");
}
else if(age >=18 && agr <= 50) {
    console.log("you can drink");
}
else if (age > 50 && age<=80) {
    console.log("you should exercise");
}
else if(age > 80) {
    console.log("you can do whatever you want.");
} */


///console.log(typeof age);
///console.log(age, parseInt(age));

/* const age = 96;
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
const powerResult =calculator.pow(4,4); */


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

/* ??????????????? let, const, var??????
let ????????? ??????, ????????? ??????
const ????????? ??????, ????????? ??????
var ????????? ??????, ????????? ??????

let a = b;
let a = c;
//????????? ??????

let a = b;
a = c;
//???????????? ??????

const a = b;
const a = c;
//????????? ??????

const a = b;
a = c;
//????????? ??????

var a = b;
var a = c;
a = d;
//?????????, ????????? ?????? */