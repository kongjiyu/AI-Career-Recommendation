import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Star } from 'lucide-react';

const DemoNav = () => {
    const modules = [
        {
            title: 'Module 1: Skill & Interest Assessment',
            links: [
                { name: 'Login / Landing', path: '/' },
                { name: 'Profile Setup', path: '/setup' },
                { name: 'Portfolio Upload', path: '/upload-portfolio' },
                { name: 'Assessment', path: '/assessment', highlight: true },
                { name: 'Assessment Summary', path: '/assessment-summary', highlight: true },
            ]
        },
        {
            title: 'Module 2: AI Career Matching',
            links: [
                { name: 'Career Recommendations', path: '/career/results', highlight: true },
                { name: 'Career Detail (Mock ID)', path: '/career/1', highlight: true },
                { name: 'Career Comparison', path: '/career/compare' },
            ]
        },
        {
            title: 'Module 3: Learning Recommendation',
            links: [
                { name: 'Skill Gap Analysis', path: '/learning/analysis' },
                { name: 'Course Catalog', path: '/learning/courses', highlight: true },
                { name: 'Course Detail (Mock ID)', path: '/learning/course/1', highlight: true },
                { name: 'Learning Roadmap', path: '/learning/roadmap' },
            ]
        },
        {
            title: 'Module 4: Mentorship & Job Portal',
            links: [
                { name: 'Mentor Listing', path: '/mentorship/find', highlight: true },
                { name: 'Mentor Profile (Mock ID)', path: '/mentorship/1' },
                { name: 'Schedule Session (Mock ID)', path: '/mentorship/1/schedule' },
                { name: 'Job Listing', path: '/jobs/find', highlight: true },
                { name: 'Job Detail (Mock ID)', path: '/jobs/1' },
                { name: 'Job Application (Mock ID)', path: '/jobs/1/apply' },
            ]
        },
        {
            title: 'Module 5: Progress Dashboard',
            links: [
                { name: 'User Dashboard (Main)', path: '/dashboard', highlight: true },
                { name: 'Skill Progress', path: '/dashboard/progress' },
                { name: 'Career Readiness', path: '/dashboard/readiness', highlight: true },
                { name: 'Achievements', path: '/dashboard/achievements' },
                { name: 'Notifications', path: '/dashboard/notifications' },
            ]
        },
        {
            title: 'Module 6: Counsellor Portal',
            links: [
                { name: 'Counsellor Dashboard', path: '/counsellor/dashboard', highlight: true },
                { name: 'Student Detail (Mock ID)', path: '/counsellor/student/1', highlight: true },
            ]
        }
    ];

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8 py-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900">Prototype Navigation Map</h1>
                    <p className="text-slate-600 mt-2">Quick access to all pages for demonstration purposes</p>
                </div>

                <div className="grid gap-6">
                    {modules.map((module, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="text-xl text-primary-accent">{module.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {module.links.map((link, linkIndex) => (
                                        <Link
                                            key={linkIndex}
                                            to={link.path}
                                            className={`block p-4 rounded-lg border transition-all relative ${link.highlight
                                                ? 'bg-white border-primary-accent shadow-sm hover:shadow-md'
                                                : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                                }`}
                                        >
                                            {link.highlight && (
                                                <div className="absolute top-3 right-3">
                                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                                </div>
                                            )}
                                            <span className={`font-medium ${link.highlight ? 'text-primary-accent' : 'text-slate-700'}`}>
                                                {link.name}
                                            </span>
                                            <span className="block text-xs text-slate-400 font-normal mt-1">{link.path}</span>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default DemoNav;
