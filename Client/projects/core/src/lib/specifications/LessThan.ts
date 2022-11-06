import { Specification } from "../contracts";


export class LessThan extends Specification<number> {
    constructor(protected number: number) {
        super()
    }
    
    isSatisfiedBy(target: number): boolean {
        return target < this.number;
    }
}