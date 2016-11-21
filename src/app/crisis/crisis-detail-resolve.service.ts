/**
 * Created by Administrator on 2016/11/21.
 */
import { Injectable }             from '@angular/core';
import { Router, Resolve,
    ActivatedRouteSnapshot } from '@angular/router';
import {  CrisisService } from './crisis.service';
import {Crisis} from './crisis'
@Injectable()
export class CrisisDetailResolve implements Resolve<Crisis> {
    constructor(private cs: CrisisService, private router: Router) {}
    public cis:Crisis[];
    public ci:Crisis;
    resolve(route: ActivatedRouteSnapshot):boolean |Crisis{
        let id = +route.params['id'];
        this.cis=this.cs.getCrisis();


            if (this.cis) {
                return this.cis[0];
            } else { // id not found
                this.router.navigate(['/crisis-center']);
                return false;
            }

    }
}
