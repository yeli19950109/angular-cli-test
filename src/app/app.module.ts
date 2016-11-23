import {BrowserModule}      from '@angular/platform-browser';
import {NgModule}           from '@angular/core';
import {FormsModule}        from '@angular/forms';
import {HttpModule}         from '@angular/http';

import {AppRoutingModule}   from './app-routing.module';
import {AppComponent}       from './app.component';
import {HeroFormComponent}  from './hero-form.component';
import { HeroesModule }     from './heros/heroes.module';
//import { CrisisListComponent } from './crisis/crisis-list.component';
import { CrisisModule }     from './crisis/crisis.module';
import { AdminModule }      from './admin/admin.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';
import { HighlightDirective} from './highlight.directive';

import {DialogService}from './dialog.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        LoginComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginRoutingModule,
        AppRoutingModule,
        HeroesModule,
        CrisisModule,
        //AdminModule
    ],
    providers: [
        DialogService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    //ng serve 默认端口是4200
}
