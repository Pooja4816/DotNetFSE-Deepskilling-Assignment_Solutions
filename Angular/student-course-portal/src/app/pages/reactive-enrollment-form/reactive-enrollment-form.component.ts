import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';

/**
 * HOL 5 Step 56-60: Custom Validator function
 * Validates that student email must end with .edu
 */
export function eduEmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return value.endsWith('.edu') ? null : { eduOnly: true };
}

/**
 * HOL 5: ReactiveEnrollmentFormComponent
 * Demonstrates:
 * - ReactiveFormsModule & FormBuilder
 * - Dynamic FormArray for extra emergency contacts
 * - Custom validator (eduEmailValidator)
 * - CanComponentDeactivate guard implementation
 * - Value & status changes RxJS streams
 */
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="card form-card">
        <h2>Reactive Course Enrollment Form (HOL 5)</h2>
        <p class="subtitle">Advanced reactive form with custom validation, FormArray, and route guard protection</p>

        <!-- HOL 5 Step 56: formGroup binding -->
        <form [formGroup]="enrollmentForm" (ngSubmit)="onSubmit()" novalidate>
          
          <div class="form-group">
            <label class="form-label" for="studentName">Student Full Name *</label>
            <input
              type="text"
              id="studentName"
              formControlName="studentName"
              class="form-control"
              placeholder="e.g. Alice Johnson"
            />
            <div *ngIf="isInvalid('studentName')" class="error-msg">
              <span *ngIf="getError('studentName', 'required')">Full name is required.</span>
              <span *ngIf="getError('studentName', 'minlength')">Name must be at least 3 characters.</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="studentEmail">University Email (.edu only) *</label>
            <input
              type="email"
              id="studentEmail"
              formControlName="studentEmail"
              class="form-control"
              placeholder="e.g. alice@university.edu"
            />
            <div *ngIf="isInvalid('studentEmail')" class="error-msg">
              <span *ngIf="getError('studentEmail', 'required')">Email is required.</span>
              <span *ngIf="getError('studentEmail', 'email')">Invalid email format.</span>
              <!-- HOL 5 Step 60: Custom validator error message -->
              <span *ngIf="getError('studentEmail', 'eduOnly')">Must be an official .edu university email.</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="courseId">Course Selection *</label>
            <select id="courseId" formControlName="courseId" class="form-control">
              <option [ngValue]="null" disabled>-- Select a course --</option>
              <option [ngValue]="1">CS101 - Data Structures (4 Credits)</option>
              <option [ngValue]="2">WD201 - Web Development (3 Credits)</option>
              <option [ngValue]="3">DB301 - Database Systems (4 Credits)</option>
              <option [ngValue]="4">ML401 - Machine Learning (3 Credits)</option>
              <option [ngValue]="5">SE501 - Software Engineering (4 Credits)</option>
            </select>
            <div *ngIf="isInvalid('courseId')" class="error-msg">
              Course selection is required.
            </div>
          </div>

          <!-- HOL 5: FormArray demo — Dynamic Emergency Contacts -->
          <div class="form-section">
            <div class="section-header">
              <label class="form-label mb-0">Emergency Contacts (Dynamic FormArray)</label>
              <button type="button" (click)="addContact()" class="btn btn-secondary btn-sm">+ Add Contact</button>
            </div>

            <div formArrayName="emergencyContacts" class="contacts-list">
              <div *ngFor="let contact of contactsArray.controls; let i = index" [formGroupName]="i" class="contact-row">
                <input type="text" formControlName="name" class="form-control" placeholder="Contact Name" />
                <input type="tel" formControlName="phone" class="form-control" placeholder="Phone Number" />
                <button type="button" (click)="removeContact(i)" class="btn btn-danger btn-sm">✕</button>
              </div>
            </div>
          </div>

          <div class="form-group checkbox-group">
            <label>
              <input type="checkbox" formControlName="agreeToTerms" />
              I declare that all provided details are accurate *
            </label>
            <div *ngIf="isInvalid('agreeToTerms')" class="error-msg">
              You must agree to continue.
            </div>
          </div>

          <div class="form-actions">
            <!-- HOL 5 Step 59: Disabled button state for invalid form -->
            <button type="submit" class="btn btn-primary" [disabled]="enrollmentForm.invalid">
              Submit Application
            </button>
            <button type="button" (click)="resetForm()" class="btn btn-secondary">
              Reset Form
            </button>
          </div>
        </form>

        <div *ngIf="submitted" class="success-banner card">
          🎉 Reactive enrollment submitted for <strong>{{ enrollmentForm.value.studentName }}</strong>!
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-card { max-width: 650px; margin: 0 auto; padding: 2.5rem; }
    h2 { font-size: 1.5rem; font-weight: 700; color: var(--text); }
    .subtitle { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.95rem; }
    .form-section { border: 1px solid var(--border); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
    .mb-0 { margin-bottom: 0; }
    .contacts-list { display: flex; flex-direction: column; gap: 0.75rem; }
    .contact-row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 0.5rem; }
    .checkbox-group { margin: 1.5rem 0; }
    .checkbox-group label { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; font-size: 0.9rem; }
    .form-actions { display: flex; gap: 1rem; margin-top: 1.5rem; }
    .error-msg { color: var(--danger); font-size: 0.825rem; margin-top: 0.35rem; font-weight: 500; }
    .success-banner { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; margin-top: 1.5rem; padding: 1rem; text-align: center; }
    .btn-sm { padding: 0.3rem 0.6rem; font-size: 0.8rem; }
  `]
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollmentForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    // HOL 5 Step 57: FormBuilder group initialization
    this.enrollmentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // HOL 5 Step 60: Custom eduEmailValidator applied alongside built-in validators
      studentEmail: ['', [Validators.required, Validators.email, eduEmailValidator]],
      courseId: [null, [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]],
      // FormArray for dynamic items
      emergencyContacts: this.fb.array([
        this.createContactGroup(),
      ]),
    });

    // HOL 5 Step 58: Log value and status changes for demonstration
    this.enrollmentForm.valueChanges.subscribe((val) => console.log('Form value:', val));
    this.enrollmentForm.statusChanges.subscribe((status) => console.log('Form status:', status));
  }

  get contactsArray(): FormArray {
    return this.enrollmentForm.get('emergencyContacts') as FormArray;
  }

  createContactGroup(): FormGroup {
    return this.fb.group({
      name: [''],
      phone: [''],
    });
  }

  addContact(): void {
    this.contactsArray.push(this.createContactGroup());
  }

  removeContact(index: number): void {
    if (this.contactsArray.length > 1) {
      this.contactsArray.removeAt(index);
    }
  }

  isInvalid(controlName: string): boolean {
    const ctrl = this.enrollmentForm.get(controlName);
    return !!(ctrl && ctrl.invalid && (ctrl.touched || ctrl.dirty));
  }

  getError(controlName: string, errorName: string): boolean {
    const ctrl = this.enrollmentForm.get(controlName);
    return !!(ctrl && ctrl.hasError(errorName));
  }

  // HOL 7: Guard interface implementation — returns false if form is dirty and unsaved
  canDeactivate(): boolean {
    if (this.enrollmentForm.dirty && !this.submitted) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    if (this.enrollmentForm.valid) {
      this.submitted = true;
      const courseId = this.enrollmentForm.value.courseId;
      this.store.dispatch(enrollInCourse({ courseId }));
      this.enrollmentForm.markAsPristine();
    }
  }

  resetForm(): void {
    this.enrollmentForm.reset();
    this.submitted = false;
  }
}
