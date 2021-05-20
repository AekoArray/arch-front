// Iterator
class Iterator {
    constructor(data) {
        this.data = data.values();
    }

    //get next item from the collection
    getNext() {
            return this.data.next().value;
    }
}
