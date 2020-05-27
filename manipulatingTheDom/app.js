const div = document.createElement("div");
const button = document.createElement("button");
const buttonText = document.createTextNode("click me!");
const textBox = document.getElementById("textBox");
const button2 = document.querySelector("#button2");
const hover = document.querySelector("#hover");
const p = document.querySelector("p");
const nameDiv = document.querySelector("#nameDiv");
const ul = document.querySelector("ul");
button.className = "button1";
button.appendChild(buttonText);
div.appendChild(button);
document.body.appendChild(div);
var colors = ['red', 'green', 'blue', 'pink', 'purple'];
friendArray = ["jhon","david","bob","sarah","garry","jerry","barry","mark","stephen","ana"];

button.addEventListener("click", function () {
    alert("You are a great person!");
});

button2.addEventListener("click", function () {
    alert(textBox.value);
});

hover.onmouseover = function () {
    mouseOver()
};
hover.onmouseout = function () {
    mouseOut()
};

hover.style.height = "50px";
hover.style.width = "50px";

p.addEventListener("click", function () {
    p.style.color = getRandomColor()
});
// colors[Math.floor(Math.random() * colors.length)];

function mouseOver() {

    hover.style.backgroundColor = "red";
}

function mouseOut() {
    hover.style.backgroundColor = "white";
}

function addSpan(){
    const span = document.createElement("span");
    const spanText = document.createTextNode("Rowan ");
    span.appendChild(spanText);
    nameDiv.appendChild(span);
}

function addFriend(){
    for(i=0;i < friendArray.length;i++){
        li = document.createElement("li");
        liText = document.createTextNode(friendArray[i]);
        li.appendChild(liText);
        ul.appendChild(li);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }