function GetFindIntersectionElement(arr1, arr2) {
    const interestArray = [];
    const length = arr1.length;
    if(!length && !arr2.length) return undefined;

    for(let i = 0 ; i < length ; i++){
        if(arr2.includes(arr1[i]) && !interestArray.includes(arr1[i])){
            interestArray.push(arr1[i]);
        }
    }

    return interestArray;
}


const array1 = [2, 7, 1, 9, 5 ,9];
const array2 = [5, 9, 3, 8];

const findIntersectionElement = GetFindIntersectionElement(array1, array2);
console.log(findIntersectionElement);