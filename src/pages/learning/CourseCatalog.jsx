import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCourses } from '../../data/mockLearning';
import { Search, Star, Clock, BarChart2, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function CourseCatalog() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    // Simple mock filter logic
    const filteredCourses = filter === 'All'
        ? mockCourses
        : mockCourses.filter(c => c.price === filter || c.level === filter);

    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Recommended Courses</h1>
                        <p className="text-slate-600 mt-1">Curated content to upskill and achieve your career goals.</p>
                    </div>

                    {/* Search Mockup */}
                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Search skills, topics..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-accent/50 text-sm"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 shrink-0 space-y-6">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Filter className="h-4 w-4" /> Filters
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase mb-2 block">Price</label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="radio" name="price" checked={filter === 'All'} onChange={() => setFilter('All')} className="text-primary-accent" />
                                            All
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="radio" name="price" checked={filter === 'Free'} onChange={() => setFilter('Free')} className="text-primary-accent" />
                                            Free
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="radio" name="price" checked={filter === 'Paid'} onChange={() => setFilter('Paid')} className="text-primary-accent" />
                                            Paid
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase mb-2 block">Level</label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="radio" name="level" checked={filter === 'Beginner'} onChange={() => setFilter('Beginner')} className="text-primary-accent" />
                                            Beginner
                                        </label>
                                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                                            <input type="radio" name="level" checked={filter === 'Intermediate'} onChange={() => setFilter('Intermediate')} className="text-primary-accent" />
                                            Intermediate
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map(course => (
                            <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => navigate(`/learning/course/${course.id}`)}>
                                {/* Thumbnail Placeholder */}
                                <div className={cn("h-32 w-full relative", course.thumbnailColor)}>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-800">
                                        {course.platform}
                                    </div>
                                </div>

                                <CardContent className="flex-1 p-5 flex flex-col">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-center justify-between text-xs text-slate-500">
                                            <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-400 fill-yellow-400" /> {course.rating}</span>
                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                                            <span className="flex items-center gap-1"><BarChart2 className="h-3 w-3" /> {course.level}</span>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="font-bold text-slate-900">{course.price}</span>
                                            <span className="text-xs font-medium text-primary-accent uppercase tracking-wide">View Course</span>
                                        </div>
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
