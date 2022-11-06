import { ICollection } from "../../contracts";
import { IList } from "../../contracts/IList";
import { ISpecification } from "../../contracts/specifications/ISpecification";
import { ArrayOperator, Predicate, SortComparator } from "../../types";
import { GroupByFn } from "../../types/group-by-fn.type";
import { MapArrayOperator } from "../../types/map-array-operator.type";


export class List<T = any> implements IList<T> {
    [k: number]: T;

    constructor(collection: Iterable<T> = []) {
        let i: number = 0;

        for(let value of collection) {
            this[i] = value;
            i++;
        }
    }

    get length(): number {
        let keys = this.keys();
        let lastIndex = keys.at(-1);

        if (keys.length < 1 || lastIndex == undefined) {
            return 0;
        }

        return lastIndex + 1;
    }

    *next(index: number = -1): Generator<T> {
        let current: number = index;

        while(++current < this.length) {  
            current = (yield this.at(current) as T) as number;

            if (current === undefined) {
                current = ++index;
            }
        }
    }

    *prev(index: number = 0): Generator<T> {
        let current: number = index;

        while(Math.abs(--current) <= this.length) {
            current = (yield this.at(current) as T) as number;

            if (current === undefined) {
                current = --index;
            }
        }
    }

    toArray(): T[] {
        let array = [];
        
        for(let value of this) {
            array.push(value);
        }

        return array;
    }

    reverse(): List<T> {
        let keys = this.keys();

        for (let i = 0, j = keys.length - 1; i < Math.floor(keys.length / 2); i++, j--) {
            let v1 = this[keys[i]];
            let v2 = this[keys[j]];

            this[keys[i]] = v2;
            this[keys[j]] = v1;
        }   
        
        return this;
    }

    push(item: T): List<T> {
        this[this.length] = item;
        return this;
    }

    pop(): T | undefined {
        let item = this.last();
        
        if (item) {
            delete this[this.length - 1];
        }

        return item;
    }

    shift(): T | undefined {
        let item: T | undefined = this.first();
        let index: number;

        if (item) {
            index = this.indexOf(item);
            delete this[index];

            this.shiftLeft(index);            
        }

        return item;
    }

    first(): T | undefined {        
        return this.at(this.keys()[0]);
    }

    last(): T | undefined {        
        return this.at(-1);
    }

    indexOf(target: T): number {
        let index: number = -1;

        for(let [i, value] of this.entries()) {
            if (target === value) {
                index = i;
                break;
            }
        }

        return index;
    }

    clear(): void {
        for (let i of this.keys()) {
            delete this[i];
        }
    }

    at(index: number): T | undefined {
        if (index < 0) {
            return this[this.length + index];
        }

        return this[index];
    }

    concat(...collections: Iterable<T>[]): List<T> {
        for(let collection of collections) {
            for(let i of collection) {
                this.push(i);
            }
        }

        return this;
    }

    filter(predicate: Predicate<T> | ISpecification<T>): List<T> {
        let keys = this.keys();
        let collection = [];

        for(let i of keys) {
            if (typeof predicate === 'function') {
                if (predicate(this[i], i, this)) {
                    collection.push(this[i]);
                }
            }

            if ('isSatisfiedBy' in predicate) {
                if (predicate.isSatisfiedBy(this[i])) {
                    collection.push(this[i]);
                }
            }
        }

        return new List<T>(collection);
    }

    map<TResult = any>(fn: MapArrayOperator<T, TResult>): List<TResult> {
        let list = new List<TResult>();

        for(let [i, value] of this.entries()) {
            list.push(fn(value, i, this));
        }
        
        return list;
    }

    includes(item: T): boolean {
        let found = false;
        
        for (let value of this) {
            if (item === value) {
                found = true
                break;
            }
        }

        return found;
    }

    each(fn: ArrayOperator<T>): void {
        for(let i of this.keys()) {
            fn(this[i], i, this);
        }
    }

