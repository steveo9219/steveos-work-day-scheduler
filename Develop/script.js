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

var currentDay = document.getElementById("#currentDay");
var m = moment().format("HH");
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

//everytime hit save button loop through for loop can use .innerHTML top repopulate
//do you have obj for key, value, pair
//save button, for loop,

//put in local storage id , key.value.pair
//local storage uses json.strings "key" in front. parse int after it comes out of storage
//click save button, goes through every text area, grabs current value, creates object
//object has a key and has same id as an id
//then stringify,
