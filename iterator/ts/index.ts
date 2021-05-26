import {Collection} from "./collection";

/**
 * Iterator pattern
 *
 * Purpose: Allows you to sequentially bypass the elements of the composite
 * objects without revealing their internal representation.
 */

const collection = new Collection();
collection.addItem(3);
collection.addItem('String');
collection.addItem([4, 6]);

const iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
