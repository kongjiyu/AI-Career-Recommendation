import React from 'react';
import { Sparkles, LayoutDashboard, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
    return (
        <nav className="border-b border-secondary-surface bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-primary-accent" />
                    <span className="text-xl font-display font-bold text-primary-highlight">CareerAI</span>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                        Home
                    </Link>
                    <Link to="/assessment" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                        Assessment
                    </Link>
                    <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                        Dashboard
                    </Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="hidden md:flex">
                        Sign In
                    </Button>
                    <Button size="sm">
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}
