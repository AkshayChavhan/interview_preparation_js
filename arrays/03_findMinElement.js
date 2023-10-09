function FindMinElement(arr) {
    const length = arr.length;
    if(length ===0) return undefined;
    let minElem = arr[0];
    for(let i=1 ; i< length ; i++){
        if (minElem > arr[i]){
            minElem = arr[i];
        }
    }
    return minElem;
}


const arr = [2, 0, 1, 9, 5]

const min_element = FindMinElement(arr);

console.log("min_element==> ", min_element);