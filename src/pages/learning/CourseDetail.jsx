import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockCourses } from '../../data/mockLearning';
import { mockMentors } from '../../data/mockMentorship';
import { ArrowLeft, CheckCircle, Clock, BarChart2, Award, Calendar, X, Star } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function CourseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = mockCourses.find(c => c.id === parseInt(id)) || mockCourses[0];
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [showMentorSelection, setShowMentorSelection] = useState(false);
    const [selectedMentorName, setSelectedMentorName] = useState(null);

    // Find full mentor objects based on names in course.mentors, or fallback to mockMentors if name matches
    const availableMentors = course.mentors?.map(name => {
        const found = mockMentors.find(m => m.name === name);
        return found || { name, role: 'Course Mentor', company: 'Tech Academy', imageColor: 'bg-slate-200' };
    }) || [];

    const handleEnrollClick = () => {
        setShowMentorSelection(true);
    };

    const confirmEnrollment = (mentorName) => {
        setSelectedMentorName(mentorName);
        setIsEnrolled(true);
        setShowMentorSelection(false);
    };

    const enrolledMentor = selectedMentorName
        ? availableMentors.find(m => m.name === selectedMentorName)
        : availableMentors[0];

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-6 relative">
                <Button variant="ghost" onClick={() => navigate(-1)} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
                </Button>

                {/* Hero Section */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="h-64 w-full relative">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
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
                            <div className="flex items-center gap-3">
                                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Rating</p>
                                    <p className="font-medium text-slate-900">{course.rating}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4 items-center">
                            {!isEnrolled ? (
                                <>
                                    <Button size="lg" className="px-8 flex items-center gap-2" onClick={handleEnrollClick}>
                                        <span>Enroll Now</span>
                                        <span className="bg-white/20 px-2 py-0.5 rounded text-sm font-semibold ml-2">
                                            {course.fee === 'Free' ? 'Free' : course.fee}
                                        </span>
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Add to Roadmap
                                    </Button>
                                </>
                            ) : (
                                <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                                        <CheckCircle className="h-5 w-5" />
                                        <span className="font-medium">You are enrolled! Your mentor is assigned.</span>
                                    </div>

                                    {enrolledMentor && (
                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`h-12 w-12 rounded-full ${enrolledMentor.imageColor || 'bg-slate-200'} flex items-center justify-center text-lg font-bold text-slate-600`}>
                                                    {enrolledMentor.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-xs text-slate-500 font-medium uppercase">Your Mentor</p>
                                                    <p className="font-bold text-slate-900">{enrolledMentor.name}</p>
                                                    <p className="text-xs text-slate-500">{enrolledMentor.role} at {enrolledMentor.company}</p>
                                                </div>
                                            </div>
                                            <Button onClick={() => navigate(`/mentorship/${enrolledMentor.id || 1}/schedule`)}>
                                                <Calendar className="mr-2 h-4 w-4" /> Book Session
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
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
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 transition-colors hover:bg-slate-100/50">
                                            <div className="mt-1 h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                                                {i + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                                                    <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded whitespace-nowrap ml-2">{item.hours} hrs</span>
                                                </div>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {item.details || 'Mentor Session • Practical Task • Code Review'}
                                                </p>
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

                        <Card className="mt-6">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Available Mentors</h3>
                                <div className="space-y-4">
                                    {availableMentors.map((mentor, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`h-10 w-10 rounded-full ${mentor.imageColor || 'bg-primary-accent/10'} flex items-center justify-center text-sm font-bold text-slate-700 shrink-0`}>
                                                {mentor.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{mentor.name}</p>
                                                <p className="text-xs text-slate-500">{mentor.role} at {mentor.company}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Mentor Selection Modal */}
                {showMentorSelection && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200">
                            <button
                                onClick={() => setShowMentorSelection(false)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="p-6 border-b border-slate-100">
                                <h2 className="text-2xl font-bold text-slate-900">Choose Your Mentor</h2>
                                <p className="text-slate-600 mt-1">Select a mentor to guide you through this course.</p>
                            </div>

                            <div className="p-6 grid gap-4">
                                {availableMentors.map((mentor, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hovered:border-primary-accent/50 hover:shadow-md transition-all cursor-pointer group bg-white"
                                        onClick={() => confirmEnrollment(mentor.name)}
                                    >
                                        <div className={`h-14 w-14 rounded-full ${mentor.imageColor || 'bg-slate-100'} flex items-center justify-center text-xl font-bold text-slate-700 shrink-0 group-hover:scale-105 transition-transform`}>
                                            {mentor.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary-accent transition-colors">{mentor.name}</h3>
                                                    <p className="text-sm text-slate-500 font-medium">{mentor.role} at {mentor.company}</p>
                                                </div>
                                                <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded">
                                                    <span className="text-yellow-500">★</span> {mentor.rating || '4.8'}
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                                                {mentor.bio || 'Experienced mentor passionate about helping students achieve their goals.'}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {mentor.expertise?.slice(0, 3).map(skill => (
                                                    <span key={skill} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
