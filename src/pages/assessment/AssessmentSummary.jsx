import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const skillData = [
    { subject: 'Technical', A: 120, fullMark: 150 },
    { subject: 'Creative', A: 98, fullMark: 150 },
    { subject: 'Leadership', A: 86, fullMark: 150 },
    { subject: 'Communication', A: 99, fullMark: 150 },
    { subject: 'Analytical', A: 85, fullMark: 150 },
    { subject: 'Management', A: 65, fullMark: 150 },
];

const interestData = [
    { name: 'AI & ML', score: 85 },
    { name: 'Data Science', score: 80 },
    { name: 'Web Dev', score: 70 },
    { name: 'Cybersec', score: 60 },
    { name: 'Cloud', score: 55 },
];

export default function AssessmentSummary() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Assessment Results</h1>
                        <p className="text-slate-600 mt-2">
                            Based on your profile, portfolio, and assessment answers.
                        </p>
                    </div>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Skill Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                                        <PolarGrid stroke="#E2E8F0" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 12 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                        <Radar
                                            name="My Skills"
                                            dataKey="A"
                                            stroke="#0EA5E9"
                                            fill="#0EA5E9"
                                            fillOpacity={0.3}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', color: '#0F172A' }}
                                            itemStyle={{ color: '#0F172A' }}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Top Career Matches</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { title: "AI Solutions Architect", match: 95, color: "bg-green-500" },
                                    { title: "Data Scientist", match: 88, color: "bg-blue-500" },
                                    { title: "Product Manager (Tech)", match: 82, color: "bg-purple-500" },
                                ].map((career, i) => (
                                    <div key={i} className="p-4 rounded-lg bg-primary-surface/50 border border-secondary-surface flex items-center justify-between">
                                        <div>
                                            <h4 className="font-bold text-primary-highlight">{career.title}</h4>
                                            <p className="text-sm text-slate-500">High demand in your area</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-primary-highlight">{career.match}%</span>
                                            <p className="text-xs text-slate-500">Match</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Interest Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={interestData} layout="vertical" margin={{ left: 20 }}>
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#475569' }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#F1F5F9' }}
                                        contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px' }}
                                        itemStyle={{ color: '#0F172A' }}
                                    />
                                    <Bar dataKey="score" fill="#0EA5E9" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={() => navigate('/assessment')}>
                        Retake Assessment
                    </Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate('/career/results')}>
                        Explore Detailed Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
