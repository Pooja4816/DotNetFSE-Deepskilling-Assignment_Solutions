import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course, Student } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

/**
 * HOL 7 & 9: StudentProfileComponent
 * Route protected by CanActivate authGuard.
 * Selects cross-slice NgRx data using selectEnrolledCourses.
 */
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  template: `
    <div class="container">
      <div class="profile-header card">
        <div class="avatar">👩‍🎓</div>
        <div class="info">
          <h2>{{ student.name }}</h2>
          <p class="email">📧 {{ student.email }}</p>
          <div class="stats">
            <span class="stat"><strong>GPA:</strong> {{ student.gpa }}</span>
            <span class="stat"><strong>Student ID:</strong> #{{ student.id }}</span>
          </div>
        </div>
      </div>

      <div class="enrolled-section">
        <h3>Enrolled Courses</h3>

        <div *ngIf="(enrolledCourses$ | async) as courses">
          <div class="courses-list" *ngIf="courses.length > 0; else empty">
            <div *ngFor="let course of courses" class="card course-row">
              <div class="course-info">
                <span class="code">{{ course.code }}</span>
                <h4>{{ course.name }}</h4>
                <span class="credits">{{ course.credits | creditLabel }}</span>
              </div>
              <div class="actions">
                <a [routerLink]="['/courses', course.id]" class="btn btn-secondary btn-sm">View</a>
                <button (click)="unenroll(course.id)" class="btn btn-danger btn-sm">Unenroll</button>
              </div>
            </div>
          </div>

          <ng-template #empty>
            <div class="card empty-state">
              <p>You are not currently enrolled in any courses.</p>
              <a routerLink="/courses" class="btn btn-primary" style="margin-top: 1rem;">Browse Courses</a>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-header { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 2rem; }
    .avatar { font-size: 4rem; background: #e0e7ff; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .info h2 { font-size: 1.5rem; font-weight: 700; }
    .email { color: var(--text-muted); margin-bottom: 0.5rem; }
    .stats { display: flex; gap: 1.5rem; color: var(--text); font-size: 0.95rem; }
    .enrolled-section h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; }
    .courses-list { display: flex; flex-direction: column; gap: 1rem; }
    .course-row { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; }
    .course-info { display: flex; align-items: center; gap: 1rem; }
    .code { font-weight: 700; color: var(--primary); font-size: 0.85rem; }
    .course-info h4 { font-weight: 600; font-size: 1rem; }
    .credits { color: var(--text-muted); font-size: 0.9rem; }
    .actions { display: flex; gap: 0.5rem; }
    .btn-sm { padding: 0.35rem 0.75rem; font-size: 0.85rem; }
    .empty-state { text-align: center; padding: 3rem; color: var(--text-muted); }
  `]
})
export class StudentProfileComponent {
  student: Student = {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@university.edu',
    gpa: 3.8,
    enrolledCourseIds: [2, 5],
  };

  enrolledCourses$: Observable<Course[]>;

  constructor(private store: Store) {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }

  unenroll(courseId: number): void {
    this.store.dispatch(unenrollFromCourse({ courseId }));
  }
}
