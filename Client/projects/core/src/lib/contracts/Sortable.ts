import { SortComparator } from "../types";
import { ICollection } from "./ICollection";

export interface Sortable<T> {
    (by: SortComparator<T>): ICollection<T>;
}