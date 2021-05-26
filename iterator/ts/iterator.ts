export interface Iterator<T> {
    // Returns the current item
    current(): T;

    // Returns the current item and moves to the next item
    next(): T;

    // Returns the key of the current item
    key(): number;

    // Checks the correctness of the current position
    hasNext(): boolean;

    // Rewind the Iterator to the first item
    rewind(): void;
}