import {ICollection} from "./ICollection";
import {IIterator} from "./IIterator";
import {IteratorImpl} from "./IteratorImpl";

//Реализация коллекции
export class CollectionImpl implements ICollection{
    private items: any[] = [];

    public getIterator(): IIterator<any> {
        return new IteratorImpl(this);
    }

    public addItem(item: any): void {
        this.items.push(item);
    }

    public getItems(): any[] {
        return this.items;
    }

    public getLength(): number {
        return this.items.length;
    }
}
