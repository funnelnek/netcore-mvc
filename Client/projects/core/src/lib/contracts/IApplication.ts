import { Administrator } from "../models/admin";
import { IApplicationState } from "../models/app/contracts/IApplicationState";
import { IProductCatalog } from "../models/product";
import { IShoppingCartState } from "../models/shopping-cart";
import { IStageContext } from "../models/stage";
import { IThemeContext } from "./ui/IThemeContext";
import { ISecurity } from '../security';


export interface IApplication {
  app: IApplicationState;
  security: ISecurity;
  admin: Administrator | null;
  theme: IThemeContext;
  stage: IStageContext;
  cart: IShoppingCartState | null;
  products: IProductCatalog | null;
}