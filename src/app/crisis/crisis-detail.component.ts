/**
 * Created by admin on 2016/11/18.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Crisis } from './crisis';
import {DialogService}from '../dialog.service';

@Component({
    //moduleId: module.id,
    selector: 'crisis-detai;',
    template: `
         <p>{{crisis | json}}</p>
         <input type="text" [(ngModel)]="editName">
         <p>{{editName}}</p>
         <button (click)="goback()">back</button>
         <button (click)="cancel()" >cancel</button>
         <button (click)="save()" >save</button>
    `
})
export class CrisisDetailComponent implements OnInit {

    public crisis:Crisis;
    public editName:string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService:DialogService
    ) {}

    ngOnInit() {

        // this.route.params.forEach((params: Params) => {
        //     let id = +params['id']; // (+) converts string 'id' to a number
        //     this.crisis={
        //         id:id,
        //         name:"test"
        //     }
        //     this.editName=this.crisis.name;
        // });

        this.route.data.forEach((data: { crisis: Crisis }) => {
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });


    }

    canDeactivate():  boolean{
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }


    goback(){
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    cancel() {
        this.goback();
    }

    save() {
        this.crisis.name = this.editName;
        this.goback();
    }
}