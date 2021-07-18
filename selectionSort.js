function selectionSort(items) {
    var len = items.length, min

    for (var i = 0; i < len; i++) {
        // set minimum to this position
        min = i
        // check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j
            }
        }
        // if the minimum isn`t the position, swap it
        if (i != min) {
            swap(items, i, min)
        }
    }

    return items
}

function swap(array, index1, index2) {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

// Time complexity: O(n^2)
// Space complexity: O(1)
