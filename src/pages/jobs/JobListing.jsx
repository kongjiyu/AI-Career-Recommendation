import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockJobs } from '../../data/mockMentorship';
import { Search, MapPin, DollarSign, Briefcase, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function JobListing() {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        type: [],
        level: [],
        location: [],
        salary: []
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const filteredJobs = mockJobs.filter(job => {
        const typeMatch = filters.type.length === 0 || filters.type.includes(job.type);
        const levelMatch = filters.level.length === 0 || filters.level.includes(job.level);

        // Simple mock location match logic
        const locationMatch = filters.location.length === 0 || filters.location.some(loc => {
            if (loc === 'Remote') return job.location.includes('Remote');
            if (loc === 'On-site') return !job.location.includes('Remote');
            return true;
        });

        // Simple mock salary match logic (not parsing ranges for prototype simplicity)
        const salaryMatch = filters.salary.length === 0 || true; // Placeholder for demo

        return typeMatch && levelMatch && locationMatch && salaryMatch;
    });

    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="text-center md:text-left bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
                    <h1 className="text-3xl font-bold mb-2 text-white">Career Opportunities</h1>
                    <p className="text-slate-300 max-w-2xl">
                        Discover jobs and internships tailored to your skills and career goals. AI-matched to ensure the best fit.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="md:col-span-1 space-y-6">
                        {/* Job Type */}
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Job Type</h3>
                            <div className="space-y-3">
                                {['Full-time', 'Internship', 'Contract', 'Part-time'].map(type => (
                                    <label key={type} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary-accent">
                                        <input
                                            type="checkbox"
                                            checked={filters.type.includes(type)}
                                            onChange={() => handleFilterChange('type', type)}
                                            className="rounded border-slate-300 text-primary-accent focus:ring-primary-accent"
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Experience Level */}
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Experience Level</h3>
                            <div className="space-y-3">
                                {['Entry Level', 'Mid-Senior', 'Director', 'Executive'].map(level => (
                                    <label key={level} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary-accent">
                                        <input
                                            type="checkbox"
                                            checked={filters.level.includes(level)}
                                            onChange={() => handleFilterChange('level', level)}
                                            className="rounded border-slate-300 text-primary-accent focus:ring-primary-accent"
                                        />
                                        {level}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Location</h3>
                            <div className="space-y-3">
                                {['Remote', 'On-site', 'Hybrid'].map(loc => (
                                    <label key={loc} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary-accent">
                                        <input
                                            type="checkbox"
                                            checked={filters.location.includes(loc)}
                                            onChange={() => handleFilterChange('location', loc)}
                                            className="rounded border-slate-300 text-primary-accent focus:ring-primary-accent"
                                        />
                                        {loc}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Salary Range</h3>
                            <div className="space-y-3">
                                {['Under RM 3k', 'RM 3k - RM 6k', 'RM 6k - RM 10k', 'RM 10k+'].map(range => (
                                    <label key={range} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary-accent">
                                        <input
                                            type="checkbox"
                                            checked={filters.salary.includes(range)}
                                            onChange={() => handleFilterChange('salary', range)}
                                            className="rounded border-slate-300 text-primary-accent focus:ring-primary-accent"
                                        />
                                        {range}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Feed */}
                    <div className="md:col-span-3 space-y-4">
                        {filteredJobs.map(job => (
                            <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate(`/jobs/${job.id}`)}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-accent transition-colors">{job.title}</h3>
                                            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                                                <Building2 className="h-4 w-4" />
                                                <p className="text-base">{job.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {job.level && (
                                                <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                                    {job.level}
                                                </span>
                                            )}
                                            <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3 mb-4">
                                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1">{job.salary}</span>
                                        <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Posted {job.posted}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {job.requirements.slice(0, 3).map(req => (
                                            <span key={req} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
