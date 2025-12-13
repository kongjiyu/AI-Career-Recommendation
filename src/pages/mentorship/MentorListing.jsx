import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockMentors } from '../../data/mockMentorship';
import { Search, Star, Filter, Briefcase, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function MentorListing() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Find a Mentor</h1>
                        <p className="text-slate-600 mt-1">Connect with industry experts who can guide your career journey.</p>
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="Search by name, company, or skill..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 text-sm"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters */}
                    <div className="w-full md:w-64 shrink-0 space-y-6">
                        <div className="bg-white p-5 rounded-lg border border-slate-200 sticky top-8">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Filter Mentors
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase mb-3 block">Expertise</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['System Design', 'React', 'Product', 'Data Science', 'Leadership'].map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded hover:bg-slate-200 cursor-pointer">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase mb-3 block">Company</label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="checkbox" className="rounded text-primary-accent" /> Google
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="checkbox" className="rounded text-primary-accent" /> Netflix
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="checkbox" className="rounded text-primary-accent" /> Startups
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mentor Grid */}
                    <div className="flex-1 grid md:grid-cols-2 gap-6">
                        {mockMentors.map(mentor => (
                            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex gap-4">
                                        <div className={cn("h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold text-slate-700 shrink-0", mentor.imageColor)}>
                                            {mentor.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900">{mentor.name}</h3>
                                            <p className="text-sm text-primary-accent font-medium">{mentor.role}</p>
                                            <p className="text-sm text-slate-500">{mentor.company}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm line-clamp-2">
                                        "{mentor.bio}"
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.slice(0, 3).map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded border border-slate-100">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-sm font-bold text-slate-800">
                                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> {mentor.rating}
                                            <span className="text-slate-400 font-normal">({mentor.reviews})</span>
                                        </span>
                                        <Button size="sm" onClick={() => navigate(`/mentorship/${mentor.id}`)}>
                                            View Profile
                                        </Button>
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
