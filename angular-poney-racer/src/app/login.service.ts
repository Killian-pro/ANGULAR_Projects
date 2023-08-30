import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: boolean = localStorage.getItem('token') === 'true';

  constructor(private router: Router) {}
  add(email: string, password: string): void {
    if (email == 'a@a' && password == 'Password') {
      this.token = true;
      localStorage.setItem('token', 'true');

      // £ utilisation des routes
      this.router.navigate(['race']);
    }
  }
}
