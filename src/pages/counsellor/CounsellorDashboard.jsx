import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockStudents, mockMetrics } from '../../data/mockCounsellor';
import { Users, AlertTriangle, Calendar, FileText, Search, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function CounsellorDashboard() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Counsellor Dashboard</h1>
                        <p className="text-slate-600 mt-1">Overview of student progress and upcoming activities.</p>
                    </div>
                    <Button>
                        <Calendar className="mr-2 h-4 w-4" /> View Schedule
                    </Button>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Total Students</p>
                                <h3 className="text-2xl font-bold text-slate-900">{mockMetrics.totalStudents}</h3>
                            </div>
                            <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
                                <Users className="h-5 w-5 text-blue-600" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">At Risk</p>
                                <h3 className="text-2xl font-bold text-red-600">{mockMetrics.atRisk}</h3>
                            </div>
                            <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center">
                                <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Appointments</p>
                                <h3 className="text-2xl font-bold text-slate-900">{mockMetrics.appointmentsToday}</h3>
                            </div>
                            <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-green-600" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase">Pending Reviews</p>
                                <h3 className="text-2xl font-bold text-orange-600">{mockMetrics.pendingReviews}</h3>
                            </div>
                            <div className="h-10 w-10 bg-orange-50 rounded-full flex items-center justify-center">
                                <FileText className="h-5 w-5 text-orange-600" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Detailed Student List */}
                <Card className="min-h-[500px]">
                    <CardHeader className="border-b border-slate-100 flex flex-row items-center justify-between py-4">
                        <CardTitle>Assigned Students</CardTitle>
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search students..."
                                className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-highlight/50"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Cohort</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Career Goal</th>
                                    <th className="px-6 py-4">Last Activity</th>
                                    <th className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {mockStudents.map(student => (
                                    <tr
                                        key={student.id}
                                        className="hover:bg-slate-50 transition-colors cursor-pointer group"
                                        onClick={() => navigate(`/counsellor/student/${student.id}`)}
                                    >
                                        <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                {student.name.charAt(0)}
                                            </div>
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{student.cohort}</td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                student.status === 'On Track' ? "bg-green-100 text-green-800" :
                                                    student.status === 'At Risk' ? "bg-red-100 text-red-800" :
                                                        "bg-yellow-100 text-yellow-800"
                                            )}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{student.careerGoal}</td>
                                        <td className="px-6 py-4 text-slate-500">{student.lastActivity}</td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                                                View
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
