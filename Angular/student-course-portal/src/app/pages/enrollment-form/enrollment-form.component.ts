import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EnrollmentRequest } from '../../models/enrollment.model';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';

/**
 * HOL 4 & 5: EnrollmentFormComponent (Template-Driven Form)
 * Demonstrates:
 * - FormsModule & [(ngModel)] two-way binding
 * - Template reference variable #enrollmentForm="ngForm"
 * - Template-driven validation directives (required, email)
 * - Form submission and reset handling
 */
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="card form-card">
        <h2>Course Enrollment Form (Template-Driven)</h2>
        <p class="subtitle">Complete the form below to apply for course enrollment</p>

        <!-- HOL 4 Step 42: #enrollmentForm="ngForm" & ngSubmit binding -->
        <form #enrollmentForm="ngForm" (ngSubmit)="onSubmit(enrollmentForm)" novalidate>
          
          <!-- HOL 4 Step 43: Fieldset / ngModelGroup demo -->
          <fieldset ngModelGroup="studentDetails" class="form-section">
            <legend>Student Information</legend>

            <div class="form-group">
              <label class="form-label" for="studentName">Full Name *</label>

              <!-- HOL 4 & 5: [(ngModel)], required, minlength, template ref variable #nameInput -->
              <input
                type="text"
                id="studentName"
                name="studentName"
                class="form-control"
                [(ngModel)]="formData.studentName"
                #nameInput="ngModel"
                required
                minlength="3"
              />

              <!-- HOL 5 Step 52: Validation feedback using ngIf and touched/dirty state -->
              <div *ngIf="nameInput.invalid && (nameInput.touched || nameInput.dirty)" class="error-msg">
                <span *ngIf="nameInput.errors?.['required']">Full name is required.</span>
                <span *ngIf="nameInput.errors?.['minlength']">Name must be at least 3 characters.</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="studentEmail">Email Address *</label>
              
              <!-- HOL 4 & 5: [(ngModel)], required, email validator -->
              <input
                type="email"
                id="studentEmail"
                name="studentEmail"
                class="form-control"
                [(ngModel)]="formData.studentEmail"
                #emailInput="ngModel"
                required
                email
              />

              <div *ngIf="emailInput.invalid && (emailInput.touched || emailInput.dirty)" class="error-msg">
                <span *ngIf="emailInput.errors?.['required']">Email address is required.</span>
                <span *ngIf="emailInput.errors?.['email']">Please enter a valid email address.</span>
              </div>
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>Course Details</legend>

            <div class="form-group">
              <label class="form-label" for="courseSelect">Select Course *</label>
              <select
                id="courseSelect"
                name="courseId"
                class="form-control"
                [(ngModel)]="formData.courseId"
                #courseInput="ngModel"
                required
              >
                <option [ngValue]="null" disabled>-- Select a course --</option>
                <option [ngValue]="1">CS101 - Data Structures (4 Credits)</option>
                <option [ngValue]="2">WD201 - Web Development (3 Credits)</option>
                <option [ngValue]="3">DB301 - Database Systems (4 Credits)</option>
                <option [ngValue]="4">ML401 - Machine Learning (3 Credits)</option>
                <option [ngValue]="5">SE501 - Software Engineering (4 Credits)</option>
              </select>

              <div *ngIf="courseInput.invalid && (courseInput.touched || courseInput.dirty)" class="error-msg">
                Course selection is required.
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="semester">Preferred Semester *</label>
              <select
                id="semester"
                name="preferredSemester"
                class="form-control"
                [(ngModel)]="formData.preferredSemester"
                required
              >
                <option value="Odd">Odd Semester (Fall)</option>
                <option value="Even">Even Semester (Spring)</option>
              </select>
            </div>
          </fieldset>

          <div class="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                [(ngModel)]="formData.agreeToTerms"
                required
              />
              I agree to the university enrollment terms and conditions *
            </label>
          </div>

          <div class="form-actions">
            <!-- HOL 5 Step 54: Submit button disabled if form is invalid -->
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="enrollmentForm.invalid"
            >
              Submit Application
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              (click)="onReset(enrollmentForm)"
            >
              Reset Form
            </button>
          </div>
        </form>

        <div *ngIf="submitted" class="success-banner card">
          ✅ Enrollment application submitted successfully for <strong>{{ submittedData?.studentName }}</strong>!
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-card { max-width: 650px; margin: 0 auto; padding: 2.5rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: var(--text); }
    .subtitle { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem; }
    .form-section { border: 1px solid var(--border); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; }
    .form-section legend { font-weight: 600; color: var(--primary); padding: 0 0.5rem; font-size: 0.95rem; }
    .checkbox-group { margin: 1.5rem 0; }
    .checkbox-group label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.9rem; }
    .form-actions { display: flex; gap: 1rem; margin-top: 1.5rem; }
    .error-msg { color: var(--danger); font-size: 0.825rem; margin-top: 0.35rem; font-weight: 500; }
    .success-banner { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; margin-top: 1.5rem; padding: 1rem; text-align: center; }
  `]
})
export class EnrollmentFormComponent {
  formData: EnrollmentRequest = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false,
  };

  submitted = false;
  submittedData: EnrollmentRequest | null = null;

  constructor(private store: Store, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid && this.formData.courseId) {
      this.submitted = true;
      this.submittedData = { ...this.formData };
      
      // Dispatch NgRx action to enroll in state
      this.store.dispatch(enrollInCourse({ courseId: this.formData.courseId }));
      
      // Reset form after submit
      form.resetForm({ preferredSemester: 'Odd', agreeToTerms: false });
    }
  }

  onReset(form: NgForm): void {
    form.resetForm({ preferredSemester: 'Odd', agreeToTerms: false });
    this.submitted = false;
  }
}
