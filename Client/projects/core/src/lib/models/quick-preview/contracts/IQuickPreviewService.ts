import { Observable } from 'rxjs';
import { IQuickPreview } from '@client/core';


export interface IQuickPreviewService {
  isShowing$: Observable<boolean>;
  currentPreview$: Observable<IQuickPreview | null>;
  close(): Promise<void>;
  preview(target: IQuickPreview): Promise<void>;
}