import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getGrowthColor(outlook) {
    if (!outlook) return 'text-slate-700 bg-slate-100 border-slate-200';
    const lower = outlook.toLowerCase();
    if (lower.includes('very high')) return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (lower.includes('high')) return 'text-blue-700 bg-blue-50 border-blue-200';
    if (lower.includes('stable')) return 'text-amber-700 bg-amber-50 border-amber-200';
    return 'text-slate-700 bg-slate-100 border-slate-200';
}
