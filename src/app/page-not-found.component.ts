/**
 * Created by Administrator on 2016/11/23.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'page-not-found',
    template:`
        <div style="font-size: 35px;">404 not found</div>
    `
    //templateUrl: 'feature.component.html'
})
export class PageNotFoundComponent  implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}