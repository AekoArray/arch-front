/**
 * Iterator pattern
 *
 * Purpose: Allows you to sequentially bypass the elements of the composite
 * objects without revealing their internal representation.
 */

interface Iterator<T> {
    // Returns the current item.
    current(): T;

    // Returns the current item and moves to the next item.
    next(): T;

    // Returns the key of the current item.
    key(): number;

    // Checks the correctness of the current position.
    valid(): boolean;

    // Rewind the Iterator to the first item.
    rewind(): void;
}

interface Aggregator {
    // Get an external iterator.
    getIterator(): Iterator<any>;
}

/**
 * Concrete Iterators implement different traversal algorithms. These classes
 * permanently store the current bypass position.
 */

class CollectionIterator implements Iterator<any> {
    private collection: Collection;


     //Stores the current bypass position.
    private position: number = 0;

    constructor(collection: Collection) {
        this.collection = collection;
    }

    public rewind() {
        this.position = 0;
    }

    public current(): any {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): any {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public valid(): boolean {

        return this.position < this.collection.getCount();
    }
}

/**
 * Concrete Collections provide one or more methods to get
 * new iterator instances compatible with the collection class.
 */
class Collection implements Aggregator {
    private items: any[] = [];

    public getItems(): any[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: any): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<any> {
        return new CollectionIterator(this);
    }

}

const collection = new Collection();
collection.addItem(3);
collection.addItem('String');
collection.addItem([4, 6]);

const iterator = collection.getIterator();

while (iterator.valid()) {
    console.log(iterator.next());
}
