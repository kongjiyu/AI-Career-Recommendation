import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { User, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [role, setRole] = useState('student'); // 'student' | 'counsellor'
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        if (role === 'student') {
            navigate('/dashboard'); // Now redirects to the main Dashboard instead of Career Results
        } else {
            navigate('/counsellor/dashboard');
        }
    };

    return (
        <Layout>
            <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-primary-highlight mb-2">Welcome Back</h1>
                        <p className="text-slate-600">Sign in to access your AI Career Guidance system</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setRole('student')}
                            className={`p-4 rounded-lg border flex flex-col items-center space-y-2 transition-all ${role === 'student'
                                ? 'bg-primary-accent/10 border-primary-accent text-primary-accent'
                                : 'bg-primary-surface border-secondary-surface text-slate-500 hover:bg-primary-surface/80'
                                }`}
                        >
                            <User className="h-8 w-8" />
                            <span className="font-medium">Student</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setRole('counsellor')}
                            className={`p-4 rounded-lg border flex flex-col items-center space-y-2 transition-all ${role === 'counsellor'
                                ? 'bg-primary-accent/10 border-primary-accent text-primary-accent'
                                : 'bg-primary-surface border-secondary-surface text-secondary-surface hover:bg-primary-surface/80'
                                }`}
                        >
                            <ShieldCheck className="h-8 w-8" />
                            <span className="font-medium">Counsellor</span>
                        </button>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Login as {role === 'student' ? 'Student' : 'Counsellor'}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-primary-highlight">Email</label>
                                    <Input id="email" type="email" placeholder="name@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-medium text-primary-highlight">Password</label>
                                    <Input id="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Sign In <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <p className="text-center text-sm text-slate-500">
                        Don't have an account? <a href="#" className="text-primary-accent hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
}
