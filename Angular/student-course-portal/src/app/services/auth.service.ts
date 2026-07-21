import { Injectable } from '@angular/core';

// HOL 7: AuthService - hardcoded isLoggedIn for demo purposes
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true; // Set to false to test guard redirect

  login(): void { this.isLoggedIn = true; }
  logout(): void { this.isLoggedIn = false; }
}
