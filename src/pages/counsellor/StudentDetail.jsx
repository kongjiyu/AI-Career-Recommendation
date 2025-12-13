import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockStudents } from '../../data/mockCounsellor';
import { ArrowLeft, Mail, AlertTriangle, BookOpen, Activity, Save } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function StudentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const student = mockStudents.find(s => s.id === parseInt(id)) || mockStudents[0];
    const [note, setNote] = useState('');

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/counsellor/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                {/* Header Profile */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full bg-slate-900 text-white text-3xl font-bold flex items-center justify-center">
                            {student.name.charAt(0)}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
                            <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> {student.email}</span>
                                <span>Cohort: {student.cohort}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                            <AlertTriangle className="mr-2 h-4 w-4" /> Report Risk
                        </Button>
                        <Button>
                            Contact Student
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left Column: Stats */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Academic Status</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Status</span>
                                    <span className={cn(
                                        "px-2 py-1 rounded-full text-xs font-bold",
                                        student.status === 'On Track' ? "bg-green-100 text-green-700" :
                                            student.status === 'At Risk' ? "bg-red-100 text-red-700" :
                                                "bg-yellow-100 text-yellow-700"
                                    )}>{student.status}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">GPA</span>
                                    <span className="font-bold text-slate-900">{student.gpa}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                                    <span className="text-slate-500">Assessment Score</span>
                                    <span className="font-bold text-slate-900">{student.assessmentScore}/100</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-slate-500">Risk Level</span>
                                    <span className={cn(
                                        "font-bold",
                                        student.riskLevel === 'High' ? "text-red-600" : "text-slate-900"
                                    )}>{student.riskLevel}</span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Counsellor Notes</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <textarea
                                    className="w-full h-32 p-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-highlight/50 resize-none"
                                    placeholder="Add a private note about this student..."
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <Button size="sm" className="w-full flex items-center justify-center gap-2">
                                    <Save className="h-4 w-4" /> Save Note
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Progress */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-primary-highlight" /> Recent Activity
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="border-l-2 border-slate-200 pl-4 space-y-6">
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300"></div>
                                        <p className="text-sm text-slate-500 mb-1">2 days ago</p>
                                        <p className="text-slate-900 font-medium">Completed "Advanced Python" course</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300"></div>
                                        <p className="text-sm text-slate-500 mb-1">5 days ago</p>
                                        <p className="text-slate-900 font-medium">Applied for "data Science Intern" at DataWiz Corp</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-green-500"></div>
                                        <p className="text-sm text-slate-500 mb-1">1 week ago</p>
                                        <p className="text-slate-900 font-medium">Completed Career Assessment</p>
                                        <p className="text-slate-500 text-sm mt-1">Identified fit for: {student.careerGoal}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Card className="bg-blue-50 border-blue-100">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-blue-900 mb-2">Target Career</h3>
                                    <p className="text-blue-700 text-lg font-medium">{student.careerGoal}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-purple-50 border-purple-100">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-purple-900 mb-2">Top Skill</h3>
                                    <p className="text-purple-700 text-lg font-medium">{student.topSkill}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