    entries(): Array<[number, T]> {
        let keys: number[] = this.keys();        
        return keys.map(i => [i, this[i]]);
    }

    
    remove(index: number): T | undefined {
        let element: T | undefined = this.at(index);

        if (element) {
            delete this[index];
            this.shiftLeft(index);
        }

        return element;
    }

    removeAll(predicate: Predicate<T>): List<T> {
        let list = new List<T>();
        let indexes: number[] = [];

        for (const i of this.keys()) {
            if (predicate(this[i])) {
                list.push(this[i]);
                indexes.push(i);
            }
        }

        for(let i = 0; i < indexes.length; i++) {
          let j = indexes[i];

          if (i === 0) {
            this.remove(j);
            continue;
          } 

          this.remove(j - 1);
        }

        return list;
    }

    unshift(item: T): List<T> {
        this.shiftRight();
        this[0] = item;

        return this;
    }

    slice(start: number, end: number = this.length): List<T> {
        let collection = [];
        let i = --start;

        for(let value of this.next(i)) {
            collection.push(value);
            
            if(++start == end) {
                break;
            }
        }

        return new List<T>(collection);
    }

    insert(item: T, index?: number): List<T> {
        if (index === undefined || index === this.length) {
            this.push(item);
            return this;
        }

        this.shiftRight(index);
        this[index] = item;
    
        return this;
    }

    find(predicate: Predicate<T>): List<T>;
    find(specification: ISpecification<T>): List<T>;
    find(specification: ISpecification<T> | Predicate<T>): List<T> {
        let found = [];

        for(let i of this.keys()) {
            if (typeof specification === 'function') {
                if (specification(this[i])) {
                    found.push(this[i]);
                }
            }

            if('isSatisfiedBy' in specification) {
                if (specification.isSatisfiedBy(this[i])) {
                    found.push(this[i]);
                }
            }
        }

        return new List<T>(found);
    }

    findOne(predicate: Predicate<T>): T | undefined;
    findOne(specification: ISpecification<T>): T | undefined;
    findOne(specification: ISpecification<T> | Predicate<T>): T | undefined {
        let found: T | undefined;

        for(let i of this.keys()) {
            if (typeof specification === 'function') {
                if (specification(this[i])) {
                    found = this[i];
                    break;
                }
            }

            if('isSatisfiedBy' in specification) {
                if (specification.isSatisfiedBy(this[i])) {
                    found = this[i];
                    break;
                }
            }
        }

        return found;
    }

    groupBy(by: GroupByFn<T>): List<T> {
        throw new Error("Method not implemented.");
    }

    sort(comparer: SortComparator<T>): List<T> {
        let keys = this.keys();

        for(let i = 0; i < keys.length; i++) {
            for(let j = 0; j < keys.length + -i; j++) {
                let a = this[keys[j]];
                let b = this[keys[j + 1]];
                let score = comparer(a, b);
    
                if (score === 0) {
                    continue;
                }
    
                if (score < 0) {
                    this[keys[j]] = a;
                    this[keys[j + 1]] = b;
                }
    
                if (score > 0) {
                    this[keys[j]] = b;
                    this[keys[j + 1]] = a;
                }
            }
        }

        return this;
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.next();
    }

    keys(): number[] {
        return Object.keys(this).filter(this.isIndexable).map(n => parseInt(n, 10));
    }

    values(): T[] {
        return this.keys().map(key => this[key]);
    }

    protected isIndexable(key: string): boolean {
        if (!isNaN(parseInt(key, 10))) {                
            return true;
        }

        return false;
    }

    protected shiftLeft(from: number = 0): void {
        for(let i = from; i < this.length; i++) {      
            this[i] = this[i + 1];
        }

        let last = this.keys().at(-1);

        if (last) {
            delete this[last];
        }
    }

    protected shiftRight(to: number = 0) {
        for(let i = this.length - 1; i >= to; i--) {
            this[i + 1] = this[i];            
        }      
    }
}