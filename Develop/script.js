var nineAm = $("#nineAm").get(0);
var tenAm = $("#tenAm").get(0);
var elevenAm = $("#elevenAm").get(0);
var twelvePm = $("#twelvePm").get(0);
var onePm = $("#onePm").get(0);
var twoPm = $("#twoPm").get(0);
var threePm = $("#threePm").get(0);
var fourPm = $("#fourPm").get(0);
var fivePm = $("#fivePm").get(0);

var nineAmTextarea = $("#nineAmContent").get(0);
var tenAmTextarea = $("#tenAmContent").get(0);
var elevenAmTextarea = $("#elevenAmContent").get(0);
var twelvePmTextarea = $("#twelvePmContent").get(0);
var onePmTextarea = $("#onePmContent").get(0);
var twoPmTextarea = $("#twoPmContent").get(0);
var threePmTextarea = $("#threePmContent").get(0);
var fourPmTextarea = $("#fourPmContent").get(0);
var fivePmTextarea = $("#fivePmContent").get(0);

var calenderTextarea = [
<<<<<<< HEAD
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

var timeSlotTextarea = {
	nineAm: localStorage.getItem("nineAm", "nineAm.value"),
	tenAm: localStorage.getItem("tenAm", "tenAm.value"),
	elevenAm: localStorage.getItem("elevenAm", "elevenAm.value"),
	twelvePm: localStorage.getItem("twelvePm", "twelvePm.value"),
	onePm: localStorage.getItem("onePm", "onePm.value"),
	twoPm: localStorage.getItem("twoPm", "twoPm.value"),
	threePm: localStorage.getItem("threePm", "threePm.value"),
	fourPm: localStorage.getItem("fourPm", "fourPm.value"),
	fivePm: localStorage.getItem("fivePm", "fivePm.value"),
=======
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

var timeSlotTextarea = {
  nineAm: localStorage.getItem("nineAm", "nineAm.value"),
  tenAm: localStorage.getItem("tenAm", "tenAm.value"),
  elevenAm: localStorage.getItem("elevenAm", "elevenAm.value"),
  twelvePm: localStorage.getItem("twelvePm", "twelvePm.value"),
  onePm: localStorage.getItem("onePm", "onePm.value"),
  twoPm: localStorage.getItem("twoPm", "twoPm.value"),
  threePm: localStorage.getItem("threePm", "threePm.value"),
  fourPm: localStorage.getItem("fourPm", "fourPm.value"),
  fivePm: localStorage.getItem("fivePm", "fivePm.value"),
>>>>>>> 215a28b327288c9fbce53514d77908d122ff53a1
};

//
//
for (var [key, value] of Object.entries(timeSlotTextarea)) {
<<<<<<< HEAD
	document.getElementById("nineAm").value = timeSlotTextarea.nineAm;
	document.getElementById("tenAm").value = timeSlotTextarea.tenAm;
	document.getElementById("elevenAm").value = timeSlotTextarea.elevenAm;
	document.getElementById("twelvePm").value = timeSlotTextarea.twelvePm;
	document.getElementById("onePm").value = timeSlotTextarea.onePm;
	document.getElementById("twoPm").value = timeSlotTextarea.twoPm;
	document.getElementById("threePm").value = timeSlotTextarea.threePm;
	document.getElementById("fourPm").value = timeSlotTextarea.fourPm;
	document.getElementById("fivePm").value = timeSlotTextarea.fivePm;
=======
  document.getElementById("nineAm").value = timeSlotTextarea.nineAm;
  document.getElementById("tenAm").value = timeSlotTextarea.tenAm;
  document.getElementById("elevenAm").value = timeSlotTextarea.elevenAm;
  document.getElementById("twelvePm").value = timeSlotTextarea.twelvePm;
  document.getElementById("onePm").value = timeSlotTextarea.onePm;
  document.getElementById("twoPm").value = timeSlotTextarea.twoPm;
  document.getElementById("threePm").value = timeSlotTextarea.threePm;
  document.getElementById("fourPm").value = timeSlotTextarea.fourPm;
  document.getElementById("fivePm").value = timeSlotTextarea.fivePm;
>>>>>>> 215a28b327288c9fbce53514d77908d122ff53a1
}

var m = moment().format("HH");
for (var i = 0; i < calenderTextarea.length; i++) {
<<<<<<< HEAD
	var currentTextAreaTime = calenderTextarea[i].getAttribute("value");
	if (currentTextAreaTime == m) {
		calenderTextarea[i].classList.add("present");
	} else if (currentTextAreaTime > m) {
		calenderTextarea[i].classList.add("future");
	} else currentTextAreaTime < m;
	{
		calenderTextarea[i].classList.add("past");
	}
=======
  var currentTextAreaTime = calenderTextarea[i].getAttribute("value");
  if (currentTextAreaTime == m) {
    calenderTextarea[i].classList.add("present");
  } else if (currentTextAreaTime > m) {
    calenderTextarea[i].classList.add("future");
  } else currentTextAreaTime < m;
  {
    calenderTextarea[i].classList.add("past");
  }
>>>>>>> 215a28b327288c9fbce53514d77908d122ff53a1
}

//this is the event listener for the save button on the row of 9am
document
<<<<<<< HEAD
	.getElementById("nineAmSaveBtn")
	.addEventListener("click", nineAmSaveBtnClick);

//on click this saves the value of nineAm to local storage
function nineAmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("nineAm", nineAm.value);
}

document
	.getElementById("tenAmSaveBtn")
	.addEventListener("click", tenAmSaveBtnClick);

function tenAmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("tenAm", tenAm.value);
}

