/**
 * Created by admin on 2016/11/18.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'crisis-center',
                component: CrisisCenterComponent,
                children: [
                    {
                        path: '',
                        component: CrisisListComponent,
                        children: [
                            {
                                path: ':id',
                                component: CrisisDetailComponent
                            },
                            {
                                path: '',
                                component: CrisisCenterHomeComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CrisisCenterRoutingModule { }

