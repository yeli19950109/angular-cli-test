/**
 * Created by admin on 2016/11/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroFormComponent}      from './hero-form.component';
//import { CrisisListComponent }  from './crisis/crisis-list.component';

const routes: Routes = [
    { path: 'hero/form', component: HeroFormComponent},
    //{ path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/hero/form', pathMatch: 'full' }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routedComponents = [HeroFormComponent];
