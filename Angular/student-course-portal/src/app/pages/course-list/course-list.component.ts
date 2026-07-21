import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { NotificationService } from '../../services/notification.service';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

/**
 * HOL 2, 3, 6, 8, 9: CourseListComponent
 * Integrates:
 * - NgRx Store for courses & enrollments
 * - Component-level DI via providers: [NotificationService]
 * - Search filter with RxJS combineLatest
 * - Structural directives *ngIf, *ngFor
 */
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  providers: [NotificationService],
  template: `
    <div class="container">
      <div class="header-bar">
        <div>
          <h2>Available Courses</h2>
          <p class="subtitle">Select a course to view details or enroll</p>
        </div>

        <div class="search-box">
          <input
            type="text"
            class="form-control"
            placeholder="🔍 Search by course name or code..."
            [ngModel]="searchTerm$ | async"
            (ngModelChange)="onSearchChange($event)"
          />
        </div>
      </div>

      <div *ngIf="notificationService.notification$ | async as notification" class="notification-banner" [ngClass]="notification.type">
        {{ notification.message }}
      </div>

      <div *ngIf="loading$ | async" class="loading-state card">
        <p>Loading course catalog...</p>
      </div>

      <div class="course-grid" *ngIf="(loading$ | async) === false">
        <ng-container *ngIf="(enrolledIds$ | async) as enrolledIds">
          <ng-container *ngIf="(filteredCourses$ | async) as courses">
            <app-course-card
              *ngFor="let course of courses; trackBy: trackByCourseId"
              [course]="course"
              [isEnrolled]="isEnrolled(course.id, enrolledIds)"
              (enrollToggle)="onToggleEnrollment($event, enrolledIds)"
            ></app-course-card>

            <div *ngIf="courses.length === 0" class="empty-state card">
              <p>No courses match your search criteria.</p>
            </div>
          </ng-container>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .header-bar {
      display: flex; justify-content: space-between; align-items: flex-end;
      margin-bottom: 1.5rem; gap: 1rem; flex-wrap: wrap;
    }
    h2 { font-size: 1.75rem; font-weight: 700; color: var(--text); }
    .subtitle { color: var(--text-muted); font-size: 0.95rem; }
    .search-box { min-width: 300px; }
    .course-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;
    }
    .loading-state, .empty-state {
      text-align: center; padding: 3rem; color: var(--text-muted); grid-column: 1 / -1;
    }
    .notification-banner {
      padding: 0.75rem 1rem; border-radius: 8px; margin-bottom: 1rem; font-weight: 500;
    }
    .notification-banner.success { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .notification-banner.error { background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; }
    .notification-banner.info { background: #e0e7ff; color: #3730a3; border: 1px solid #c7d2fe; }
  `]
})
export class CourseListComponent implements OnInit {
  searchTerm$ = new BehaviorSubject<string>('');
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  enrolledIds$: Observable<number[]>;
  filteredCourses$: Observable<Course[]>;

  constructor(
    private store: Store,
    public notificationService: NotificationService
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);

    this.filteredCourses$ = combineLatest([this.courses$, this.searchTerm$]).pipe(
      map(([courses, term]) => {
        if (!term.trim()) return courses;
        const lowerTerm = term.toLowerCase();
        return courses.filter(
          (c) =>
            c.name.toLowerCase().includes(lowerTerm) ||
            c.code.toLowerCase().includes(lowerTerm)
        );
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  onSearchChange(term: string): void {
    this.searchTerm$.next(term);
  }

  isEnrolled(courseId: number, enrolledIds: number[]): boolean {
    return enrolledIds.includes(courseId);
  }

  onToggleEnrollment(courseId: number, enrolledIds: number[]): void {
    const currentlyEnrolled = this.isEnrolled(courseId, enrolledIds);
    if (currentlyEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId }));
      this.notificationService.show('Unenrolled successfully', 'info');
    } else {
      this.store.dispatch(enrollInCourse({ courseId }));
      this.notificationService.show('Enrolled successfully!', 'success');
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
