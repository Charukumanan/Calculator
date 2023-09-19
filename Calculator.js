`use strict`;

//Global Variable
//let Registeredcustomers = [];

//Block level variable
function Add() 
{
    console.log(`Function Add called`);
    var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("number1").value);
  numTwo = parseInt(document.getElementById("number2").value);
  sum = numOne + numTwo;
  document.getElementById("Result").value = sum;
}
function Sub() 
{
    console.log(`Function Sub called`);
    var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("number1").value);
  numTwo = parseInt(document.getElementById("number2").value);
  sum = numOne - numTwo;
  document.getElementById("Result").value = sum;
}
function Multiply() 
{
    console.log(`Function Multiply called`);
    var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("number1").value);
  numTwo = parseInt(document.getElementById("number2").value);
  sum = numOne * numTwo;
  document.getElementById("Result").value = sum;
}
function Divide() 
{
    console.log(`Function Divide called`);
    var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("number1").value);
  numTwo = parseInt(document.getElementById("number2").value);
  sum = numOne / numTwo;
  document.getElementById("Result").value = sum;
}


