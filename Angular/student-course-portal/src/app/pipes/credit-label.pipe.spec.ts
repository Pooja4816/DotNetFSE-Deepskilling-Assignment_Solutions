import { CreditLabelPipe } from './credit-label.pipe';

describe('CreditLabelPipe (HOL 10 Unit Tests)', () => {
  let pipe: CreditLabelPipe;

  beforeEach(() => {
    pipe = new CreditLabelPipe();
  });

  it('should transform 1 to "1 Credit"', () => {
    expect(pipe.transform(1)).toBe('1 Credit');
  });

  it('should transform 3 to "3 Credits"', () => {
    expect(pipe.transform(3)).toBe('3 Credits');
  });

  it('should transform 0 or null to "No Credits"', () => {
    expect(pipe.transform(0)).toBe('No Credits');
    expect(pipe.transform(null)).toBe('No Credits');
  });
});
