import { Specification } from "../contracts";
import { IterableContains } from "../types/iterable-contains.type";


export class In<T> extends Specification<T> {
    constructor(protected collection: IterableContains<T>) {
        super();
    }
    
    isSatisfiedBy(target: T): boolean {
        return this.collection.contains(target);
    }
}