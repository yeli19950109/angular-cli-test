import {BrowserModule}      from '@angular/platform-browser';
import {NgModule}           from '@angular/core';
import {FormsModule}        from '@angular/forms';
import {HttpModule}         from '@angular/http';

import {AppRoutingModule}   from './app-routing.module';
import {AppComponent}       from './app.component';
import {HeroFormComponent}  from './hero-form.component';
import { HeroesModule } from './heros/heroes.module';
import { CrisisListComponent } from './crisis-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        CrisisListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        HeroesModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    //ng serve 默认端口是4200
}
