import {IIterator} from "./IIterator";

export interface ICollection {

    //Вызов итератора
    getIterator(): IIterator<any>
    //Добавление элемента
    addItem(item): void
    //Получение всех элементов
    getItems(): any[]
    //Получение количества элементов
    getLength(): number
}
