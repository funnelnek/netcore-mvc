import { IEnumerable } from "../../../contracts";


export interface ISceneContext extends IEnumerable {
    title: string;
    route: string;
    styles: string[];
    scripts: string[];
    metadata: IEnumerable<string>;
    components: IEnumerable;
}