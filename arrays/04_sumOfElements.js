function GetSumOfAllElements(arr){
    const length = arr.length;
    if(length === 0) return undefined;
    let sum = 0;
    for(let i=0; i<length; i++){
        sum += arr[i];
    }
    return sum
}

const arr = [2, 7, 1, 10 ,9, 5];

// second option
const getSumOfAllElements2= arr.reduce((sum , interate) =>  sum +=interate , 0)


const sumOfAllElement = GetSumOfAllElements(arr);
console.log(sumOfAllElement);
console.log(getSumOfAllElements2);