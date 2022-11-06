import { ApplicationConfiguration, IApplicationState } from "@client/core";


export const ApplicationInitialState: IApplicationState = {
  name: "SkiNet",
  version: "1.0.0",
  config: new ApplicationConfiguration()
};