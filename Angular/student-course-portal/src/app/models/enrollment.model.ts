export interface EnrollmentRequest {
  studentName: string;
  studentEmail: string;
  courseId: number | null;
  preferredSemester: string;
  agreeToTerms: boolean;
}
