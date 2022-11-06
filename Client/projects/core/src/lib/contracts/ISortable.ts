import { SortComparator } from "../types";
import { ICollection } from "./ICollection";


export interface ISortable<T> {
    sort(comparer: SortComparator<T>): ICollection<T>;
}