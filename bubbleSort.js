function swap(array, index1, index2) {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

function bubbleSort(array) {
    for (var i =  0, arrayLength = array.length; i < arrayLength;i++) {
        for (var j = 0; j <= i; i++) {
            if (array[i] < array[j]) {
                swap(array, i, j)
            }
        }
    }
    return array
}

// Time complexity: O(n^2)
// Space complexity: O(1)