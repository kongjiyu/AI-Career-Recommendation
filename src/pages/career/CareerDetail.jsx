import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCareers } from '../../data/mockCareers';
import { ArrowLeft, CheckCircle, XCircle, TrendingUp, DollarSign, Calendar, BookOpen, Heart, Building, ExternalLink } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CareerDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = React.useState(false);
    const career = mockCareers.find(c => c.id === parseInt(id)) || mockCareers[0]; // Fallback for dev

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recommendations
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-bold text-primary-highlight">{career.title}</h1>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsSaved(!isSaved)}
                                className={`h-8 w-8 p-0 rounded-full transition-colors ${isSaved ? 'bg-red-50 border-red-200 text-red-500 hover:text-red-600 hover:bg-red-100' : 'text-slate-400 hover:text-red-500'}`}
                            >
                                <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-4 text-slate-600">
                            <span className="flex items-center gap-1"><TrendingUp className="h-4 w-4" /> {career.outlook}</span>

                            <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4" />
                                <span>{career.salaryRange}</span>
                                <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden ml-2">
                                    <div className="h-full bg-green-500 rounded-full w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900">{career.matchScore}%</div>
                            <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Compatibility</div>
                        </div>
                        <div className="relative h-16 w-16">
                            <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                                <path
                                    className="text-slate-100"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                                <path
                                    className="text-primary-accent transition-all duration-1000 ease-out"
                                    strokeDasharray={`${career.matchScore}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {career.topCompanies?.map((company, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors group cursor-pointer">
                                            <div className="h-10 w-10 rounded bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:text-primary-highlight group-hover:border-primary-highlight/30 transition-colors">
                                                {company.charAt(0)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-slate-800 text-sm">{company}</div>
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    View Roles <ExternalLink className="h-2 w-2" />
                                                </div>
                                            </div>
                                        </div>
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
                                    <div key={i} className="flex items-center justify-between group">
                                        <span className="text-slate-600">{skill}</span>
                                        {i % 2 === 0 ? (
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <div className="relative">
                                                <span className="text-xs text-orange-600 font-medium px-2 py-0.5 bg-orange-50 rounded border border-orange-100 cursor-help hover:bg-orange-100 transition-colors whitespace-nowrap shrink-0">
                                                    To Learn
                                                </span>
                                                <div className="absolute right-0 top-full mt-2 w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                                    Recommended: Complete "Advanced {skill}" module.
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 border-none text-white">
                            <CardContent className="p-6 space-y-4 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <BookOpen className="h-32 w-32 text-white" />
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <h3 className="font-bold text-lg text-white">Ready to start?</h3>
                                    <p className="text-slate-300 text-sm">
                                        Bridge your skill gaps with our curated learning paths designed for <strong>{career.title}</strong>.
                                    </p>
                                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-lg" onClick={() => navigate('/learning/roadmap')}>
                                        <BookOpen className="mr-2 h-4 w-4" /> Start Learning Path
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
