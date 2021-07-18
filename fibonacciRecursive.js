function getNthFibo(n) {
    if (n <= 1) {
        return n
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2)
    }
    
}

function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast
    }    
    if (n == 1) {
        return last
    }
    return getNthFiboBetter(n-1, last, lastlast + last)

}

// Time complexity: O(n)
// Space complexity: O(n)