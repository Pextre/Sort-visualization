
let bubbleI=0;
let bubbleJ=0;
let bubbleSorted = false;
function bubbleSort(list) {
    if(bubbleI< list.length){

        if(bubbleJ >= list.length){
            bubbleJ = 0;
            bubbleI++;
        }
        
        if(list[bubbleJ]>list[bubbleJ+1]){
            swap(list,bubbleJ ,bubbleJ+1);
        }
        bubbleJ++;
    }else{
        bubbleSorted = true;
    }
   
    
}
