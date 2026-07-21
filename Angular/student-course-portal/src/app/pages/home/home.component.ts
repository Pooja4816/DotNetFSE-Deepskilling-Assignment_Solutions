import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="container">
      <div class="hero card">
        <h1 class="hero-title">Welcome to Student Course Portal</h1>
        <p class="hero-sub">Digital Nurture 5.0 Angular Comprehensive Hands-On Solution</p>
        <p class="hero-desc">
          Explore courses, manage enrollments, track grade statuses, and interact with modern Angular 17 features including Standalone Components, NgRx State Management, Reactive Forms, and Route Guards.
        </p>
        <div class="hero-buttons">
          <a routerLink="/courses" class="btn btn-primary">Browse All Courses</a>
          <a routerLink="/enroll-reactive" class="btn btn-secondary">Enroll in a Course</a>
        </div>
      </div>

      <div class="features-grid">
        <div class="card feature-card">
          <div class="feature-icon">📚</div>
          <h3>Course Catalog</h3>
          <p>Browse available academic courses with real-time filtering, search, and detail views powered by RxJS and NgRx.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon">✍️</div>
          <h3>Dual Form Engines</h3>
          <p>Experience both Template-Driven Forms with ngModel and Reactive Forms with FormBuilder, validators, and custom validation.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Route Security</h3>
          <p>Protected pages using CanActivate auth guards and CanDeactivate unsaved-changes detection.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon">⚡</div>
          <h3>NgRx State & HTTP</h3>
          <p>Centralized state management with Store, Effects, Actions, and Selectors, backed by HTTP interceptors and mock API.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #ffffff 0%, #edf2f7 100%);
      padding: 3rem;
      border-radius: 12px;
      margin-bottom: 2rem;
      border: 1px solid var(--border);
    }
    .hero-title { font-size: 2.25rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; }
    .hero-sub { font-size: 1.1rem; color: var(--secondary); font-weight: 600; margin-bottom: 1rem; }
    .hero-desc { font-size: 1rem; color: var(--text-muted); max-width: 800px; margin-bottom: 1.5rem; }
    .hero-buttons { display: flex; gap: 1rem; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
    .feature-card { display: flex; flex-direction: column; gap: 0.5rem; }
    .feature-icon { font-size: 2rem; }
    .feature-card h3 { font-size: 1.1rem; font-weight: 600; color: var(--text); }
    .feature-card p { font-size: 0.9rem; color: var(--text-muted); }
  `]
})
export class HomeComponent {}
