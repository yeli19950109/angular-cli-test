/**
 * Created by admin on 2016/11/18.
 */
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    //moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    hid:number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) {}


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
        });
    }
    gotoHeroes() { this.router.navigate(['/heroes']); }
}