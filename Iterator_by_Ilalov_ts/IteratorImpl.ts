import {IIterator} from "./IIterator";
import {ICollection} from "./ICollection";

//Реализация итератора
export class IteratorImpl implements IIterator<any> {
    private collection: ICollection;
    private index: number = 0;

    constructor(collection: ICollection) {
        this.collection = collection;
    }

    public getNext(): any {
        return this.collection.getItems()[this.index++];
    }

    public hasNext(): boolean {
        return this.index < this.collection.getLength();
    }
}
