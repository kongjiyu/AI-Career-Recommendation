import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockSkillHistory } from '../../data/mockProgress';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function SkillProgress() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Skill Growth</h1>
                        <p className="text-slate-600 mt-1">Track your technical skill improvement over time.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Chart */}
                    <div className="md:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary-accent" /> Overall Technical Proficiency
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={mockSkillHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                            <XAxis dataKey="month" stroke="#94a3b8" />
                                            <YAxis domain={[0, 100]} stroke="#94a3b8" />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
                                                itemStyle={{ color: '#0f172a' }}
                                            />
                                            <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Skill Stats */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
                            <h3 className="text-lg font-bold mb-1">Growth Rate</h3>
                            <div className="text-4xl font-bold">+18%</div>
                            <p className="text-green-100 text-sm mt-1">Compared to last month</p>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Mastered Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {['HTML5', 'CSS3', 'JavaScript', 'Git', 'Python Basics'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>In Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {['React Advanced', 'Data Structures', 'System Design'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
