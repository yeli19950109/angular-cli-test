import {BrowserModule}          from '@angular/platform-browser';
import {NgModule}               from '@angular/core';
import {FormsModule}            from '@angular/forms';
import {HttpModule}             from '@angular/http';
import {NgbModule}               from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule}       from './app-routing.module';
import { HeroesModule }         from './heros/heroes.module';
import { CrisisModule }         from './crisis/crisis.module';
import { LoginRoutingModule }   from './login-routing.module';
import { ContactModule }        from './contact/contact.module';
import {AppComponent}           from './app.component';
import {HeroFormComponent}      from './hero-form.component';
import {PageNotFoundComponent}  from './page-not-found.component';
import {IndexComponent}         from './index.component';
import { LoginComponent }       from './login.component';
import { TestComponent }        from './test.component';
import { HighlightDirective}    from './highlight.directive';
import { TestDirective }        from './test.directive';

import {DialogService}          from './dialog.service';
import {UserService}            from './user.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroFormComponent,
        LoginComponent,
        HighlightDirective,
        PageNotFoundComponent,
        TestDirective,
        TestComponent
        //IndexComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LoginRoutingModule,
        AppRoutingModule,
        HeroesModule,
        CrisisModule,
        ContactModule,
        NgbModule.forRoot()    //在顶层节点要注意forRoot 另外则不需要
        //AdminModule 利用路由懒加载
        //经过实验 模块加载的先后顺序会对路由造成影响
        // 先加载的模块的路由会先被匹配
        //后加载的路由会后匹配
        // 所以 path='**'的404路由要放在最后加载的模块里
        //后加载的模块应避免路径重合
        //利于 先加载的模块里的 hero/:id 会覆盖后加载里的 hero/form
        //导致无法进入hero/form
        //建议先加载特性模块，在加载根模块的AppRoutingModule,
        //因为404页面最好放在根路由，防止加载出部分网页
        //或者考虑路由懒加载?:(大概)
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
