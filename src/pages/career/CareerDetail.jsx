import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCareers } from '../../data/mockCareers';
import { ArrowLeft, CheckCircle, XCircle, TrendingUp, DollarSign, Calendar, BookOpen } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CareerDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const career = mockCareers.find(c => c.id === parseInt(id)) || mockCareers[0]; // Fallback for dev

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recommendations
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">{career.title}</h1>
                        <div className="flex gap-4 mt-4 text-slate-600">
                            <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4" /> {career.outlook}</span>
                            <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> {career.salaryRange}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-primary-accent">{career.matchScore}%</div>
                        <div className="text-sm text-slate-500">Compatibility Score</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>About this Role</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 leading-relaxed">
                                    {career.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>AI Fit Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-primary-accent/5 border border-primary-accent/20 rounded-lg p-4">
                                    <p className="text-primary-highlight font-medium">Why we recommended this:</p>
                                    <p className="text-slate-600 mt-2 italic">
                                        "{career.fitAnalysis}"
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Top Hiring Companies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {career.topCompanies?.map((company, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-100 rounded-lg text-slate-700 font-medium border border-slate-200">
                                            {company}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Typical Day</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6 relative ml-2">
                                    <div className="absolute left-[7px] top-6 bottom-6 w-0.5 bg-slate-200"></div>
                                    {career.typicalDay?.map((event, i) => (
                                        <div key={i} className="flex gap-4 relative">
                                            <div className="h-4 w-4 rounded-full border-2 border-primary-accent bg-white z-10 mt-1 shrink-0"></div>
                                            <div>
                                                <p className="text-xs font-bold text-primary-accent uppercase tracking-wide">{event.time}</p>
                                                <p className="text-slate-700 font-medium">{event.activity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Skill Requirements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {career.requiredSkills.map((skill, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-slate-600">{skill}</span>
                                        {i % 2 === 0 ? (
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <span className="text-xs text-orange-500 font-medium px-2 py-0.5 bg-orange-50 rounded">To Learn</span>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-none text-white">
                            <CardContent className="p-6 space-y-4">
                                <h3 className="font-bold text-lg text-white">Ready to start?</h3>
                                <p className="text-slate-300 text-sm">
                                    Bridge your skill gaps with our curated learning paths.
                                </p>
                                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" onClick={() => navigate('/learning/roadmap')}>
                                    <BookOpen className="mr-2 h-4 w-4" /> View Learning Path
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
