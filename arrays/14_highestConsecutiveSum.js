function maxSubarraySum (arr) {
    const length = arr.length;
    if(length === 0 ) return undefined;
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for(let i=1 ; i< length ; i++){
        currentSum = Math.max(arr[i] , currentSum + arr[i]);
        maxSum = Math.max(maxSum , currentSum)
    }
    return maxSum;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(numbers);
console.log("Maximum subarray sum:", maxSum);