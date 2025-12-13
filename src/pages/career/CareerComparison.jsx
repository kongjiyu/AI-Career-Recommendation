import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCareers } from '../../data/mockCareers';
import { ArrowLeft, Check, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CareerComparison() {
    const navigate = useNavigate();
    // Simulate comparing top 3 careers for prototype
    const careers = mockCareers.slice(0, 3);

    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                <Button variant="ghost" onClick={() => navigate('/career/results')} className="mb-4 pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary-highlight">Compare Careers</h1>
                    <p className="text-slate-600 mt-2">Analytical side-by-side comparison to help you decide.</p>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-4 gap-4">
                            {/* Header Column (Labels) */}
                            <div className="col-span-1 space-y-8">
                                <div className="h-32 w-full"></div> {/* Spacer to match Card height */}
                                <div className="h-10 text-sm font-medium text-slate-500 uppercase flex items-center">Match Score</div>
                                <div className="h-10 text-sm font-medium text-slate-500 uppercase flex items-center">Salary Range</div>
                                <div className="h-10 text-sm font-medium text-slate-500 uppercase flex items-center">Market Outlook</div>
                            </div>

                            {/* Career Columns */}
                            {careers.map(career => (
                                <div key={career.id} className="col-span-1 space-y-8">
                                    <div className="h-32 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center">
                                        <h3 className="font-bold text-primary-highlight">{career.title}</h3>
                                        <Button size="sm" variant="outline" onClick={() => navigate(`/career/${career.id}`)}>
                                            View Details
                                        </Button>
                                    </div>

                                    <div className="h-10 flex items-center justify-center font-bold text-2xl text-primary-accent">
                                        {career.matchScore}%
                                    </div>
                                    <div className="h-10 flex items-center justify-center text-slate-700 font-medium">
                                        {career.salaryRange}
                                    </div>
                                    <div className="h-10 flex items-center justify-center">
                                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                            {career.outlook}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Skills Row */}
                            <div className="col-span-1 py-4 text-sm font-medium text-slate-500 uppercase">Top Skills</div>
                            {careers.map(career => (
                                <div key={`skills-${career.id}`} className="col-span-1 py-4 flex flex-col gap-2">
                                    {career.requiredSkills.map(skill => (
                                        <div key={skill} className="text-sm text-slate-600 bg-slate-50 px-2 py-1 rounded text-center">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            ))}

                            {/* Daily Tasks Row - truncated for view */}
                            <div className="col-span-1 py-4 text-sm font-medium text-slate-500 uppercase">Primary Focus</div>
                            {careers.map(career => (
                                <div key={`desc-${career.id}`} className="col-span-1 py-4">
                                    <p className="text-sm text-slate-600 text-center italic">
                                        {career.description.substring(0, 60)}...
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
