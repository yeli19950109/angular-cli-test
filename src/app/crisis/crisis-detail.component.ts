/**
 * Created by admin on 2016/11/18.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Crisis } from './crisis';
@Component({
    //moduleId: module.id,
    selector: 'crisis-detai;',
    template: `
         <p>{{ccc | json}}</p>
         <button (click)="goback()">back</button>
    `
})
export class CrisisDetailComponent implements OnInit {

    public ccc:Crisis;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.ccc={
                id:id,
                name:"test"
            }
        });
    }
    goback(){
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}