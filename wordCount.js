function wordCount(sentence) {
    // period with nothing so it doesn`t count as word
    var wordsArray = sentence.replace(/[.]/g,"").split(' '),
        occurenceList = {}, answerList = {}

    for (var i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
        var currentWord = wordsArray[i]
        // doesn`t exist, set as 1st occurrence
        if (!occurenceList[currentWord]) {
            occurenceList[currentWord] = 1
        } else {
            occurenceList[currentWord]++ // add occurrences
        }
    }

    var arrayTemp = []
    // push the value and key as fixed array
    for (var prop in occurenceList) {
        arrayTemp.push([occurenceList[prop],prop])
    }

    function sortcomp(a,b) {
        return b[0] - a[0] // compare the first element of the array
    }

    arrayTemp.sort(sortcomp) // sort

    for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
        var current = arrayTemp[i]
        answerList[current[1]] = current[0] // key value pairs
    }
    return answerList
}

// Time Complexity: O(nlog(n))
// Space Complexity: O(n)