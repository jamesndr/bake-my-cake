import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CakeOrderComponent } from '../cake-order/cake-order.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class canDeactivateGuard implements CanDeactivate<CakeOrderComponent> {
  canDeactivate(
    component: CakeOrderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return component.canDeactivate();
    }
}
