import React from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-primary-base flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="border-t border-secondary-surface py-6 text-center text-sm text-slate-500">
                <div className="container mx-auto px-4">
                    © 2024 AI Career Guidance. Prototype Environment.
                </div>
            </footer>
        </div>
    );
}
