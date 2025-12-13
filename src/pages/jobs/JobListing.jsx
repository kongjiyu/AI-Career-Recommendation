import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockJobs } from '../../data/mockMentorship';
import { Search, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function JobListing() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center md:text-left bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
                    <h1 className="text-3xl font-bold mb-2">Career Opportunities</h1>
                    <p className="text-slate-300 max-w-2xl">
                        Discover jobs and internships tailored to your skills and career goals. AI-matched to ensure the best fit.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Filters - Simplified for prototype */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4">Job Type</h3>
                            <div className="space-y-3">
                                {['Full-time', 'Internship', 'Contract', 'Part-time'].map(type => (
                                    <label key={type} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-primary-accent">
                                        <input type="checkbox" className="rounded border-slate-300 text-primary-accent focus:ring-primary-accent" />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Job Feed */}
                    <div className="md:col-span-2 space-y-4">
                        {mockJobs.map(job => (
                            <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate(`/jobs/${job.id}`)}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-accent transition-colors">{job.title}</h3>
                                            <p className="text-slate-500 font-medium">{job.company}</p>
                                        </div>
                                        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                            {job.type}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3 mb-4">
                                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> {job.salary}</span>
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
