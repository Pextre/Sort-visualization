
let selectionI=0;
let selectionJ=1;
let selectionSorted = false;
let smaller;
function selectionSort(list) {
    if(selectionI< list.length){
        if(selectionI === 0 && selectionJ === 0){
            smaller = selectionI;
        }
        
        if(selectionJ >= list.length ){
            swap(list , selectionI , smaller);
            selectionI++;
            smaller = selectionI;
            selectionJ = selectionI+1;
            
        }

        if(list[selectionJ] < list[smaller]){
            smaller = selectionJ;
        }
        selectionJ++
        
    }else{
        selectionSorted  = true;
    }
   
    
}
