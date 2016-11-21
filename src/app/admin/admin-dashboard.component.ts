/**
 * Created by Administrator on 2016/11/21.
 */
import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    template:  `
    <p>Dashboard</p>

    <p>Session ID: {{ sessionId | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>
  `
})
export class AdminDashboardComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        console.log(this.route);
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }
}
