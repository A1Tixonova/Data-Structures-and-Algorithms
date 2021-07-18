function Queue(array) {
    this.array = []
    if (array) this.array = array
}

Queue.prototype.getBuffer = function() {
    return this.array.slice()
}