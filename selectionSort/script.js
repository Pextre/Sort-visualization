let list = [];
let w = 3;
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
  frameRate(20);

}

function mousePressed() {

}

function draw() {

  background(0);

  for (let i = 0; i <= list.length; i++) {
    if(!selectionSorted){
      selectionSort(list);
    }
    if( i === smaller || i === selectionI){
      fill(255,0,0);
    }else{
      fill(255);
    }
    
    stroke(0);
    
    rect(i*w,height-list[i],w,list[i]);



  }


}
