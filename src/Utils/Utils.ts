import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function maxLenString(desc: string, maxLength: number = 30) {
  let trimmed = desc;
  if (desc.length > maxLength) {
    trimmed = desc.substring(0, maxLength - 3);
    trimmed = trimmed + '...';
  }
  return trimmed;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { maxLenString, cn };
