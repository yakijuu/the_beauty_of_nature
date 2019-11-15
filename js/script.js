
function myFunction() {
  setTimeout("i()", 1000);
}

function i(){
  var elm = document.getElementById("di");
  elm.classList.remove("divi-hide");
  elm.classList.add("divi-in");
  setTimeout("a()", 1000);
}

function a(){
  var elm = document.getElementById("d1");
  elm.classList.remove("div1-hide");
  elm.classList.add("div1-in");
  setTimeout("c()", 1000);
}

function b(){
  var elm = document.getElementById("d2");
  elm.classList.remove("div2-hide");
  elm.classList.add("div2-in");
  setTimeout("d()", 1000);
}

function c(){
  var elm = document.getElementById("d3");
  elm.classList.remove("div3-hide");
  elm.classList.add("div3-in");
  setTimeout("b()", 1000);
}

function d(){
  var elm = document.getElementById("d4");
  elm.classList.remove("div4-hide");
  elm.classList.add("div4-in");
  setTimeout("aa()", 3000);
  setTimeout("bb()", 3000);
  setTimeout("cc()", 3000);
  setTimeout("dd()", 3000);
  setTimeout("ii()", 3000);
}

function ii(){
  var elm = document.getElementById("di");
  elm.classList.remove("divi-in");
  elm.classList.add("divi-out");
}

function aa(){
  var elm = document.getElementById("d1");
  elm.classList.remove("div1-in");
  elm.classList.add("div1-out");
}

function bb(){
  var elm = document.getElementById("d2");
  elm.classList.remove("div2-in");
  elm.classList.add("div2-out");
}

function cc(){
  var elm = document.getElementById("d3");
  elm.classList.remove("div3-in");
  elm.classList.add("div3-out");
}

function dd(){
  var elm = document.getElementById("d4");
  elm.classList.remove("div4-in");
  elm.classList.add("div4-out");
  setTimeout("reload()", 3000);
}

function reload() {
  location.reload();
}