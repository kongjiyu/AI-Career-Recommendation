import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCareers } from '../../data/mockCareers';
import { ArrowRight, Filter, TrendingUp, DollarSign, Briefcase, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function CareerDashboard() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const filteredCareers = filter === 'All'
        ? mockCareers
        : mockCareers.filter(c => c.matchScore >= 80); // Simple example filter

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Recommended Careers</h1>
                        <p className="text-slate-600 mt-2">
                            AI-curated recommendations based on your unique profile.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={filter === 'All' ? 'primary' : 'outline'}
                            onClick={() => setFilter('All')}
                            size="sm"
                        >
                            All Matches
                        </Button>
                        <Button
                            variant={filter === 'Top' ? 'primary' : 'outline'}
                            onClick={() => setFilter('Top')}
                            size="sm"
                        >
                            Top Matches Only
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6">
                    {filteredCareers.map((career) => (
                        <Card key={career.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-primary-highlight">{career.title}</h3>
                                                <span className={cn(
                                                    "px-2 py-1 rounded-full text-xs font-medium",
                                                    career.matchScore >= 90 ? "bg-green-100 text-green-700" :
                                                        career.matchScore >= 80 ? "bg-blue-100 text-blue-700" :
                                                            "bg-yellow-100 text-yellow-700"
                                                )}>
                                                    {career.matchScore}% Match
                                                </span>
                                            </div>
                                            <p className="text-slate-600 line-clamp-2">{career.description}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-1">
                                                <Briefcase className="h-4 w-4" />
                                                {career.outlook}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="h-4 w-4" />
                                                {career.salaryRange}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {career.requiredSkills.slice(0, 3).map(skill => (
                                                <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                                                    {skill}
                                                </span>
                                            ))}
                                            {career.requiredSkills.length > 3 && (
                                                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                                                    +{career.requiredSkills.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 pt-2 border-t border-slate-100 mt-3">
                                            <Building2 className="h-4 w-4 text-slate-400" />
                                            <span className="font-medium text-slate-700">Hiring:</span>
                                            {career.topCompanies?.slice(0, 3).join(', ')}
                                            {career.topCompanies?.length > 3 && (
                                                <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">+{career.topCompanies.length - 3}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex md:flex-col justify-end gap-3 md:min-w-[140px]">
                                        <Button onClick={() => navigate(`/career/${career.id}`)}>
                                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" onClick={() => navigate('/career/compare')}>
                                            Compare
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
