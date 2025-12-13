import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockMentors } from '../../data/mockMentorship';
import { ArrowLeft, Star, Briefcase, Globe, Calendar, CheckCircle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function MentorProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mentor = mockMentors.find(m => m.id === parseInt(id)) || mockMentors[0];

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/mentorship/find')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
                </Button>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column: Info Card */}
                    <div className="md:col-span-1 space-y-6">
                        <Card className="text-center p-6">
                            <CardContent className="flex flex-col items-center space-y-4 pt-4">
                                <div className={cn("h-32 w-32 rounded-full flex items-center justify-center text-4xl font-bold text-slate-700 mb-2", mentor.imageColor)}>
                                    {mentor.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{mentor.name}</h2>
                                    <p className="text-primary-accent font-medium">{mentor.role}</p>
                                    <p className="text-slate-500">at {mentor.company}</p>
                                </div>
                                <div className="flex items-center gap-1 text-sm bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-slate-800">{mentor.rating}</span>
                                    <span className="text-slate-500">({mentor.reviews} reviews)</span>
                                </div>
                                <Button className="w-full" onClick={() => navigate(`/mentorship/${mentor.id}/schedule`)}>
                                    Book a Session
                                </Button>
                                <div className="text-xs text-slate-400">
                                    Usually responds in 24 hours
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Skills & Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {mentor.expertise.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Details */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardContent className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">About Me</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {mentor.bio}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed mt-4">
                                        I'm passionate about helping others navigate the tech industry. Whether you need help with technical interview prep, system design mock interviews, or general career advice, I'm here to help.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">What I can help with</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span>Career progression at top tech companies</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span>Technical leadership and system design</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-slate-600">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span>Resume review and interview preparation</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
