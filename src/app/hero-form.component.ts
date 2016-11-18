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
    powers:string[] = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Heros(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted:boolean = false;

    onSubmit():void { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    newHero() {
        this.model = new Heros(42, '', '');
        console.log(Heros)
        console.log(this.model);
    }
}

