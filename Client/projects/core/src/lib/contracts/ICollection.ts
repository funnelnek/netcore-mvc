import { ArrayOperator, Predicate } from "../types";
import { GroupByFn } from "../types/group-by-fn.type";
import { MapArrayOperator } from "../types/map-array-operator.type";
import { ISortable } from "./ISortable";
import { ISpecification } from "./specifications/ISpecification";


export interface ICollection<T = any> extends ISortable<T>, Iterable<T> {    
    readonly length: number;    
    first(): T | undefined;
    last(): T | undefined;    
    concat(...collection: ICollection<T>[]): ICollection<T>;
    each(fn: ArrayOperator<T>): void;
    entries(): Array<[number, T]>;
    remove(index: number): T | undefined;    
    removeAll(predicate: Predicate<T>): ICollection<T>;
    find(predicate: Predicate<T>): ICollection<T>;
    find(specification: ISpecification<T>): ICollection<T>;
    findOne(predicate: Predicate<T>): T | undefined;
    findOne(specification: ISpecification<T>): T | undefined;    
    groupBy(by: GroupByFn<T>): ICollection<T>;
    keys(): number[];
    values(): T[];
    indexOf(target: T): number;
    clear(): void;
    reverse(): ICollection<T>;
    push(item: T): ICollection<T>;
    pop(): T | undefined;
    unshift(item: T): ICollection<T>;
    shift(): T | undefined;
    toArray(): T[];
    insert(item: T, index: number): ICollection<T>;
    slice(start: number, end: number): ICollection<T>;
    filter(predicate: Predicate<T>): ICollection<T>;
    includes(item: T): boolean;
    map<TResult = any>(fn: MapArrayOperator<T, TResult>): ICollection<TResult>;
}