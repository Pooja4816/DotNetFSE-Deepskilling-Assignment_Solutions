import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AppNotification {
  message: string;
  type: 'success' | 'error' | 'info';
}

/**
 * HOL 6 Step 67: NotificationService — component-level provider demo.
 * When provided at component level (providers: [NotificationService] in @Component),
 * Angular creates a NEW, separate instance scoped to that component and its children.
 * This is different from root-level (singleton) services.
 * Use case: isolated notification state per component instance (e.g. multi-step form wizard).
 */
@Injectable()
export class NotificationService {
  private notificationSubject = new BehaviorSubject<AppNotification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  show(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    this.notificationSubject.next({ message, type });
    setTimeout(() => this.clear(), 4000);
  }

  clear(): void {
    this.notificationSubject.next(null);
  }
}
