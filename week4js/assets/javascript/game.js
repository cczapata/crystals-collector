
//alert("connected");


//=================Class notes======
//4 images--1-12
//target--19-120
//-------------
//start-generate target
//generate-crystal values
//accumalator-store value of crystals until hit target or exceed target
//win-accumalator =target
//if win, increment wins
//if lose, increment losses


var target;
var target = function(){
  var a =Math.floor((Math.random() * 120) + 19);
  return a;
}

var crystal0 = function(){
  var crystal0 =Math.floor((Math.random() * 12) + 1);
  return b;
}
var crystal1 = function(){
  var crystal1 =Math.floor((Math.random() * 12) + 1);
  return b;
}
var crystal2 = function(){
  var crystal1 =Math.floor((Math.random() * 12) + 1);
  return c;
}
var crystal3 = function(){
  var crystal1 =Math.floor((Math.random() * 12) + 1);
  return d;
}

$('#target').text(target());
$('#crystal0').text(target());
$('#crystal1').text(target());
$('#crystal2').text(target());
$('#crystal3').text(target());
// var wins;
// var losses;
// var totalScore;
//
// function mybutton() {
// var  button = document.createElement("button");
// var t =document.createText("crystal1");
// button.body.appendChild(button);
// };
