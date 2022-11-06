import { IPaneContext } from "./IPaneContext";


export interface IPane extends IPaneContext {
    close(): void;
    expand(): void;
    minimize(): void;
}