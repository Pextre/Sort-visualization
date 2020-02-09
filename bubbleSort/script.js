let list = [];
let current = []
let w = 5;
function swap(arr, i, j) {
  let aux = arr[j];
  arr[j] = arr[i];
  arr[i] = aux;
}

function setup() {

  createCanvas(400, 400);
  list = new Array(floor(width/w));
  for(let i = 0; i < list.length;i++){
    list[i] = random(height);
  } 
  frameRate(5);
  console.log(list.length);

}



function draw() {

  background(0);

  for (let i = 0; i <= list.length; i++) {
    bubbleSort(list);
    stroke(0);
    fill(255);
    rect(i*w,height-list[i],w,list[i]);


  }


}
