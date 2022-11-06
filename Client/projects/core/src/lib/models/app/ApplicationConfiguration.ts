import { Enumerable } from '../../contracts';
import { IApplicationConfiguration } from './contracts';

export class ApplicationConfiguration extends Enumerable implements IApplicationConfiguration {
    constructor() {
        super();
    }
}