import {CollectionImpl} from "./CollectionImpl";

const collection = new CollectionImpl();
//Добавление элементов в коллекцию
collection.addItem(1);
collection.addItem('Two');
collection.addItem(true);
collection.addItem([4, 5]);

const iterator = collection.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.getNext());
}
