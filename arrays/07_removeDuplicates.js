function GetRemovedDuplicatedArray(arr){
    const length = arr.length;
    if(length === 0) return undefined;
    let newArr =  new Set([...arr]);
    return [...newArr]
}

const arr = [2, 7, 1, 9, 5, 2, 7 , 7 , 10];

const removeDuplicatedElements = GetRemovedDuplicatedArray(arr);
// console.log(removeDuplicatedElements);

function GetRemovedDuplicatedArray2(arr){
    const length = arr.length;
    if(length === 0) return undefined;
    let uniqueArray =  [];

    for (let i=0 ; i<length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray
}
// second approach
const removeDuplicatedElements2 = GetRemovedDuplicatedArray2(arr);
console.log(removeDuplicatedElements2);


