const text = "Click Me";
const someText = "whats up my dude";
const colors = ['red', 'green', 'blue', 'pink', 'orange'];
const friends = ["jerry","terry","berry","bob","jhon","david","mary","adrian","alfred","sean"];
$("<button>" + text + "</button>").click(function () {
    alert("This is a nice message");
}).appendTo("body");

$("<button>" + text + "</button>").click(function () {
    alert($("input").val());
}).appendTo("body");

$("<input></input>").appendTo("body");

$(".box").css({
    "width":"50px",
    "height":"50px"
});
$(".box").mouseover(function (){
    $(this).css("background-color","red");
});
$(".box").mouseout(function(){
    $(this).css("background-color", "white");
});

$("<p>" + someText + "</p>").click(function(){
    $(this).css("color",colors[Math.floor(Math.random() * colors.length)]);
}).appendTo("body");

function addSpan(){
    let name = "Rowan ";
    $("<span>" + name + "</span>").appendTo(".spanDiv");
}

function addFriends(){
    for(i=0;i < friends.length;i++){
        $("<li>" + friends[i] + "</li>").appendTo("ul");
    }
}