/**
 * Created by admin on 2016/11/18.
 */
import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisService } from './crisis.service';
import {CrisisListComponent}   from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ],
    exports: [],
    declarations: [
        CrisisListComponent,
        CrisisCenterHomeComponent,
        CrisisCenterComponent,
        CrisisDetailComponent
    ],
    providers: [CrisisService],
})
export class CrisisModule {
}
