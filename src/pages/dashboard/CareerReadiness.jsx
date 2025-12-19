import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockReadiness } from '../../data/mockProgress';
import { ArrowLeft, CheckCircle, Circle, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function CareerReadiness() {
    const navigate = useNavigate();

    const chartData = {
        labels: mockReadiness.breakdown.map(item => item.category),
        datasets: [
            {
                label: 'Current Proficiency',
                data: mockReadiness.breakdown.map(item => item.score),
                backgroundColor: 'rgba(14, 165, 233, 0.2)',
                borderColor: 'rgba(14, 165, 233, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(14, 165, 233, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(14, 165, 233, 1)',
            },
        ],
    };

    const chartOptions = {
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                pointLabels: {
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#475569' // slate-600
                },
                ticks: {
                    stepSize: 20,
                    backdropColor: 'transparent',
                    color: '#94a3b8' // slate-400
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
        <Layout>
            <div className="max-w-5xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <div className="text-center md:text-left mb-8">
                    <h1 className="text-3xl font-bold text-primary-highlight">Career Readiness Check</h1>
                    <p className="text-slate-600 mt-2">Detailed breakdown of your employability score.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Radar Chart Section */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Skill Breakdown</h3>
                            <div className="h-[350px] w-full flex items-center justify-center relative z-10">
                                <Radar data={chartData} options={chartOptions} />
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">0-40</div>
                                    <div className="text-xs bg-slate-100 text-slate-600 py-1 px-2 rounded-full font-medium">Beginner</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">41-70</div>
                                    <div className="text-xs bg-blue-50 text-blue-600 py-1 px-2 rounded-full font-medium">Intermediate</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">71-100</div>
                                    <div className="text-xs bg-green-50 text-green-600 py-1 px-2 rounded-full font-medium">Advanced</div>
                                </div>
                            </div>
                        </div>

                        {/* Axis Descriptions */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <p className="text-xs font-bold text-slate-700 uppercase mb-1">Technical Skills</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Proficiency in coding languages & tools required for the role.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <p className="text-xs font-bold text-slate-700 uppercase mb-1">Soft Skills</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Communication, teamwork & leadership capabilities.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <p className="text-xs font-bold text-slate-700 uppercase mb-1">Portfolio</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Quality and relevance of projects & case studies showcased.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <p className="text-xs font-bold text-slate-700 uppercase mb-1">Network</p>
                                <p className="text-xs text-slate-500 leading-relaxed">Professional connections & engagement in the community.</p>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown & Suggestions */}
                    <div className="space-y-6">
                        <Card className="border-l-4 border-l-primary-accent bg-gradient-to-r from-blue-50 to-white shadow-sm overflow-hidden">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="h-20 w-20 rounded-full border-4 border-white shadow-lg bg-primary-accent flex items-center justify-center shrink-0">
                                        <span className="text-2xl font-bold text-white">{mockReadiness.score}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Overall Readiness</p>
                                        <h2 className="text-3xl font-bold text-slate-900 leading-none mb-2">Job Ready</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-700">Top 15%</span>
                                            <span className="text-xs text-slate-500">of your cohort</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-700 leading-relaxed border-t border-blue-100 pt-4">
                                    You are performing exceptionally well in <strong>Technical Skills</strong> (85/100), but likely need to improve your <strong>Network</strong> (40/100) to be fully competitive for senior roles.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border border-slate-200 shadow-sm">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                <CardTitle className="text-lg">Suggested Improvements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-0 p-0">
                                {mockReadiness.suggestions.map((suggestion, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors group">
                                        <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-primary-accent transition-colors mt-1.5 shrink-0"></div>
                                        <p className="text-slate-700 text-sm flex-1 font-medium">{suggestion}</p>
                                        <Button size="sm" variant="ghost" className="text-primary-accent hover:text-primary-accent hover:bg-blue-50 font-bold text-xs uppercase tracking-wide">
                                            Start
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                            <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
                                <Button variant="link" className="text-slate-500 text-xs hover:text-primary-accent">
                                    View Full Learning Plan
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
