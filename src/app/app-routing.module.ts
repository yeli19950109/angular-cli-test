/**
 * Created by admin on 2016/11/18.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroFormComponent}      from './hero-form.component';
import {TestComponent }         from './test.component';
import { Test2Component } from './test2.component';
import { Test3Component } from './test3.component';
// import {PageNotFoundComponent}  from './page-not-found.component';
// import {IndexComponent}         from './index.component';
// import { LoginRoutingModule }   from './login-routing.module';
import { CanDeactivateGuard }   from './can-deactivate-guard.service';
import {AuthGuard}              from './auth-guard.service'
//import {CrisisListComponent}     from './crisis/crisis-list.component';

const routes: Routes = [
    // {
    //     path:'index',component:IndexComponent,
    //     children:[
    //         {path:'asd'}
    //     ]
    // },
    {path: 'hero/form', component: HeroFormComponent},
    {path: 'test', component:TestComponent},
    {path:'test2', component:Test2Component},
    {path:'test3', component:Test3Component},
    {path:'admin',loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuard]},
    { path: '', redirectTo: 'hero/form', pathMatch: 'full' },
    { path:'index.html',redirectTo:'hero/form',pathMatch:'full'},
    //用于隐藏index.html 防止页面跳转错误
    //{ path:'**',component:PageNotFoundComponent}
    //{ path: 'crisis-center', component: CrisisListComponent },

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers:[ CanDeactivateGuard]
})
export class AppRoutingModule {}
export const routedComponents = [HeroFormComponent];