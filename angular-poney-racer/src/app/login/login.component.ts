import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  add(email: string, password: string): void {
    email = email.trim();
    if (!email) {
      return;
    }
    if (email == 'a@a' && password == 'Password') {
      this.router.navigate(['race']);
    }
  }
}
