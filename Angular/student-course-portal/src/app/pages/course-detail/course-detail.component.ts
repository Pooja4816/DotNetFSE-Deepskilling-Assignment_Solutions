import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectIsEnrolled } from '../../store/enrollment/enrollment.selectors';

/**
 * HOL 7 & 8: CourseDetailComponent
 * Demonstrates:
 * - ActivatedRoute params reading
 * - RxJS switchMap operator to map route ID param to HTTP request
 * - Programmatic navigation using Router.navigate()
 * - NgRx store selector parameterization
 */
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  template: `
    <div class="container" *ngIf="course$ | async as course; else loading">
      <div class="card detail-card">
        <div class="header">
          <div>
            <span class="code">{{ course.code }}</span>
            <h1 class="title">{{ course.name }}</h1>
          </div>
          <span class="badge" [ngClass]="'badge-' + course.gradeStatus">
            {{ course.gradeStatus }}
          </span>
        </div>

        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">Credits</span>
            <span class="meta-value">{{ course.credits | creditLabel }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Instructor</span>
            <span class="meta-value">{{ course.instructor || 'To Be Announced' }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Course ID</span>
            <span class="meta-value">#{{ course.id }}</span>
          </div>
        </div>

        <div class="description-section">
          <h3>Course Description</h3>
          <p>{{ course.description || 'No detailed description available for this course.' }}</p>
        </div>

        <div class="actions">
          <button (click)="goBack()" class="btn btn-secondary">
            ← Back to Courses
          </button>
          
          <ng-container *ngIf="isEnrolled$(course.id) | async as enrolled">
            <button
              class="btn"
              [class.btn-primary]="!enrolled"
              [class.btn-danger]="enrolled"
              (click)="toggleEnrollment(course.id, enrolled)"
            >
              {{ enrolled ? 'Unenroll from Course' : 'Enroll in Course' }}
            </button>
          </ng-container>
        </div>
      </div>
    </div>

    <ng-template #loading>
      <div class="container">
        <div class="card loading-card">
          <p>Loading course details...</p>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    .detail-card { display: flex; flex-direction: column; gap: 1.5rem; padding: 2.5rem; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; }
    .code { color: var(--primary); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.05em; }
    .title { font-size: 2rem; font-weight: 700; color: var(--text); margin-top: 0.25rem; }
    .meta-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; background: #f8fafc; padding: 1.25rem; border-radius: 8px; }
    .meta-item { display: flex; flex-direction: column; }
    .meta-label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
    .meta-value { font-size: 1.1rem; font-weight: 600; color: var(--text); }
    .description-section h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
    .description-section p { color: var(--text-muted); line-height: 1.7; }
    .actions { display: flex; gap: 1rem; margin-top: 1rem; }
    .loading-card { text-align: center; padding: 3rem; color: var(--text-muted); }
  `]
})
export class CourseDetailComponent implements OnInit {
  course$!: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // HOL 7 Step 72: Reading route parameter using ActivatedRoute params and switchMap
    this.course$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.courseService.getCourseById(id);
      })
    );
  }

  isEnrolled$(courseId: number): Observable<boolean> {
    return this.store.select(selectIsEnrolled(courseId));
  }

  toggleEnrollment(courseId: number, currentlyEnrolled: boolean): void {
    if (currentlyEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId }));
    }
  }

  // HOL 7 Step 73: Programmatic navigation using Router service
  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
