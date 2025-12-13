import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockSkillGaps } from '../../data/mockLearning';
import { ArrowRight, AlertTriangle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function SkillGapAnalysis() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Skill Gap Analysis</h1>
                        <p className="text-slate-600 mt-2">
                            Visualize the gap between your current skills and your target career requirements.
                        </p>
                    </div>
                    <Button onClick={() => navigate('/learning/courses')}>
                        Browse Recommended Courses <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Chart */}
                    <div className="md:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Current vs Target Skill Levels</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[350px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={mockSkillGaps} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                            <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                                            <YAxis dataKey="skill" type="category" width={100} stroke="#475569" fontSize={12} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: 'white', borderColor: '#e2e8f0' }}
                                                itemStyle={{ color: '#0f172a' }}
                                                cursor={{ fill: '#f1f5f9' }}
                                            />
                                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                            <Bar dataKey="currentScore" name="My Score" fill="#0ea5e9" radius={[0, 4, 4, 0]} barSize={20} />
                                            <Bar dataKey="targetScore" name="Target Score" fill="#e2e8f0" radius={[0, 4, 4, 0]} barSize={20} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Gap Summary List */}
                    <div className="md:col-span-1 space-y-4">
                        <h3 className="font-bold text-lg text-primary-highlight flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-orange-500" /> Critical Gaps
                        </h3>
                        {mockSkillGaps.map((gap, index) => (
                            <Card key={index} className="bg-white border-l-4 border-l-orange-500">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-slate-800">{gap.skill}</h4>
                                        <span className="text-xs font-semibold px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">
                                            {gap.importance}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-3">
                                        Score: {gap.currentScore} / {gap.targetScore}
                                    </p>
                                    <Button size="sm" variant="outline" className="w-full" onClick={() => navigate('/learning/courses')}>
                                        <BookOpen className="mr-2 h-3 w-3" /> Learn
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-blue-900">Want a structured path?</h3>
                        <p className="text-blue-700 text-sm">Follow a personalized roadmap designed to bridge these gaps step-by-step.</p>
                    </div>
                    <Button onClick={() => navigate('/learning/roadmap')} className="bg-blue-600 hover:bg-blue-700 text-white shrink-0">
                        View Learning Roadmap
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