document
	.getElementById("elevenAmSaveBtn")
	.addEventListener("click", elevenAmSaveBtnClick);

function elevenAmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("elevenAm", elevenAm.value);
}

document
	.getElementById("twelvePmSaveBtn")
	.addEventListener("click", twelvePmSaveBtnClick);

function twelvePmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("twelvePm", twelvePm.value);
}

document
	.getElementById("onePmSaveBtn")
	.addEventListener("click", onePmSaveBtnClick);

function onePmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("onePm", onePm.value);
}

document
	.getElementById("twoPmSaveBtn")
	.addEventListener("click", twoPmSaveBtnClick);

function twoPmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("twoPm", twoPm.value);
}

document
	.getElementById("threePmSaveBtn")
	.addEventListener("click", threePmSaveBtnClick);

function threePmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("threePm", threePm.value);
}

document
	.getElementById("fourPmSaveBtn")
	.addEventListener("click", fourPmSaveBtnClick);

function fourPmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("fourPm", fourPm.value);
}

document
	.getElementById("fivePmSaveBtn")
	.addEventListener("click", fivePmSaveBtnClick);

function fivePmSaveBtnClick(e) {
	e.preventDefault;
	localStorage.setItem("fivePm", fivePm.value);
=======
  .getElementById("nineAmSaveBtn")
  .addEventListener("click", nineAmSaveBtnClick);

//on click this saves the value of nineAm to local storage
function nineAmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("nineAm", nineAm.value);
}

document
  .getElementById("tenAmSaveBtn")
  .addEventListener("click", tenAmSaveBtnClick);

function tenAmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("tenAm", tenAm.value);
}

document
  .getElementById("elevenAmSaveBtn")
  .addEventListener("click", elevenAmSaveBtnClick);

function elevenAmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("elevenAm", elevenAm.value);
}

document
  .getElementById("twelvePmSaveBtn")
  .addEventListener("click", twelvePmSaveBtnClick);

function twelvePmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("twelvePm", twelvePm.value);
}

document
  .getElementById("onePmSaveBtn")
  .addEventListener("click", onePmSaveBtnClick);

function onePmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("onePm", onePm.value);
}

document
  .getElementById("twoPmSaveBtn")
  .addEventListener("click", twoPmSaveBtnClick);

function twoPmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("twoPm", twoPm.value);
}

document
  .getElementById("threePmSaveBtn")
  .addEventListener("click", threePmSaveBtnClick);

function threePmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("threePm", threePm.value);
}

document
  .getElementById("fourPmSaveBtn")
  .addEventListener("click", fourPmSaveBtnClick);

function fourPmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("fourPm", fourPm.value);
}

document
  .getElementById("fivePmSaveBtn")
  .addEventListener("click", fivePmSaveBtnClick);

function fivePmSaveBtnClick(e) {
  e.preventDefault;
  localStorage.setItem("fivePm", fivePm.value);
>>>>>>> 215a28b327288c9fbce53514d77908d122ff53a1
}
