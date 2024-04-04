import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigate([""]);
  }

  navigateToCakeRequest(){
    this.router.navigate(["/cake-request"])
  }

  navigateToLoginView(){
    this.router.navigate(["/login"])
  }
}
