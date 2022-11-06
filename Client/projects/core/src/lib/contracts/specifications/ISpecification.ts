export interface ISpecification<T> {
    isSatisfiedBy(target: T): boolean;
}