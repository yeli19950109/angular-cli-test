/**
 * Created by Administrator on 2016/11/30.
 */
import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
    selector: 'ngbd-buttons-radio',
    templateUrl:'./test2.component.html',
    styleUrls:['./test2.component.css']
})
export class Test2Component {
    public model = {
        left: true,
        middle: false,
        right: false
    };
    public model1:any=1;
    public middle:string="test";
    public isCollapsed:boolean=false;
    public timemodel: NgbDateStruct;
    public date: {year: number, month: number};
    public displayMonths = 2;
    public navigation = 'select';
    public toggled:boolean=false;

    selectToday() {
        this.timemodel = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }
}