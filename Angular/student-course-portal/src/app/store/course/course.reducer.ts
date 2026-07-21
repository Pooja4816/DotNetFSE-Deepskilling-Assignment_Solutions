import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure, addCourse, removeCourse } from './course.actions';

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
};

export const courseReducer = createReducer(
  initialState,
  on(loadCourses, (state) => ({ ...state, loading: true, error: null })),
  on(loadCoursesSuccess, (state, { courses }) => ({ ...state, loading: false, courses })),
  on(loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(addCourse, (state, { course }) => ({ ...state, courses: [...state.courses, course] })),
  on(removeCourse, (state, { courseId }) => ({ ...state, courses: state.courses.filter(c => c.id !== courseId) }))
);
