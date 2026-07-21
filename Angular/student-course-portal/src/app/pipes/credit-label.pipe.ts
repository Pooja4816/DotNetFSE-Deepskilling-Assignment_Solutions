import { Pipe, PipeTransform } from '@angular/core';

/**
 * HOL 3: Custom pipe — creditLabel
 * Transforms a credits number into a human-readable string.
 * Examples: 1 → '1 Credit', 3 → '3 Credits', null/0 → 'No Credits'
 */
@Pipe({
  name: 'creditLabel',
  standalone: true,
  pure: true,
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
