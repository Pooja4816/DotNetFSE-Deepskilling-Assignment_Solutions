import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

// HOL 6: EnrollmentService - demonstrates service-to-service injection
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [2, 5]; // Pre-seeded

  // HOL 6 Step 64: Injecting CourseService into EnrollmentService
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  // Returns full Course objects for enrolled IDs
  // Uses hardcoded fallback since HTTP is async; real app would use Observable
  getEnrolledCourses(): Course[] {
    const fallbackCourses: Course[] = [
      { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
      { id: 2, name: 'Web Development', code: 'WD201', credits: 3, gradeStatus: 'pending' },
      { id: 3, name: 'Database Systems', code: 'DB301', credits: 4, gradeStatus: 'passed' },
      { id: 4, name: 'Machine Learning', code: 'ML401', credits: 3, gradeStatus: 'failed' },
      { id: 5, name: 'Software Engineering', code: 'SE501', credits: 4, gradeStatus: 'pending' },
    ];
    return fallbackCourses.filter((c) => this.enrolledCourseIds.includes(c.id));
  }
}
