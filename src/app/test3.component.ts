/**
 * Created by Administrator on 2016/12/2.
 */
import {Component, OnInit,Input} from '@angular/core';
import { NgbModal,NgbActiveModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './modal.contact';

@Component({
    //moduleId: module.id,
    selector: 'test3-app',
    templateUrl: 'test3.component.html',
    providers:[NgbActiveModal]
})
export class Test3Component implements OnInit {

    public totalNum="70";
    public currentPage=1;
    public name="asdasdasd";

    constructor(private modalService:NgbModal ) {}

    ngOnInit() {
        console.log(NgbdModalContent);
    }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.names = 'World';
        modalRef.result.then(
            (result)=>{
                console.log(result);
            },
            (reason)=>{
                console.log(this.getDismissReason(reason));
                console.log(reason);
            }
        );
        console.log(modalRef.componentInstance);
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}