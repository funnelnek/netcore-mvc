import { ICollection } from "./ICollection";
import { Indexable } from "./Indexable";


export interface IList<T = any> extends ICollection<T>, Indexable<T> {    
    at(index: number): T | undefined;
    next(index?: number): Iterator<T>;
    prev(index?: number): Iterator<T>;    
}