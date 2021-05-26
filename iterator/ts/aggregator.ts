import {Iterator} from "./iterator";

export interface Aggregator {
    // Get an external iterator.
    getIterator(): Iterator<any>;
}