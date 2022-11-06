import { IEnumerable } from "./IEnumerable";


export abstract class Enumerable<T = any> implements IEnumerable<T> {
    [k: string]: T;
    *[Symbol.iterator](): Generator<string> {
        let keys = Object.keys(this);       
        
        for (let key of keys) {
            yield key;
        }
    }
}