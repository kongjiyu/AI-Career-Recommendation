import React from 'react';
import { Sparkles, LayoutDashboard, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

    return (
        <nav className="border-b border-secondary-surface bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-primary-accent" />
                    <span className="text-xl font-display font-bold text-primary-highlight">CareerAI</span>
                </Link>

                {!isLoginPage && (
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
                )}

                <div className="flex items-center space-x-4">
                    {isLoginPage ? (
                        <>
                            <Button variant="ghost" size="sm" className="hidden md:flex">
                                Sign In
                            </Button>
                            <Button size="sm">
                                Get Started
                            </Button>
                        </>
                    ) : (
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-900">Kong Ji Yu</p>
                            </div>
                            <div className="h-9 w-9 bg-primary-accent/10 rounded-full flex items-center justify-center text-primary-accent font-bold">
                                KJ
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
