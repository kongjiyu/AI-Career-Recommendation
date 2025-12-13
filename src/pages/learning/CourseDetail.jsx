import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCourses } from '../../data/mockLearning';
import { ArrowLeft, CheckCircle, PlayCircle, Clock, BarChart2, Award } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = mockCourses.find(c => c.id === parseInt(id)) || mockCourses[0];

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate(-1)} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
                </Button>

                {/* Hero Section */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className={cn("h-48 w-full", course.thumbnailColor)}></div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                                {course.platform}
                            </span>
                            <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                                {course.level}
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h1>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap gap-8 py-6 border-t border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Duration</p>
                                    <p className="font-medium text-slate-900">{course.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <BarChart2 className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Level</p>
                                    <p className="font-medium text-slate-900">{course.level}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Certificate</p>
                                    <p className="font-medium text-slate-900">Yes</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Button size="lg" className="px-8" onClick={() => window.open(course.link, '_blank')}>
                                Enroll Now
                            </Button>
                            <Button size="lg" variant="outline">
                                Add to Roadmap
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Syllabus */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Syllabus</h3>
                                <div className="space-y-4">
                                    {course.syllabus.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                            <div className="mt-1 h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">{item}</h4>
                                                <p className="text-sm text-slate-500 mt-1">Video • Reading • Quiz</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Skills */}
                    <div>
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">What you'll learn</h3>
                                <ul className="space-y-3">
                                    {course.skills.map(skill => (
                                        <li key={skill} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
