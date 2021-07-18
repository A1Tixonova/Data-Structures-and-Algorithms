function linear_search(list,target) {
    /*Returns the index of the target if found,
    else returns None */

    for (let i = 0; i < list.length;i++) {
        if (list[i] === target) {
            return i
        }
    } 
    return NaN
}

function verify(index) {
    if (index != 'NaN')
        console.log(`Target found at index ${index}`)
    else 
        console.log('Target not found in list')
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

let res = linear_search(numbers,6)
console.log(verify(res))

// Time complexity: O(n)