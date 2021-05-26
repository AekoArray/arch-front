import {Collection} from "./collection";
import {Iterator} from "./iterator";
/**
 * Concrete Iterators implement different traversal algorithms. These classes
 * permanently store the current bypass position.
 */

export class CollectionIterator implements Iterator<any> {
    private collection: Collection;


    //Stores the current bypass position
    private position: number = 0;

    constructor(collection: Collection) {
        this.collection = collection;
    }

    //Updates the position
    public rewind() {
        this.position = 0;
    }

    //Return current position
    public current(): any {
        return this.collection.getItems()[this.position];
    }

    //Return key of position
    public key(): number {
        return this.position;
    }

    //Return next item
    public next(): any {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    //Check for next item
    public hasNext(): boolean {

        return this.position < this.collection.getCount();
    }
}