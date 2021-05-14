// Iterator
class Iterator {
    constructor(data) {
        this.data = data;
        this.index = 0;
    }

    //get the first item from the collection
    getFirst() {
        return this.data.get(this.index);
    }

    //get next item from the collection
    getNext() {
        if (this.hasNext()) {
            this.index++;
            return this.data.get(this.index);
        }
    }

    //check if there is a next element
    hasNext() {
        return this.data.has(this.index + 1)
    }

    //get the elements whose values are numbers
    getNumbers() {
        for (let [key, value] of this.data.entries()) {
            if (!Number.isInteger(value)) {
                this.data.delete(key);
            }
        }
        return this.data;
    }

    //returns a pointer to the first element
    reset() {
        this.index = 0;
    }

}
