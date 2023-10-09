function GetNewPositionedArray(arr, position) {
    const length = arr.length;
    const positionedArray=[];
    let newPosition;
    for (let i=0; i<arr.length; i++){
        positionedArray[(i+position)%length] = arr[i];
        console.log(newPosition)
    }
    return positionedArray ;
}


const arr = [1, 2, 3, 4, 5];
const positionsToRotate = 1;

const newArray = GetNewPositionedArray(arr, positionsToRotate);
console.log(newArray);

