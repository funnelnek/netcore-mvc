import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { STAGE_STORE } from "./constants";
import { STAGE_FEATURE } from "./constants/stage-feature-key.constant";
import { StageStoreReducer } from "./reducers/stage.reducer";


@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forFeature(STAGE_FEATURE, STAGE_STORE)        
    ],
    providers: [
        {
            provide: STAGE_STORE,
            useFactory: StageStoreReducer
        }
    ]
})
export class StageStoreModule {}