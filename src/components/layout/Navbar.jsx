import React, { useState } from 'react';
import { Sparkles, LayoutDashboard, Settings, MessageCircle, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Navbar() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
    const [showChat, setShowChat] = useState(false);

    const mockMessages = [
        { id: 1, sender: 'Dr. Sarah Chen', text: 'Great progress on the python course!', time: '2m ago', avatar: 'bg-blue-100' },
        { id: 2, sender: 'System', text: 'Your mentor session is confirmed.', time: '1h ago', avatar: 'bg-slate-100' },
        { id: 3, sender: 'Emily Davis', text: 'Don\'t forget to submit the assignment.', time: '5h ago', avatar: 'bg-purple-100' },
    ];

    return (
        <nav className="border-b border-secondary-surface bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
                <Link to="/" className="flex items-center space-x-2">
                    <Sparkles className="h-6 w-6 text-primary-accent" />
                    <span className="text-xl font-display font-bold text-primary-highlight">CareerAI</span>
                </Link>

                {!isLoginPage && (
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                            Dashboard
                        </Link>
                        <Link to="/learning/courses" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                            Courses
                        </Link>
                        <Link to="/mentorship/find" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                            Mentors
                        </Link>
                        <Link to="/jobs/find" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                            Jobs
                        </Link>
                        <Link to="/assessment" className="text-sm font-medium text-slate-600 hover:text-primary-highlight transition-colors">
                            Assessment
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
                        <div className="flex items-center gap-4">
                            {/* Chat Icon */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowChat(!showChat)}
                                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
                                </button>

                                {/* Chat Popover */}
                                {showChat && (
                                    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 overflow-hidden">
                                        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                            <h3 className="font-bold text-slate-900">Messages</h3>
                                            <button onClick={() => setShowChat(false)} className="text-slate-400 hover:text-slate-600">
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div className="max-h-80 overflow-y-auto">
                                            {mockMessages.map(msg => (
                                                <div key={msg.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-3">
                                                    <div className={`h-10 w-10 rounded-full ${msg.avatar} flex items-center justify-center shrink-0 text-xs font-bold text-slate-600`}>
                                                        {msg.sender.charAt(0)}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex justify-between items-start mb-0.5">
                                                            <p className="font-semibold text-sm text-slate-900 truncate">{msg.sender}</p>
                                                            <span className="text-[10px] text-slate-400 whitespace-nowrap">{msg.time}</span>
                                                        </div>
                                                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{msg.text}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-3 bg-slate-50/50 border-t border-slate-100 text-center">
                                            <button className="text-xs font-bold text-primary-accent hover:underline">View All Messages</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm font-bold text-slate-900">Kong Ji Yu</p>
                                </div>
                                <div className="h-9 w-9 bg-primary-accent/10 rounded-full flex items-center justify-center text-primary-accent font-bold">
                                    KJ
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
