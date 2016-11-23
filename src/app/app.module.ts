import {BrowserModule}          from '@angular/platform-browser';
import {NgModule}               from '@angular/core';
import {FormsModule}            from '@angular/forms';
import {HttpModule}             from '@angular/http';

import {AppRoutingModule}       from './app-routing.module';
import { HeroesModule }         from './heros/heroes.module';
import { CrisisModule }         from './crisis/crisis.module';
import { LoginRoutingModule }   from './login-routing.module';
import { ContactModule }        from './contact/contact.module';
import {AppComponent}           from './app.component';
import {HeroFormComponent}      from './hero-form.component';
import { LoginComponent }       from './login.component';
import { HighlightDirective}    from './highlight.directive';

import {DialogService}          from './dialog.service';
import {UserService}            from './user.service';

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
        ContactModule
        //AdminModule 利用路由懒加载
    ],
    providers: [
        DialogService,
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    //ng serve 默认端口是4200
}
