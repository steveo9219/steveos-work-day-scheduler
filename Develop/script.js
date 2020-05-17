//assigning all <textarea> tags to var with the appropriate time
//iterate through these like on line 23
//3-11 dont touch 14-22
var nineAm = document.getElementById("nineAm");
var tenAm = document.getElementById("tenAm");
var elevenAm = document.getElementById("elevenAm");
var twelvePm = document.getElementById("twelvePm");
var onePm = document.getElementById("onePm");
var twoPm = document.getElementById("twoPm");
var threePm = document.getElementById("threePm");
var fourPm = document.getElementById("fourPm");
var fivePm = document.getElementById("fivePm");

var nineAmTextarea = document.getElementById("nineAmContent");
var tenAmTextarea = document.getElementById("tenAmContent");
var elevenAmTextarea = document.getElementById("elevenAmContent");
var twelvePmTextarea = document.getElementById("twelvePmContent");
var onePmTextarea = document.getElementById("onePmContent");
var twoPmTextarea = document.getElementById("twoPmContent");
var threePmTextarea = document.getElementById("threePmContent");
var fourPmTextarea = document.getElementById("fourPmContent");
var fivePmTextarea = document.getElementById("fivePmContent");
retain();
var calenderTextarea = [
  nineAmTextarea,
  tenAmTextarea,
  elevenAmTextarea,
  twelvePmTextarea,
  onePmTextarea,
  twoPmTextarea,
  threePmTextarea,
  fourPmTextarea,
  fivePmTextarea,
];

// var timeSlotTextarea = [
//   nineAm.value,
//   tenAm.value,
//   elevenAm.value,
//   twelvePm.value,
//   onePm.value,
//   twoPm.value,
//   threePm.value,
//   fourPm.value,
//   fivePm.value,
// ];

// this is how to get to the context area for 9am
//nineAm.value = "this is it";
var m = moment().format("HH");
console.log(nineAm.value);
for (var i = 0; i < calenderTextarea.length; i++) {
  var currentTextAreaTime = calenderTextarea[i].getAttribute("value");
  if (currentTextAreaTime == m) {
    calenderTextarea[i].classList.add("present");
  } else if (currentTextAreaTime > m) {
    calenderTextarea[i].classList.add("future");
  } else currentTextAreaTime < m;
  {
    calenderTextarea[i].classList.add("past");
  }
}

//trying to create a retain function that when detected as empty pulls from local storage
// and when page is refreshed "retain" that data by pulling from local storage and appending it to
// "nineAm" which is the textarea id=
function retain() {
  if (nineAm.value === "") {
    var localStoragePull = localStorage.getItem("nineAm", "nineAm.value");
    document.getElementById("nineAm").value = localStoragePull;
  } else console.log("pizza");
}

//this is the event listener for the save button on the row of 9am
document
  .getElementById("nineAmSaveBtn")
  .addEventListener("click", saveBtnClick);

//on click this saves the value of nineAm to local storage
function saveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("nineAm", nineAm.value);
}

//ask/ I’m having a hard time getting the day planner nineAm <textarea> to stay after refresh. I’m successfully saving a key.value pair to local storage upon button click. Now I’m trying to figure out a successful retain function on line 67 that call back the value in the text area after refresh. attached link to github repo branch https://github.com/steveo9219/steveos-work-day-scheduler/tree/4-work-on-how-to-store-the-textarea-content-locally
