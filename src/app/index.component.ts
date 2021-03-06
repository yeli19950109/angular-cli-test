/**
 * Created by Administrator on 2016/11/23.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'app-index',
    template:`
        <h2 highlight>angular-cli-test</h2>
        <nav>
            <a routerLink="/hero/form" routerLinkActive="active">hreo-form</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
            <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/admin" routerLinkActive="active">Admin</a>
            <a routerLink="/login" routerLinkActive="active">Login</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class IndexComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}