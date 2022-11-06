import { IApplicationConfiguration } from "./IApplicationConfiguration";


export interface IApplicationState {
  name: string;
  version: string;
  config: IApplicationConfiguration
}