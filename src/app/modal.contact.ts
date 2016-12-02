/**
 * Created by Administrator on 2016/12/2.
 */
import {Component, Input,Output,EventEmitter} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    template: `
    <div class="modal-header">
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Hi there!</h4>
    </div>
    <div class="modal-body">
        <p>Hello, {{_name}}!</p>
        <p>now {{names}}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-info" (click)="conso()">确认</button>
        <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
    private _name:string;
    @Input() public set names(v: string) {

        this._name = v;

        console.log(v);

    };
    public get names(): string {

        return this._name;

    }
    @Output() output:EventEmitter<string> = new EventEmitter<string>();
    constructor(public activeModal: NgbActiveModal) {}

    public conso(){
        console.log('123');
        this.activeModal.close('safe');
    }

    public output(){
        this.output.emit("i am from child");
    }
}