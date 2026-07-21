import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// HOL 7: Parent layout component for nested routing under /courses
@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class CoursesLayoutComponent {}
