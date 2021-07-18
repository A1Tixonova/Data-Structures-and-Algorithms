function Matrix(rows, columns) {
    var jaggedArray = new Array(rows)
    for (var i = 0; i < columns; i += 1) {
        jaggedArray[i] = new Array(rows)
    }
    return jaggedArray
}