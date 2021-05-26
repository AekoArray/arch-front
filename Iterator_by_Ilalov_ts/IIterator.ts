export interface IIterator<T> {
    //Получить текущий элемент и перейти к следующему
    getNext(): T;
    //Проверить наличие следующего элемента
    hasNext(): boolean;
}
