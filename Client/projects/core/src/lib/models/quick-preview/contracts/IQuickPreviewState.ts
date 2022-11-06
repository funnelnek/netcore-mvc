import { IQuickPreview } from "./IQuickPreview";


export interface IQuickPreviewState {
  current: IQuickPreview | null;
  isShowing: boolean;
}