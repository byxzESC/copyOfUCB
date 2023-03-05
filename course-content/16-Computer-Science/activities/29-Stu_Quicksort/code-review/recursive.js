function swap(array,i,j) {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// modified from https://gist.github.com/ttezel/3124434
var unsorted = [];
for (var index = 0, t = 10; index < t; index++) {
  unsorted.push(Math.round(Math.random() * t));
}

function quickSort(array, start, end) {
  // if first call then start and end are undefined
  if (start === undefined && end === undefined) {
    start = 0;
    end = array.length-1;
    // this function is non-destructive so we make a copy
    // of array since this algorithm is "in place"
    array = [...array];
  }

  // base case (terminating condition for recursive algorithms)
  if (end - start <= 1) {
    return;
  }

  let pivot = Math.floor(Math.random() * (end-start)) + start;

  for (let i = start, j = end; i < j;) {
    /* 
     * handle pivot so it migrates towards the center of 
     * the two partitions
     */
    if (i === pivot && i < end) {
      swap(array, i, i + 1);
      pivot = i + 1;
    }
    else if (j === pivot && j > start) {
      swap(array, j, j - 1);
      pivot = j - 1;
    }

    // if values on left/right are less/greater than pivot
    // then we can ignore them
    if (array[j] >= array[pivot]) {
      --j;
    }
    else if (array[i] < array[pivot]) {
      ++i;
    }
    // else if both are at the wrong end
    // then swap
    else {
        swap(array,i,j);
    }
  }


  quickSort(array,start,pivot-1);
  quickSort(array,pivot+1, end);
  



  return array;
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");


var unSortedArr = [99, 100, 20, 33, 1000, 2, 18, 13, 21, 25, 28];


// randomPivot = 25;

//loop through EVERYTHING less than pivot to the left / greater than pivot to the right  Big O(n);
//var left = [20, 2, 18, 13, 21,];
//var right =[99,100, 33,1000, 28];                                            //||  [2,13,18,20,21, 25, 28,33,99,100, 1000]
                                                                               //||
//               V                    V          V                            //||        ^        ^       ^ 
                                                                               //||
//quickSort([20, 2, 18, 13, 21,]).concat(25, quickSort([99,100, 33,1000, 28])) //||  [2,13,18,20,21] 25 [28,33,99,100, 1000]
                                                                               //||
                                                                               //||
//                 V                               V                           //||     ^        ^          ^         ^ 
                                                                               //||     ^        ^          ^         ^ 
 // randomPivot = 18;               //||   randomPivot = 99;                   //||     ^        ^          ^         ^ 
                                    //||                                       //||     ^        ^          ^         ^      
//var left = [2,13];                //||   var left = [33,28];                 //||     ^        ^          ^         ^    
//var right =[20,21];               //||   var right =[100,1000];              //||     ^        ^          ^         ^ 
                                                                               //||     ^        ^          ^         ^  
//    V   V   V                              V   V   V                         //||     ^        ^     | [28, 33] 99 [100, 1000]
                        //quickSort([33,28]).concat(99, quickSort([100,1000])) //||     ^        ^     |  
//                                                                             //||     ^        ^     |  
//quickSort([2,13]).concat(18, quickSort([20,21]))   V   V   V                 //||  [2, 13] 18 [20, 21] |
//           V                     V  


//quickSort([2]).concat(13, quickSort([])) //quickSort([28]).concat(33, quickSort([]))
//base case reached shortly. 


