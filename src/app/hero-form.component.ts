/**
 * Created by admin on 2016/11/16.
 */
import { Component } from '@angular/core';
import {Hero}from './hero'
import { Heros }    from './heros';

@Component({
    //moduleId: module.id,    只有用systemjs来打包采取要moduleId angular-cli自带的webpack打包不需要
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
    public powers:string[] = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    public model = new Heros(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    public submitted:boolean = false;
    public current:boolean=true;
    public toeChoice:string="other";
    public toeChoices:string[]=['Eenie','Meanie','Miney','Moe','other'];
    public tt:number=0;

    public onSubmit():void { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    public newHero():void {
        this.model = new Heros(42, '', '');
        console.log(Heros);
        console.log(this.model);
    }
    public schange():void{
        this.current=!this.current;
    }

    public sswitch():void{
        if(this.tt>4)
        {
            this.tt=0;
            this.toeChoice=this.toeChoices[this.tt];
        }
        else
        {
            this.toeChoice=this.toeChoices[this.tt];
            this.tt++;
        }
    }

    public heroes:Hero[]=[
        {id:1,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:2,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:3,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:4,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:5,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:6,name:'asdad',power:'adas',alterEgo:'saa'},
        {id:7,name:'asdad',power:'adas',alterEgo:'saa'}
    ]

    public trackByHeroes(index: number, hero: Hero) :number
    {
        return hero.id;
    }

}

