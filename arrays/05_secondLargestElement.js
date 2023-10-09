function GetSecondLargestElement(arr){
    const length = arr.length;
    if(length < 2 ) return undefined ;
    let large  = arr[0] ;
    let secondlarge = -Infinity ;

    for(let i=1; i < length ; i++){
        if(arr[i] > large){
            secondlarge = large ;
            large = arr[i]
        }
        else if(arr[i] > secondlarge && arr[i] !== large){
            secondlarge = arr[i]
        }
    }

    if(secondlarge === -Infinity) return undefined;
    return secondlarge;
}


const arr = [2, 7, 1, 9, 5 , 14 ,15];
const SecondLargestElement = GetSecondLargestElement(arr);
console.log(SecondLargestElement)