import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// HOL 7 Step 71: Wildcard ** route target for 404 page
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <div class="card not-found-card">
        <div class="code">404</div>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <a routerLink="/" class="btn btn-primary" style="margin-top: 1rem;">Back to Home</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-card { text-align: center; padding: 4rem 2rem; max-width: 500px; margin: 3rem auto; }
    .code { font-size: 5rem; font-weight: 900; color: var(--primary); line-height: 1; }
    h2 { font-size: 1.75rem; font-weight: 700; margin: 1rem 0 0.5rem; }
    p { color: var(--text-muted); }
  `]
})
export class NotFoundComponent {}
