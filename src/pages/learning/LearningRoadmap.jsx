import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockRoadmap } from '../../data/mockLearning';
import { CheckCircle, Circle, Lock, ArrowRight, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function LearningRoadmap() {
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-primary-highlight">Your Learning Roadmap</h1>
                    <p className="text-slate-600 mt-2">
                        A step-by-step personalized plan to become an <span className="font-semibold text-primary-accent">AI Solutions Architect</span>.
                    </p>
                </div>

                <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12 py-4">
                    {mockRoadmap.map((phase, index) => (
                        <div key={phase.id} className="relative pl-8 md:pl-12">
                            {/* Phase Marker */}
                            <div className={cn(
                                "absolute -left-2.5 top-0 h-5 w-5 rounded-full border-4 border-white shadow-sm",
                                phase.status === 'In Progress' ? "bg-primary-accent ring-4 ring-primary-accent/20" :
                                    phase.status === 'Completed' ? "bg-green-500" :
                                        "bg-slate-300"
                            )}></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{phase.phase}</h3>
                                    <p className="text-sm text-slate-500">{phase.duration}</p>
                                </div>
                                <span className={cn(
                                    "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide w-fit",
                                    phase.status === 'In Progress' ? "bg-blue-100 text-blue-700" :
                                        phase.status === 'Completed' ? "bg-green-100 text-green-700" :
                                            "bg-slate-100 text-slate-500"
                                )}>
                                    {phase.status}
                                </span>
                            </div>

                            <div className="grid gap-4">
                                {phase.items.map(item => (
                                    <Card key={item.id} className={cn(
                                        "transition-all hover:shadow-md border",
                                        item.status === 'Locked' ? "bg-slate-50 border-slate-100" : "bg-white border-slate-200"
                                    )}>
                                        <CardContent className="p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                {item.status === 'Completed' ? (
                                                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                                                ) : item.status === 'Locked' ? (
                                                    <Lock className="h-6 w-6 text-slate-300 shrink-0" />
                                                ) : (
                                                    <div className="relative">
                                                        <Circle className="h-6 w-6 text-primary-accent shrink-0" />
                                                        <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-primary-accent"></div>
                                                    </div>
                                                )}

                                                <div>
                                                    <p className="text-xs font-semibold text-slate-400 uppercase">{item.type}</p>
                                                    <h4 className={cn("font-medium", item.status === 'Locked' ? "text-slate-400" : "text-slate-900")}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>

                                            {item.status !== 'Locked' && (
                                                <Button size="sm" variant="ghost" className="text-primary-accent hover:text-primary-accent/80 hover:bg-slate-50">
                                                    {item.status === 'Completed' ? 'Review' : 'Continue'} <ArrowRight className="ml-1 h-3 w-3" />
                                                </Button>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Goal Marker */}
                    <div className="relative pl-8 md:pl-12">
                        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-slate-900 border-4 border-white shadow-sm flex items-center justify-center">
                            <Flag className="h-3 w-3 text-white fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Career Goal Reached</h3>
                        <p className="text-slate-500">AI Solutions Architect</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
