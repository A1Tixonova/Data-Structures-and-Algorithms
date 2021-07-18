function findOnlyOnce(arr, low, high) {
    if (low > high) {
        return null
    }
    if (low == high) {
        return arr[low]
    }

    var mid = Math.floor((high + low)/2)

    if (mid % 2 == 0) {
        if (arr[mid] == arr[mid + 1]) {
            return findOnlyOnce(arr, mid+2, high)
        } else {
            return findOnlyOnce(arr, low, mid)
        }
    } else {
        if (arr[mid] == arr[mid - 1]) {
            return findOnlyOnce(arr, mid+1, high)
        } else {
            return findOnlyOnce(arr, low, mid-1)
        }
    }
}

function findOnlyOnceHelper(arr) {
    return findOnlyOnce(arr,0,arr.length)
}

// Time complexity: O(log2n)
// Space complexity: O(1)