import { ISceneContext } from "../../scene";
import { INavigation } from "../../navigation";
import { IStageLoader } from "./IStageLoader";


export interface IStageContext {
    scene: ISceneContext;    
    navigation: INavigation;
    loader: IStageLoader;
}