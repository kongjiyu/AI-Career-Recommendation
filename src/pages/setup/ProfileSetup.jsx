import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function ProfileSetup() {
    const navigate = useNavigate();

    const handleContinue = (e) => {
        e.preventDefault();
        navigate('/upload-portfolio');
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-primary-highlight">Profile Setup</h1>
                    <p className="text-slate-600 mt-2">
                        Let's build your profile to personalize your career guidance.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleContinue} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary-highlight">Education Level</label>
                                <select className={cn(
                                    "flex h-10 w-full rounded-md border border-secondary-surface bg-primary-base px-3 py-2 text-sm text-primary-highlight",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
                                )}>
                                    <option>Undergraduate</option>
                                    <option>Postgraduate</option>
                                    <option>High School</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary-highlight">Field of Study</label>
                                <Input placeholder="e.g. Computer Science, Business, Arts..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary-highlight">Career Goals</label>
                                <textarea
                                    className={cn(
                                        "flex min-h-[80px] w-full rounded-md border border-secondary-surface bg-primary-base px-3 py-2 text-sm text-primary-highlight",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
                                    )}
                                    placeholder="What are your aspirations? e.g. Become a Software Architect..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-primary-highlight">Top Skills (Comma separated)</label>
                                <Input placeholder="e.g. Python, Public Speaking, Leadership..." />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" className="w-full">
                                    Continue to Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
