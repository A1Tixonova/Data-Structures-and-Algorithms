function buildBadMatchTable(str) {
    var tableObj = {},
        strLength = str.length
    
    for (var i = 0; i < strLength - 1; i++) {
        tableObj[str[i]] = strLength - 1 - i
    }

    if (tableObj[str[strLength - 1]] == undefined) {
        tableObj[str[strLength - 1]] = strLength
    }
    return tableObj
}

function boyerMoore(str, pattern) {
    var badMatchTable = buildBadMatchTable(pattern),
        offset = 0,
        patternLastIndex = patternq.length - 1,
        scanIndex = patternLastIndex,
        maxOffset = str.length - pattern.length

    // if the offset is bigger than maxOffset, cannot be found
    while (offset <= maxOffset) {
        scanIndex = 0
        while (pattern[scanIndex] == str[scanIndex + offset]) {
            if (scanIndex == patternLastIndex) {
                // found at this index
                return offset
            }
            scanIndex++
        }
        var badMatchString = str[offset + patternLastIndex]
        if (badMatchTable[badMatchString]) {
            // increase the offset if it exists
            offset += badMatchTable[badMatchString]
        } else {
            offset += 1
        }
        
    }
    return -1
}

console.log(boyerMoore('jellyjam','jam'))