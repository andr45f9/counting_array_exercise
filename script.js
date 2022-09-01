"use strict";

let array = []; //we make an empthy array so we can make it count from 0.
let counting = 0; //making the array count from 0.

document.addEventListener("DOMContentLoaded", countingArray);

function countingArray() {
  counting = array.length; //We add lenght to the array so it knows there will be more than 0 to count.
  array.unshift(counting++); //unshift makes sure that the new number gets added at the start of the array. ++ tells counting to add a new number after the other.

  console.log(array.slice(0, 9)); //we console.log the array with slice to make sure the array wont count/show more that 9 items. So the array should show from index 0 up until before index 9.s

  setTimeout(countingArray, 1000); //set a timeout before looping againg.
}
