import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { mockJobs } from '../../data/mockMentorship';
import { ArrowLeft, Check, UploadCloud } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function JobApplication() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = mockJobs.find(j => j.id === parseInt(id)) || mockJobs[0];
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            navigate('/jobs/find');
        }, 3000);
    };

    if (submitted) {
        return (
            <Layout>
                <div className="max-w-md mx-auto py-20 text-center space-y-6">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Application Sent!</h2>
                    <p className="text-slate-600">
                        Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been submitted successfully.
                    </p>
                    <p className="text-sm text-slate-500">Redirecting you to jobs...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-2xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate(-1)} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Cancel Application
                </Button>

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">Apply for {job.title}</h1>
                    <p className="text-slate-500">{job.company} • {job.location}</p>
                </div>

                <Card>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-900 border-b pb-2">Contact Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700">Full Name</label>
                                        <Input defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-700">Email</label>
                                        <Input defaultValue="john.doe@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Phone</label>
                                    <Input defaultValue="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-900 border-b pb-2">Documents</h3>
                                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <UploadCloud className="h-8 w-8 text-slate-400 mb-2" />
                                    <p className="text-sm font-medium text-slate-700">Resume/CV</p>
                                    <p className="text-xs text-slate-500 mt-1">resume.pdf (Uploaded)</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button type="submit" size="lg" className="w-full">
                                    Submit Application
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
