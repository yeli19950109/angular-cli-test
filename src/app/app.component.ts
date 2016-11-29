import {Component,OnInit,AfterViewChecked,OnChanges} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked{
    public title:string = 'app works!';
    public color:string="red";
    constructor(){}
    ngOnInit() {
    }
    ngAfterViewChecked(){

    }

}
