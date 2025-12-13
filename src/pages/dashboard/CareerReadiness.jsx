import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockReadiness } from '../../data/mockProgress';
import { ArrowLeft, CheckCircle, Circle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function CareerReadiness() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <div className="text-center md:text-left mb-8">
                    <h1 className="text-3xl font-bold text-primary-highlight">Career Readiness Check</h1>
                    <p className="text-slate-600 mt-2">Detailed breakdown of your employability score.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Radar Chart */}
                    <div className="h-[400px] w-full bg-white rounded-xl border border-slate-200 shadow-sm p-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockReadiness.breakdown}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                <Radar
                                    name="Me"
                                    dataKey="score"
                                    stroke="#0ea5e9"
                                    fill="#0ea5e9"
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Breakdown & Suggestions */}
                    <div className="space-y-6">
                        <Card className="border-l-4 border-l-blue-500 bg-blue-50/50">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Target className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 uppercase">Overall Score</p>
                                        <h2 className="text-3xl font-bold text-slate-900">{mockReadiness.score}/100</h2>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm">
                                    You are performing well in <strong>Technical Skills</strong>, but need to improve your <strong>Network</strong> score to be fully job-ready.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Suggestions to Improve</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {mockReadiness.suggestions.map((suggestion, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Circle className="h-5 w-5 text-slate-300 mt-0.5" />
                                        <p className="text-slate-700">{suggestion}</p>
                                        <Button size="sm" variant="ghost" className="ml-auto text-primary-accent">
                                            Start
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
