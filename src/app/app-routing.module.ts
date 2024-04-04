import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CakeOrderComponent } from './cake-order/cake-order.component';
import { LoginComponent } from './login/login.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { canActivateGuard } from './services/can-activate.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cake-order/:id',
    component: CakeOrderComponent,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'cake-request',
    component: CakeRequestComponent,
    canActivate: [canActivateGuard],
    // canDeactivate: [canDeactivateGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
