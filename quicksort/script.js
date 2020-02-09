/* 
  This code was made based on "Coding Challenge #143: Quicksort Visualization"
  https://www.youtube.com/watch?v=eqo2LxRADhU
*/

let w = 2;
let list;
let pivots = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function swap(arr, i, j) {
  await sleep(10)
  let aux = arr[j];
  arr[j] = arr[i];
  arr[i] = aux;
}

async function partition(arr, start, end) {

  for (let i = start; i < end; i++) {
    pivots[i] = 1;
  }

  let pivotIndex = start;
  let pivotValue = arr[end];
  pivots[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivots[pivotIndex] = -1;
      pivotIndex++;
      pivots[pivotIndex] = -0;
    }
  }
  await swap(arr, pivotIndex, end);
  for (let i = start; i < end; i++) {
      pivots[i] = -1;
  }
  return (pivotIndex);
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  pivots[index] = -1;
  await Promise.all([quickSort(arr, start, index - 1), quickSort(arr, index + 1, end)]);
}

function setup() {
  createCanvas(1000, 400);
  list = new Array(floor(width / w));
  for (let i = 0; i < list.length; i++) {
    list[i] = floor(random(height));
    pivots[i] = -1;
  }
  frameRate(60);
  quickSort(list, 0, list.length);
}


function draw() {

  background(0);

  for (let i = 0; i < list.length; i++) {
    noStroke();
    if (pivots[i] === 0) {
      fill(255, 0, 0);
    } else if (pivots[i] == 1) {
        fill(100, 255, 100);
    } else {
        fill(255);
    }
      rect(i * w, height - list[i], w, list[i]);
  }

}
