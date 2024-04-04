import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { RouteServiceService } from '../services/route-service.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  constructor(
    private authService: AuthServiceService,
    private routeService: RouteServiceService,
    private fb: FormBuilder
  ) {}

  adminForm = this.fb.group({
    securityCode: ['', [this.mustMatchSecurityCode]],
  });

  get securityCode() {
    return this.adminForm.get('securityCode');
  }

  mustMatchSecurityCode(fc: AbstractControl) {
    const code = fc.value;
    if (!code) {
      return null;
    }
    if (code !== 'admin@2002') {
      return { codeMismatch: true };
    }
    return null;
  }

  validateSecurityCode() {
    if(this.securityCode?.value === 'admin@2002') {
      this.authService.loggedIn();
      this.routeService.navigateToCakeRequest();
    }
  }
}
