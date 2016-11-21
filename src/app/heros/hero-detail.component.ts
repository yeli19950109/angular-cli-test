/**
 * Created by admin on 2016/11/18.
 */
import {Component, OnInit ,HostBinding,trigger,transition,animate,style,state} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    //moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    animations:[
        trigger('routeAnimation',[
            state('*',
                style({
                    opacity:1,
                    transform:'translateX(0)'
                })
            ),
            transition(':enter',[
                style({
                    opacity:0,
                    transform:'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave',[
                animate('0.5s ease-out',
                    style({
                        opacity:0,
                        transform:'translateY(100%)'
                    })
                )
            ])
        ])
    ]
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation(){
            return true;
    }
    @HostBinding('style.display') get display(){
        return 'block';
    }
    @HostBinding('style.position') get position(){
        return 'absolute';
    }

    private hid:number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) {}


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            console.log(id);
            this.hid=id;
        });
    }
    gotoHeroes() {
        this.router.navigate(['/heroes',{id:this.hid,foo:'foo'}]);
    }
}