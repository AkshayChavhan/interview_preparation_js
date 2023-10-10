function findMaxWithSmallerNeighbors(arr=[]){
    const length = arr.length;
    if(length === 0) return undefined ;
    let maxElement = arr[0];

    for(let i = 1; i < length ; i++){
        if((arr[i-1] < arr[i]) && (arr[i+1] < arr[i])){
            maxElement = Math.max(arr[i] , maxElement);
        }
    }
    return maxElement;
}

const numbers = [1, 3, 2, 5, 4];
const maxElement = findMaxWithSmallerNeighbors(numbers);
console.log("Maximum element with smaller neighbors:", maxElement);


