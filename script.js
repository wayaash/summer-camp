console.log("Heyy! Welcome!!");

let variable1 = "How are you!?";

variable1 = "how are you?";
console.log(variable1);
variable1 = "I AM GREATTTTT!!";
console.log(variable1);

let string = "hahahahhaahahhaahaha";
let numbers = 67;
let array = [123,456,789,1234,12345];
let object = {
    name: "yashuuu",
    job: "hack clubber",
    age: 16,
}

console.log(string);
console.log(numbers);
console.log(array[3]);
console.log(object.name);

//Basics above^^

// Functions Below!!

function hi (input){
    console.log(input);
}
hi("hiyaaaa again!");

document.getElementById("button")
.addEventListener("click", clicked);

function clicked(){
    document.getElementById("header").innerHTML = "YASH IS DUMBBBBB (you just changed the text!)"; 
}

var colors = [
    "red",
    "orange",
    "yellow",
    "lime",
    "cyan",
    "deepskyblue",
    "blue",
    "purple",
    "magenta",
    "hotpink",
    "white"
];

var i = 0;
document.getElementById("header").style.textShadow = "0 0 10px white";
setInterval(function () {
    document.getElementById("header").style.color = colors[i];

    i = i + 1;

    if (i == colors.length) {
        i = 0;
    }
}, 150);
function addButton() {
    var button = document.createElement("button");
    button.innerHTML = "Change Background";

    button.onclick = function () {
        var colors = ["red", "blue", "green", "yellow", "pink", "orange", "purple", "lightblue", "lightgreen", "brown"];

        var random = Math.floor(Math.random() * colors.length);

        document.body.style.backgroundColor = colors[random];
    };

    document.body.appendChild(button);
}

addButton();
const d = new Date();
document.getElementById("time").innerHTML = d;
