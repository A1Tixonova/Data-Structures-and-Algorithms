function HashTable(size) {
    this.size = size
    this.keys = this.initArray(size)
    this.values = this.initArray(size)
    this.limit = 0
}

HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key)

    // Linear probing

    while (this.keys[hashedIndex] != null) {
        hashedIndex += Math.pow(squareIndex, 2)
        squareIndex++
    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

 HashTable.prototype.get = function (key) {
     var hashedIndex = this.hash(key)
     var squareIndex = 1;
    
     while ( this.keys[hashedIndex] != key ) {
        hashedIndex += Math.pow(squareIndex, 2);        
        hashedIndex = hashedIndex % this.size;
        squareIndex++;
     }
     return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    // Check if int
    if (!Number.isInteger(key)) throw 'must be int'
        return key % this.size
}

HashTable.prototype.initArray = function(size) {
    var array = []
    for (var i = 0; i < size; i++) {
        array.push(null)
    }
    return array
}

var exampletable = new HashTable(13)
exampletable.put(7,'qwe')
exampletable.put(20,'qwasd')
exampletable.put(3,'acvvv')
