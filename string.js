function existInString(stringValue, search) {
    return stringValue.indexOf(search) !== - 1
}

let a = 'Green Apple'
console.log(a.startsWith("Green"))
console.log(a.endsWith("Apple"))

function reverseWord(str) {
    var reversed = ''

    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i)
    }

    return reversed
}

/* 
charAt(index) - Accesses a single character at index
substring(startIndex,endIndex) - Accesses part of string from startIndex to endIndex
str1 > str2 - Returns true if str1 is lexicographically bigger than str2
indexOf(str, startIndex) - Index of the desired str starting at startIndex
str.split(delimiter) - Breaks a string into an array with the specified delimiter
str.replace(original,new) - Replaces original with new
*/