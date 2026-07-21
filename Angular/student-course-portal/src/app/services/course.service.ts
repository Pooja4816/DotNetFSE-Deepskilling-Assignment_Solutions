import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  // HOL 8: getCourses with RxJS operators chain
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // HOL 8 Step 85: tap for side effects (logging) - never modify data inside tap
      tap((courses) => console.log('Courses loaded:', courses.length)),
      // HOL 8 Step 83: map to transform/filter API response
      map((courses) => courses.filter((c) => c.credits > 0)),
      // HOL 8 Step 86: retry 2 times before propagating error
      retry(2),
      // HOL 8 Step 84: catchError for graceful error handling
      catchError((err) => {
        console.error('CourseService error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError((err) =>
        throwError(() => new Error(`Course ${id} not found: ${err.message}`))
      )
    );
  }

  // HOL 8 Step 81: POST to create course
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  // HOL 8 Step 82: PUT to update course
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  // HOL 8 Step 82: DELETE to remove course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // HOL 8 Step 87: Used with switchMap to load enrolled students per course
  getStudentsByCourse(courseId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:3000/enrollments?courseId=${courseId}`).pipe(
      catchError(() => throwError(() => new Error('Failed to load students')))
    );
  }
}
