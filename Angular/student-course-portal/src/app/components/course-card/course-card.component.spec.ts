import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
import { provideRouter } from '@angular/router';
import { Course } from '../../models/course.model';

describe('CourseCardComponent (HOL 10 Unit Tests)', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create the course card component', () => {
    expect(component).toBeTruthy();
  });

  it('should render course title and code', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Data Structures');
    expect(compiled.querySelector('.code')?.textContent).toContain('CS101');
  });

  it('should emit enrollToggle event on button click', () => {
    spyOn(component.enrollToggle, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button?.click();
    expect(component.enrollToggle.emit).toHaveBeenCalledWith(1);
  });
});
