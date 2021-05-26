import {Aggregator} from "./aggregator";
import {CollectionIterator} from "./collectionIterator";
import {Iterator} from "./iterator";

/**
 * Concrete Collections provide one or more methods to get
 * new iterator instances compatible with the collection class.
 */
export class Collection implements Aggregator {

    private items: any[] = [];

    //Get all items
    public getItems(): any[] {
        return this.items;
    }

    //Get length
    public getCount(): number {
        return this.items.length;
    }

    //Add item to collection
    public addItem(item: any): void {
        this.items.push(item);
    }

    //Get iterator
    public getIterator(): Iterator<any> {
        return new CollectionIterator(this);
    }

}