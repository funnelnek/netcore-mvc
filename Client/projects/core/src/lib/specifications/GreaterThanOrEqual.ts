import { Specification } from "../contracts/specifications";


export class GreaterThanOrEqual extends Specification<number> {
    constructor(protected number: number) {
        super();
    }

    isSatisfiedBy(target: number): boolean {
        return target >= this.number;
    }
}