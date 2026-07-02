import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind-aware className combiner (shadcn convention). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number of NPR rupees as a localized "Rs." price. 0 = on request. */
export function formatNpr(amount: number): string {
  if (!amount || amount <= 0) return 'Price on request';
  return `Rs. ${amount.toLocaleString('en-IN')}`;
}

/** Compact NPR: 43,99,000 -> "43.99 Lakh". */
export function formatLakh(amount: number): string {
  if (!amount || amount <= 0) return 'On request';
  const lakh = amount / 100000;
  return `${lakh % 1 === 0 ? lakh : lakh.toFixed(2)} Lakh`;
}

/** Flat-rate EMI estimate: monthly payment for a reducing-balance loan. */
export function calcEmi(principal: number, annualRatePct: number, months: number): number {
  const r = annualRatePct / 12 / 100;
  if (r === 0) return principal / months;
  const f = Math.pow(1 + r, months);
  return (principal * r * f) / (f - 1);
}
