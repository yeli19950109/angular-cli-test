/**
 * Created by Administrator on 2016/11/23.
 */
import {NgModule}from '@angular/core'
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from './contact.component';
import { PageNotFoundComponent } from '../page-not-found.component';


const routes: Routes = [
    {path: 'contact', component: ContactComponent},
    { path:'**',component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[
        RouterModule
    ]
})
export class ContactRoutingModule{}