import { Observable } from 'rxjs';
import { IQuickPreview } from './IQuickPreview';


export interface IQuickPreviewManager {
  current$: Observable<IQuickPreview | null>;
  isShowing: boolean;
}