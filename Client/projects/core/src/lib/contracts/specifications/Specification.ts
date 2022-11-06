import { ISpecification } from "./";


export abstract class Specification<T> implements ISpecification<T> {    
    constructor() {
        this.isSatisfiedBy = this.isSatisfiedBy.bind(this);
    }

    abstract isSatisfiedBy(target: T): boolean;

    or(specification: ISpecification<T>): Specification<T> {
        return new OrSpecification<T>(this, specification);
    }

    and(specification: ISpecification<T>): Specification<T> {
        return new AndSpecification<T>(this, specification);
    }

    not(): Specification<T> {
        return new NotSpecification<T>(this);
    }
}


export abstract class CompositeSpecification<T> extends Specification<T> {
    constructor(protected left: ISpecification<T>, protected right: ISpecification<T>) {
        super();
    }
}


export class AndSpecification<T> extends CompositeSpecification<T> {
    constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super(left, right);
    }

    isSatisfiedBy(target: T): boolean {
        return this.left.isSatisfiedBy(target) && this.right.isSatisfiedBy(target);
    }
}


export class OrSpecification<T> extends CompositeSpecification<T> {
    constructor(left: ISpecification<T>, right: ISpecification<T>) {
        super(left, right);
    }

    isSatisfiedBy(target: T): boolean {
        return this.left.isSatisfiedBy(target) || this.right.isSatisfiedBy(target);
    }
}


export class NotSpecification<T> extends Specification<T> {
    constructor(protected specification: ISpecification<T>) {  
        super();
    }

    isSatisfiedBy(target: T): boolean {
        return !this.specification.isSatisfiedBy(target);
    }
}