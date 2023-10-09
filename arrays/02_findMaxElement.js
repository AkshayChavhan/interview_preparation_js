function FindMaxElement(arr){
    console.log(arr);
    let length = arr.length;
    if( length === 0) return undefined;
    let maxElement = arr[0];
    for(let i=1 ; i<length ;i++){
        if(arr[i] > maxElement){
            maxElement = arr[i];
        }
    }
    return maxElement;
}


const arr = [2, 7, 1, 9, 5]
const max_element = FindMaxElement(arr);

console.log("max_element==> ", max_element);