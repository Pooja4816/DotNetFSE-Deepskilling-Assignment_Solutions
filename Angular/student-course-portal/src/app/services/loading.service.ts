import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// HOL 8: LoadingService - used by loading interceptor and global spinner
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  show(): void { this.loadingSubject.next(true); }
  hide(): void { this.loadingSubject.next(false); }
}
