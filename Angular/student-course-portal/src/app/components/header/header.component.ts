import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <div class="header-container">
        <a routerLink="/" class="brand">
          <span class="brand-icon">🎓</span>
          <span class="brand-name">CoursePortal</span>
        </a>
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/courses" routerLinkActive="active">Courses</a>
          <a routerLink="/profile" routerLinkActive="active">Profile</a>
          <a routerLink="/enroll" routerLinkActive="active">Template Enroll</a>
          <a routerLink="/enroll-reactive" routerLinkActive="active">Reactive Enroll</a>
        </nav>
        <div class="auth-status">
          <button (click)="toggleAuth()" class="auth-btn" [class.logged-in]="auth.isLoggedIn">
            {{ auth.isLoggedIn ? '🔓 Log Out' : '🔒 Log In' }}
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: white;
      border-bottom: 1px solid var(--border);
      position: sticky; top: 0; z-index: 100;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex; align-items: center; gap: 0.5rem;
      text-decoration: none; font-weight: 700; font-size: 1.25rem; color: var(--primary);
    }
    .nav { display: flex; gap: 1rem; }
    .nav a {
      text-decoration: none; color: var(--text-muted); font-weight: 500;
      padding: 0.5rem 0.75rem; border-radius: 6px; transition: all 0.2s;
    }
    .nav a:hover { color: var(--primary); background: #f1f5f9; }
    .nav a.active { color: var(--primary); font-weight: 600; background: #e0e7ff; }
    .auth-btn {
      padding: 0.4rem 0.9rem; border-radius: 6px; border: 1px solid var(--border);
      background: white; cursor: pointer; font-size: 0.85rem; font-weight: 500;
    }
    .auth-btn.logged-in { background: #ecfdf5; border-color: #a7f3d0; color: #047857; }
  `]
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}

  toggleAuth(): void {
    if (this.auth.isLoggedIn) {
      this.auth.logout();
    } else {
      this.auth.login();
    }
  }
}
