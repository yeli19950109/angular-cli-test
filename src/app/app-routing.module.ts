/**
 * Created by admin on 2016/11/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroFormComponent}      from './hero-form.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import {AuthGuard} from './auth-guard.service'
//import { CrisisListComponent }  from './crisis/crisis-list.component';

const routes: Routes = [
    { path: 'hero/form', component: HeroFormComponent},
    {path:'admin',loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuard]},
    { path: '', redirectTo: '/hero/form', pathMatch: 'full' },
    //{ path:'**',redirectTo:'hero/form',pathMatch:'full'}
    //{ path: 'crisis-center', component: CrisisListComponent },

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers:[ CanDeactivateGuard]
})
export class AppRoutingModule {}
export const routedComponents = [HeroFormComponent];
