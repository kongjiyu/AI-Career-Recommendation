import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockNotifications } from '../../data/mockProgress';
import { ArrowLeft, Bell, Info, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function Notifications() {
    const navigate = useNavigate();

    const getIcon = (type) => {
        switch (type) {
            case 'info': return <Info className="h-5 w-5 text-blue-500" />;
            case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'warning': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
            case 'insight': return <Lightbulb className="h-5 w-5 text-purple-500" />;
            default: return <Bell className="h-5 w-5 text-slate-500" />;
        }
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/dashboard')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>

                <h1 className="text-3xl font-bold text-primary-highlight">Notifications & Insights</h1>

                <div className="space-y-4">
                    {mockNotifications.map(notif => (
                        <Card key={notif.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4 flex gap-4">
                                <div className={cn(
                                    "h-10 w-10 rounded-full flex items-center justify-center shrink-0",
                                    notif.type === 'info' ? "bg-blue-100" :
                                        notif.type === 'success' ? "bg-green-100" :
                                            notif.type === 'warning' ? "bg-orange-100" : "bg-purple-100"
                                )}>
                                    {getIcon(notif.type)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-slate-900">{notif.title}</h3>
                                        <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{notif.time}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm mt-1">{notif.message}</p>

                                    {notif.type === 'insight' && (
                                        <div className="mt-2 text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded w-fit">
                                            AI Generated Insight
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
