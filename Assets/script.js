//variable for clock
var time;

//variable to grabe the table
var table = document.querySelector("table");

//variables to grab the schedule slots from 9am to 5pm
var slot1 = document.querySelector("#nine");
var slot2 = document.querySelector("#ten");
var slot3 = document.querySelector("#eleven");
var slot4 = document.querySelector("#twelve");
var slot5 = document.querySelector("#one");
var slot6 = document.querySelector("#two");
var slot7 = document.querySelector("#three");
var slot8 = document.querySelector("#four");
var slot9 = document.querySelector("#five");


//variable to grab buttons
var saveButtons = document.querySelectorAll(".table-save");

var clearButton = document.querySelector("#clearButton");

clearButton.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
})
    


saveButtons[0].addEventListener('click', function(){
    var content = table.rows[1].cells[1].innerHTML;
    localStorage.setItem("9am", content);
 })

 saveButtons[1].addEventListener('click', function(){
    var content = table.rows[2].cells[1].innerHTML;
    localStorage.setItem("10am", content);
 })

 saveButtons[2].addEventListener('click', function(){
    var content = table.rows[3].cells[1].innerHTML;
    localStorage.setItem("11am", content);
 })

 saveButtons[3].addEventListener('click', function(){
    var content = table.rows[4].cells[1].innerHTML;
    localStorage.setItem("12pm", content);
 })

 saveButtons[4].addEventListener('click', function(){
    var content = table.rows[5].cells[1].innerHTML;
    localStorage.setItem("1pm", content);
 })

 saveButtons[5].addEventListener('click', function(){
    var content = table.rows[6].cells[1].innerHTML;
    localStorage.setItem("2pm", content);
 })

 saveButtons[6].addEventListener('click', function(){
    var content = table.rows[7].cells[1].innerHTML;
    localStorage.setItem("3pm", content);
 })

 saveButtons[7].addEventListener('click', function(){
    var content = table.rows[8].cells[1].innerHTML;
    localStorage.setItem("4pm", content);
 })

 saveButtons[8].addEventListener('click', function(){
    var content = table.rows[9].cells[1].innerHTML;
    localStorage.setItem("5pm", content);
 })


slot1.textContent = localStorage.getItem("9am");
slot2.textContent = localStorage.getItem("10am");
slot3.textContent = localStorage.getItem("11am");
slot4.textContent = localStorage.getItem("12pm");
slot5.textContent = localStorage.getItem("1pm");
slot6.textContent = localStorage.getItem("2pm");
slot7.textContent = localStorage.getItem("3pm");
slot8.textContent = localStorage.getItem("4pm");
slot9.textContent = localStorage.getItem("5pm");

function clock(){
   time = moment().format("hh:mm:ss");
   $("#timeStamp").text(time);
}

//variables for time colors
var nineAM = "09:00:00";
var tenAM = "10:00:00";
var elevenAM = "11:00:00";
var twelvePM = "12:00:00";
var onePM = "01:00:00";
var twoPM = "02:00:00";
var threePM = "03:00:00";
var fourPM = "04:00:00";
var fivePM = "05:00:00";

clock();
setInterval(clock, 1000);

if (time >= nineAM){
   $("#nine").css("background-color", "orange");
   $("#ten").css("background-color", "#77dd77");
   $("#eleven").css("background-color", "#77dd77");
   $("#twelve").css("background-color", "#77dd77");
   $("#one").css("background-color", "#77dd77");
   $("#two").css("background-color", "#77dd77");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= tenAM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "orange");
   $("#eleven").css("background-color", "#77dd77");
   $("#twelve").css("background-color", "#77dd77");
   $("#one").css("background-color", "#77dd77");
   $("#two").css("background-color", "#77dd77");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= elevenAM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "orange");
   $("#twelve").css("background-color", "#77dd77");
   $("#one").css("background-color", "#77dd77");
   $("#two").css("background-color", "#77dd77");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= twelvePM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "orange");
   $("#one").css("background-color", "#77dd77");
   $("#two").css("background-color", "#77dd77");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= onePM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "#718b91");
   $("#one").css("background-color", "orange");
   $("#two").css("background-color", "#77dd77");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= twoPM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "#718b91");
   $("#one").css("background-color", "#718b91");
   $("#two").css("background-color", "orange");
   $("#three").css("background-color", "#77dd77");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= threePM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "#718b91");
   $("#one").css("background-color", "#718b91");
   $("#two").css("background-color", "#718b91");
   $("#three").css("background-color", "orange");
   $("#four").css("background-color", "#77dd77");
   $("#five").css("background-color", "#77dd77");
}

if (time >= fourPM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "#718b91");
   $("#one").css("background-color", "#718b91");
   $("#two").css("background-color", "#718b91");
   $("#three").css("background-color", "#718b91");
   $("#four").css("background-color", "orange");
   $("#five").css("background-color", "#77dd77");
}

if (time >= fivePM){
   $("#nine").css("background-color", "#718b91");
   $("#ten").css("background-color", "#718b91");
   $("#eleven").css("background-color", "#718b91");
   $("#twelve").css("background-color", "#718b91");
   $("#one").css("background-color", "#718b91");
   $("#two").css("background-color", "#718b91");
   $("#three").css("background-color", "#718b91");
   $("#four").css("background-color", "#718b91");
   $("#five").css("background-color", "orange");
}