import {Component} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'app-root',
    template: `
    <div class="container" >
        <h2 highlight>angular-cli-test</h2>
        <nav>
            <a routerLink="/hero/form" routerLinkActive="active">hreo-form</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
            <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/admin" routerLinkActive="active">Admin</a>
            <a routerLink="/login" routerLinkActive="active">Login</a>
        </nav>
        
        <router-outlet></router-outlet>
        <!--<hero-form></hero-form>-->
    </div>
    `,
    //templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
}
