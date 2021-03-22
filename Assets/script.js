
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

// var time = moment().format("hh:mm:ss");
// $("#timeStamp").text(time);