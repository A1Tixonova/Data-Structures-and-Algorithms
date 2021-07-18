function quickSelectInPlace(A, l, h, k) {
    var p = partition(A, l, h)
    if (p == (k-1)) {
        return A[p]
    } else if (p > (k-1)) {
        return quickSelectInPlace(A, l, p - 1,k)
    } else {
        return quickSelectInPlace(A, p + 1, h, k)
    }
}

function medianQuickSelect(array) {
    return quickSelectInPlace(array, 0, array.length - 1, Math.
        floor(array.length / 2))
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)]
    while (left <= right) {
        while (pivot > array[left]) {
            left++
        }
        while (pivot < array[right]) {
            right--
        }
        if (left <= right) {
            var temp = array[left]
            array[left] = array[right]
            array[right] = temp
            left++
            right--
        }
    }
    return left
}

// Time complexity: O(n)