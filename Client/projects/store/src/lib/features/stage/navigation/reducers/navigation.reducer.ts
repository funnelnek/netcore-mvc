import { ActionReducer, createReducer } from '@ngrx/store';
import { ActionPayload } from '../../../../contracts';
import { NavigationInitialState } from '../navigation.state';
import { Navigation } from '../types/navigation.type';
import { NavigationActionHandler } from './navigation.handler';


export const NavigationStoreReducer = (): ActionReducer<Navigation, ActionPayload> => {
    const handler = new NavigationActionHandler();

    const NavigationStore = createReducer(
        NavigationInitialState
    );

    return NavigationStore;
}