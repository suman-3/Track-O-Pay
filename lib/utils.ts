import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertAmountFromMiliunits(amount: number) {
  return amount;
  // return amount / 1000;
}

export function convertAmountToMiliunits(amount: number) {
  // return Math.round(amount * 1000);
  return Math.round(amount);
}


export function formatCurrency ( value: number) { 
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(value)
}