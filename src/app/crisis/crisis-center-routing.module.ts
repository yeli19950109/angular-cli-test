/**
 * Created by admin on 2016/11/18.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { PageNotFoundComponent } from '../page-not-found.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';
import { CrisisDetailResolve }   from './crisis-detail-resolve.service';

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
                                component: CrisisDetailComponent,
                                canDeactivate: [CanDeactivateGuard],
                                resolve: {
                                    crisis: CrisisDetailResolve
                                }
                            },
                            {
                                path: '',
                                component: CrisisCenterHomeComponent
                            }
                        ]
                    }
                ]
            },
            // { path:'**',component:PageNotFoundComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    providers:[CrisisDetailResolve]
})
export class CrisisCenterRoutingModule { }

