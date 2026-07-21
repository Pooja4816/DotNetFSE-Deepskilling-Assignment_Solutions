import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

// HOL 7 Step 77: CanDeactivate guard — prevents accidental loss of dirty form data
// Prompts user if they try to leave with unsaved changes
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.canDeactivate && !component.canDeactivate()) {
    return window.confirm('You have unsaved changes. Are you sure you want to leave?');
  }
  return true;
};
