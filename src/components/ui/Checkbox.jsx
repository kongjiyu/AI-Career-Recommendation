import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Checkbox({ checked, onCheckedChange, className, id }) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            id={id}
            onClick={() => onCheckedChange(!checked)}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-slate-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-accent data-[state=checked]:text-white data-[state=checked]:border-primary-accent transition-colors flex items-center justify-center",
                checked ? "bg-primary-accent border-primary-accent" : "bg-white",
                className
            )}
            data-state={checked ? 'checked' : 'unchecked'}
        >
            {checked && <Check className="h-3 w-3 text-white stroke-[3]" />}
        </button>
    );
}
