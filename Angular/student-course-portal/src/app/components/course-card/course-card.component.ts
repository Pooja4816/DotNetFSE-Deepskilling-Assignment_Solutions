import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

/**
 * HOL 2 & 3: CourseCardComponent
 * Uses @Input() for parent-to-child data binding.
 * Uses @Output() EventEmitter for child-to-parent event notification.
 * Uses custom directive appHighlight and custom pipe creditLabel.
 */
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink, HighlightDirective, CreditLabelPipe],
  template: `
    <!-- HOL 3: Custom directive appHighlight applied -->
    <div class="course-card card" appHighlight="#f8fafc">
      <div class="card-header">
        <span class="code">{{ course.code }}</span>
        <!-- HOL 3: Built-in ngClass directive -->
        <span class="badge" [ngClass]="{
          'badge-passed': course.gradeStatus === 'passed',
          'badge-failed': course.gradeStatus === 'failed',
          'badge-pending': course.gradeStatus === 'pending'
        }">
          {{ course.gradeStatus }}
        </span>
      </div>

      <h3 class="title">{{ course.name }}</h3>
      
      <!-- HOL 3: Built-in pipe uppercase & custom pipe creditLabel -->
      <p class="credits">
        <strong>Credits:</strong> {{ course.credits | creditLabel }}
      </p>
      
      <p class="instructor" *ngIf="course.instructor">
        <strong>Instructor:</strong> {{ course.instructor }}
      </p>

      <!-- HOL 3: Built-in ngStyle directive -->
      <div class="status-indicator" [ngStyle]="{
        'border-left': '4px solid ' + (isEnrolled ? '#059669' : '#94a3b8')
      }">
        {{ isEnrolled ? '✓ Enrolled' : 'Not Enrolled' }}
      </div>

      <div class="actions">
        <a [routerLink]="['/courses', course.id]" class="btn btn-secondary btn-sm">View Details</a>
        
        <!-- HOL 2 Step 26: @Output() event emission on click -->
        <button 
          class="btn btn-sm" 
          [class.btn-primary]="!isEnrolled" 
          [class.btn-danger]="isEnrolled"
          (click)="onToggleEnrollment()">
          {{ isEnrolled ? 'Unenroll' : 'Enroll Now' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .course-card {
      display: flex; flex-direction: column; gap: 0.75rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .course-card:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .code { font-weight: 700; color: var(--primary); font-size: 0.85rem; letter-spacing: 0.05em; }
    .title { font-size: 1.15rem; font-weight: 600; color: var(--text); }
    .credits, .instructor { font-size: 0.9rem; color: var(--text-muted); }
    .status-indicator { padding: 0.25rem 0.5rem; font-size: 0.8rem; font-weight: 500; background: #f1f5f9; border-radius: 0 4px 4px 0; }
    .actions { display: flex; gap: 0.5rem; margin-top: auto; padding-top: 0.5rem; }
    .btn-sm { padding: 0.4rem 0.8rem; font-size: 0.85rem; }
  `]
})
export class CourseCardComponent {
  // HOL 2 Step 24: @Input() decorator
  @Input({ required: true }) course!: Course;
  @Input() isEnrolled = false;

  // HOL 2 Step 26: @Output() EventEmitter decorator
  @Output() enrollToggle = new EventEmitter<number>();

  onToggleEnrollment(): void {
    this.enrollToggle.emit(this.course.id);
  }
}
