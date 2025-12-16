import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockReadiness, mockNotifications } from '../../data/mockProgress';
import { mockCourses } from '../../data/mockLearning';
import { ArrowRight, Activity, BookOpen, Users, Bell, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function UserDashboard() {
    const navigate = useNavigate();
    const nextCourse = mockCourses[0]; // Simulate current course

    // Readiness Gauge Data
    const gaugeData = [
        { name: 'Score', value: mockReadiness.score },
        { name: 'Remaining', value: 100 - mockReadiness.score }
    ];
    const COLORS = ['#0ea5e9', '#e2e8f0'];

    return (
        <Layout>
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Welcome back, Kong Ji Yu!</h1>
                        <p className="text-slate-600 mt-1">You're making great progress towards becoming an <span className="font-semibold text-primary-accent">AI Solutions Architect</span>.</p>
                    </div>
                    <Button onClick={() => navigate('/learning/roadmap')}>
                        Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Feed: 2/3 width */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/dashboard/readiness')}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-blue-100 text-sm font-medium mb-1">Career Readiness</p>
                                            <h3 className="text-3xl font-bold text-white">{mockReadiness.score}%</h3>
                                            <p className="text-blue-100 text-xs mt-2">{mockReadiness.level}</p>
                                        </div>
                                        <Activity className="h-6 w-6 text-blue-200" />
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/dashboard/achievements')}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-slate-500 text-sm font-medium mb-1">Achievements</p>
                                            <h3 className="text-3xl font-bold text-slate-900">2<span className="text-slate-400 text-lg font-normal">/4</span></h3>
                                            <p className="text-slate-500 text-xs mt-2">Badges Earned</p>
                                        </div>
                                        <Award className="h-6 w-6 text-yellow-500" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Continue Learning */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-primary-accent" /> Continue Learning
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <img src={nextCourse.image} alt={nextCourse.title} className="h-16 w-16 rounded-lg shrink-0 object-cover" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 line-clamp-1">{nextCourse.title}</h4>
                                        <p className="text-sm text-slate-500 mb-2">{nextCourse.mentor} • 65% Complete</p>
                                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                                            <div className="bg-primary-accent h-1.5 rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                    <Button size="sm" onClick={() => navigate(`/learning/course/${nextCourse.id}`)}>
                                        Resume
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Notifications */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <Bell className="h-5 w-5 text-primary-accent" /> Recent Updates
                                </CardTitle>
                                <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard/notifications')}>View All</Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {mockNotifications.slice(0, 3).map(notif => (
                                    <div key={notif.id} className="flex gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                                        <div className={cn(
                                            "h-2 w-2 rounded-full mt-2 shrink-0",
                                            notif.type === 'info' ? "bg-blue-400" :
                                                notif.type === 'success' ? "bg-green-400" :
                                                    "bg-orange-400"
                                        )}></div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{notif.title}</p>
                                            <p className="text-xs text-slate-500">{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar Stats: 1/3 width */}
                    <div className="space-y-6">
                        {/* Readiness Gauge */}
                        <Card>
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                                <h3 className="font-bold text-slate-900 mb-4">Readiness Score</h3>
                                <div className="h-40 w-full relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={gaugeData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                startAngle={180}
                                                endAngle={0}
                                                paddingAngle={0}
                                                dataKey="value"
                                            >
                                                {gaugeData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                                        <span className="text-3xl font-bold text-slate-900">{mockReadiness.score}</span>
                                        <span className="text-xs text-slate-500 uppercase">Points</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-[-20px]">
                                    You are in the top <strong>15%</strong> of your cohort!
                                </p>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                <Button variant="outline" className="justify-start" onClick={() => navigate('/mentorship/find')}>
                                    <Users className="mr-2 h-4 w-4 text-purple-500" /> Find Mentor
                                </Button>
                                <Button variant="outline" className="justify-start" onClick={() => navigate('/assessment')}>
                                    <Activity className="mr-2 h-4 w-4 text-blue-500" /> Retake Assessment
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
