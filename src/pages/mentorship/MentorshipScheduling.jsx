import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockMentors } from '../../data/mockMentorship';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function MentorshipScheduling() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mentor = mockMentors.find(m => m.id === parseInt(id)) || mockMentors[0];

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    // Mock dates
    const dates = [
        { day: 'Mon', date: '14', available: true },
        { day: 'Tue', date: '15', available: true },
        { day: 'Wed', date: '16', available: false },
        { day: 'Thu', date: '17', available: true },
        { day: 'Fri', date: '18', available: true },
    ];

    // Mock times
    const times = ['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM'];

    const handleConfirm = () => {
        setIsConfirmed(true);
        setTimeout(() => {
            navigate('/mentorship/find');
        }, 3000);
    };

    if (isConfirmed) {
        return (
            <Layout>
                <div className="max-w-md mx-auto py-20 text-center space-y-6">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Booking Confirmed!</h2>
                    <p className="text-slate-600">
                        You are scheduled to meet with <strong>{mentor.name}</strong> on {selectedDate}th at {selectedTime}.
                    </p>
                    <p className="text-sm text-slate-500">Redirecting you back to mentors...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-2xl mx-auto space-y-8">
                <Button variant="ghost" onClick={() => navigate(-1)} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Profile
                </Button>

                <div>
                    <h1 className="text-3xl font-bold text-primary-highlight">Schedule Session</h1>
                    <p className="text-slate-600 mt-2">Select a time to meet with {mentor.name}.</p>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary-accent" /> Select Date (Oct 2024)
                            </h3>
                            <div className="flex justify-between gap-2 overflow-x-auto pb-2">
                                {dates.map((d, i) => (
                                    <button
                                        key={i}
                                        disabled={!d.available}
                                        onClick={() => { setSelectedDate(d.date); setSelectedTime(null); }}
                                        className={cn(
                                            "flex flex-col items-center justify-center min-w-[70px] h-20 rounded-lg border transition-all",
                                            !d.available && "opacity-50 cursor-not-allowed bg-slate-50 border-slate-100",
                                            d.available && "hover:border-primary-accent border-slate-200 bg-white",
                                            selectedDate === d.date && "bg-primary-accent text-white border-primary-accent ring-2 ring-primary-accent/30"
                                        )}
                                    >
                                        <span className={cn("text-xs font-medium uppercase", selectedDate === d.date ? "text-white/80" : "text-slate-400")}>{d.day}</span>
                                        <span className={cn("text-xl font-bold", selectedDate === d.date ? "text-white" : "text-slate-800")}>{d.date}</span>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {selectedDate && (
                        <Card className="animate-in fade-in slide-in-from-top-4">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary-accent" /> Select Time
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {times.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setSelectedTime(t)}
                                            className={cn(
                                                "py-3 rounded-lg border text-sm font-medium transition-all",
                                                selectedTime === t
                                                    ? "bg-primary-accent text-white border-primary-accent shadow-md"
                                                    : "bg-white text-slate-700 border-slate-200 hover:border-primary-accent hover:text-primary-accent"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <Button
                        size="lg"
                        className="w-full"
                        disabled={!selectedDate || !selectedTime}
                        onClick={handleConfirm}
                    >
                        Confirm Booking
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
