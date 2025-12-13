import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockAchievements, mockActivityLog } from '../../data/mockProgress';
import { ArrowLeft, Zap, Users, Code, Briefcase, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function Achievements() {
    const navigate = useNavigate();

    const getIcon = (name) => {
        switch (name) {
            case 'zap': return <Zap className="h-6 w-6" />;
            case 'users': return <Users className="h-6 w-6" />;
            case 'code': return <Code className="h-6 w-6" />;
            case 'briefcase': return <Briefcase className="h-6 w-6" />;
            default: return <Zap className="h-6 w-6" />;
        }
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <h1 className="text-3xl font-bold text-primary-highlight">Achievements & History</h1>

                {/* Badges Grid */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Badges</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {mockAchievements.map(badge => (
                            <Card key={badge.id} className={cn(
                                "border-2 transition-all",
                                badge.unlocked ? "border-yellow-400 bg-yellow-50/30" : "border-slate-100 bg-slate-50 opacity-70"
                            )}>
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className={cn(
                                        "h-14 w-14 rounded-full flex items-center justify-center mb-1",
                                        badge.unlocked ? "bg-yellow-100 text-yellow-600" : "bg-slate-200 text-slate-400"
                                    )}>
                                        {badge.unlocked ? getIcon(badge.icon) : <Lock className="h-6 w-6" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{badge.title}</h3>
                                        <p className="text-xs text-slate-500 mt-1">{badge.description}</p>
                                    </div>
                                    {!badge.unlocked && (
                                        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                                            <div
                                                className="bg-primary-accent h-1.5 rounded-full"
                                                style={{ width: `${(badge.progress / badge.total) * 100}%` }}
                                            ></div>
                                        </div>
                                    )}
                                    {badge.unlocked && (
                                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Unlocked</span>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Activity History */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
                    <Card>
                        <CardContent className="p-0">
                            <div className="divide-y divide-slate-100">
                                {mockActivityLog.map(log => (
                                    <div key={log.id} className="p-4 flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-slate-900">{log.action}</p>
                                            <p className="text-sm text-slate-500">{log.detail}</p>
                                        </div>
                                        <p className="text-sm text-slate-400">{log.time}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
