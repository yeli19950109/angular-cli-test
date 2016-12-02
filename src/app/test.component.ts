/**
 * Created by Administrator on 2016/11/29.
 */
import { Component, OnInit,Input } from '@angular/core';
import {NgbAlertConfig,NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { Subject }                 from 'rxjs/Subject';

@Component({
    //moduleId: module.id,
    selector: 'app-test',
    templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;
    private _success = new Subject<string>();
    public staticAlertClosed = false;
    public successMessage: string;

    constructor(private alertConfig:NgbAlertConfig ) {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
        console.log(alertConfig);
        alertConfig.type='success';
        alertConfig.dismissible=false;
    }

    ngOnInit(): void {
        setTimeout(() => this.staticAlertClosed = true, 5000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(2000).subscribe(() => this.successMessage = null);
    }
    
    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }

    public beforeChange($event:NgbPanelChangeEvent)
    {
        alert("当前打开的是panel"+$event.panelId);
        console.log($event);
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
}