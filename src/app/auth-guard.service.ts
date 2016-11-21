/**
 * Created by Administrator on 2016/11/21.
 */
import { Injectable }     from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
// 用 CanActivate 来处理导航 到 某路由的情况。
//
// 用 CanActivateChild 处理导航 到 子路由的情况。
//
// 用 CanDeactivate 来处理从当前路由 离开 的情况。
//
// 用 Resolve 在路由激活 之前 获取路由数据。
//
// 用 CanLoad 来处理 异步 导航到某特性模块的情况。
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        console.log('AuthGuard#canActivate called');
        return this.checkLogin(url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Create a dummy session id
        let sessionId = 123456789;

        // Set our navigation extras object
        // that contains our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
        };

        // Navigate to the login page with extras
        this.router.navigate(['/login'],navigationExtras);
        return false;
    }
}
