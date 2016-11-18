/**
 * Created by admin on 2016/11/18.
 */
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
@Component({
    //moduleId: module.id,
    selector: 'crisis-list',
    templateUrl: 'crisis-list.component.html'
    // template: `
    // <h2>CRISIS CENTER</h2>
    // <p>Get your crisis here</p>`
})
export class CrisisListComponent implements OnInit {
    public crisis:Crisis[];
    constructor(private crisisService:CrisisService,private router:Router,private route:ActivatedRoute) { }

    getCrisis():void{
        this.crisis = this.crisisService.getCrisis();
    }
    ngOnInit() {
        this.getCrisis();
    }
    gotoDetail(): void {
        this.router.navigate([1], { relativeTo: this.route });
    }

}
// export class CrisisListComponent { }