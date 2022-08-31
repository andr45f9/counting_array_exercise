"use strict";

let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let counting = 0;

document.addEventListener("DOMContentLoaded", countingArray);

function countingArray() {
  counting++;

  if (counting < array.length) {
    setTimeout(countingArray, 1000);
  } else {
    finish();
  }

  /* console.log(counting); */
  console.log(array);
}

function finish() {
  console.log("Yay! We did it!!!");
}
