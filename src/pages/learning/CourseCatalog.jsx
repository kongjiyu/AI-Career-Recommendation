import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Checkbox } from '../../components/ui/Checkbox';
import { mockCourses } from '../../data/mockLearning';
import { Search, Star, Clock, BarChart2, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const PRICE_RANGES = [
    { id: 'free', label: 'Free', min: 0, max: 0 },
    { id: 'under-100', label: 'Under RM 100', min: 0, max: 100 },
    { id: '100-300', label: 'RM 100 - RM 300', min: 100, max: 300 },
    { id: 'over-300', label: 'Over RM 300', min: 300, max: 10000 }
];

const DURATION_RANGES = [
    { id: 'short', label: '< 10 Hours', min: 0, max: 10 },
    { id: 'medium', label: '10 - 40 Hours', min: 10, max: 40 },
    { id: 'long', label: '40+ Hours', min: 40, max: 1000 }
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function CourseCatalog() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        price: [],
        duration: [],
        level: []
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

    const getPrice = (feeString) => {
        if (!feeString || feeString === 'Free') return 0;
        return parseInt(feeString.replace(/[^\d]/g, ''), 10);
    };

    const getDuration = (durString) => {
        if (!durString) return 0;
        return parseInt(durString.replace(/[^\d]/g, ''), 10);
    };

    const filteredCourses = mockCourses.filter(course => {
        // Price Filter
        const coursePrice = getPrice(course.fee || course.price);
        const priceMatch = filters.price.length === 0 || filters.price.some(rangeId => {
            const range = PRICE_RANGES.find(r => r.id === rangeId);
            return range && coursePrice >= range.min && coursePrice < range.max; // Changed to < max to avoid overlap issues if any, but simplified logic
        });

        // Duration Filter
        const courseDuration = getDuration(course.duration);
        const durationMatch = filters.duration.length === 0 || filters.duration.some(rangeId => {
            const range = DURATION_RANGES.find(r => r.id === rangeId);
            return range && courseDuration >= range.min && courseDuration <= range.max;
        });

        // Level Filter
        const levelMatch = filters.level.length === 0 || filters.level.includes(course.level);

        return priceMatch && durationMatch && levelMatch;
    });

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
                        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 pb-4 border-b border-slate-100">
                                <Filter className="h-4 w-4" /> Filters
                            </h3>

                            <div className="space-y-6">
                                {/* Price Filter */}
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 block">Price Range</label>
                                    <div className="space-y-2">
                                        {PRICE_RANGES.map(range => (
                                            <div key={range.id} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`price-${range.id}`}
                                                    checked={filters.price.includes(range.id)}
                                                    onCheckedChange={() => handleFilterChange('price', range.id)}
                                                />
                                                <label
                                                    htmlFor={`price-${range.id}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 cursor-pointer select-none"
                                                >
                                                    {range.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Duration Filter */}
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 block">Duration</label>
                                    <div className="space-y-2">
                                        {DURATION_RANGES.map(range => (
                                            <div key={range.id} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`duration-${range.id}`}
                                                    checked={filters.duration.includes(range.id)}
                                                    onCheckedChange={() => handleFilterChange('duration', range.id)}
                                                />
                                                <label
                                                    htmlFor={`duration-${range.id}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 cursor-pointer select-none"
                                                >
                                                    {range.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Level Filter */}
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 block">Level</label>
                                    <div className="space-y-2">
                                        {LEVELS.map(level => (
                                            <div key={level} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={`level-${level}`}
                                                    checked={filters.level.includes(level)}
                                                    onCheckedChange={() => handleFilterChange('level', level)}
                                                />
                                                <label
                                                    htmlFor={`level-${level}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 cursor-pointer select-none"
                                                >
                                                    {level}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow cursor-pointer group h-full" onClick={() => navigate(`/learning/course/${course.id}`)}>
                                    <div className="h-40 w-full relative overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 shadow-sm">
                                            {course.fee || 'Free'}
                                        </div>
                                    </div>

                                    <CardContent className="flex-1 p-5 flex flex-col">
                                        <div className="mb-2">
                                            <span className="text-xs font-semibold text-primary-accent bg-primary-accent/5 px-2 py-0.5 rounded-full inline-block mb-2">
                                                {course.category}
                                            </span>
                                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary-accent transition-colors line-clamp-2">
                                                {course.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
                                            {course.description}
                                        </p>

                                        <div className="mt-auto space-y-4">
                                            <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-50 pt-3">
                                                <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-400 fill-yellow-400" /> {course.rating}</span>
                                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                                                <span className="flex items-center gap-1"><BarChart2 className="h-3 w-3" /> {course.level}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                                <p>No courses found matching your filters.</p>
                                <Button variant="link" onClick={() => setFilters({ price: [], duration: [], level: [] })} className="mt-2 text-primary-accent">
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
