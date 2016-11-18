/**
 * Created by admin on 2016/11/18.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [

    ]
})
export class HeroesModule {}
