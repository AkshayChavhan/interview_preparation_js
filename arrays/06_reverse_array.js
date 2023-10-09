function GetReversedArray(arr) {
    const length = arr.length;
    if(length === 0 ) return undefined;
    const trashArray = [];
    for(let i=0; i< length ; i++){
        trashArray.unshift(arr[i])
    }
    return trashArray
}


// secondmethod
function GetReversedArray2(arr) {
    const length = arr.length;
    if(length === 0 ) return undefined;
    const trashArray = [];
    for(let i=length-1; i>=0 ; i--){
        trashArray.push(arr[i])
    }
    return trashArray
}

const arr = [2, 7, 1, 9, 5];

const reverseArray = GetReversedArray(arr);
const reverseArray2 = GetReversedArray2(arr);
// console.log(reverseArray)
console.log(reverseArray2)



