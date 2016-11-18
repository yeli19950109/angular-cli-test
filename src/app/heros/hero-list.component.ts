/**
 * Created by admin on 2016/11/18.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    //moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'hero-list.component.html'
    // template: `
    // <h2>HEROES</h2>
    // <p>Get your heroes here</p>`
})
export class HeroListComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
    gotoDetail(): void {
        this.router.navigate(['/hero', 1]);
    }

}
// export class HeroListComponent { }