/**
 * Created by admin on 2016/11/16.
 */
import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
    //moduleId: module.id,    只有用systemjs来打包采取要moduleId angular-cli自带的webpack打包不需要
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    newHero() {
        this.model = new Hero(42, '', '');
        console.log(Hero)
        console.log(this.model);
    }
}

