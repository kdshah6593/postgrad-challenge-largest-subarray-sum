let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(arr){
    let j = 1;
    let currentSum = arr[0]
    let maxSum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] >= 0) {
            currentSum += arr[i]
            if (currentSum >= maxSum) {
                maxSum = currentSum
            }
        } else {
            currentSum = arr[j]
            i = j
            j += 1
        }
    }
    return maxSum
}

console.log(largestSubarraySum(array))
// 16