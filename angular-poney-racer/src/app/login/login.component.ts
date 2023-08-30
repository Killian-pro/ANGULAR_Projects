import { Component } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  add(email: string, password: string): void {
    email = email.trim();
    if (!email) {
      return;
    }
    this.loginService.add(email, password);
  }
}
