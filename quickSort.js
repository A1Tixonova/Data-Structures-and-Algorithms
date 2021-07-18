function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1)
}

function quickSortHelper(items, left, right) {
    var index
    if (items.length > 1) {
        index = partition(items, left, right)       
        if (left < index - 1) {
            quickSortHelper(items, left, index - 1)
        }
        if (index < right) {
            quickSortHelper(items, index, right)
        }
    }
    return items
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

// Time complexity: O(nlog2(n)) on average, O(n^2) for worst case
// Space complexity: O(log2(n))