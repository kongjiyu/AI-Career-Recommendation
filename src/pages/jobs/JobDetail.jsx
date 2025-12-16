import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { mockJobs } from '../../data/mockMentorship';
import { ArrowLeft, MapPin, DollarSign, Briefcase, CheckCircle, Building2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

export default function JobDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = mockJobs.find(j => j.id === parseInt(id)) || mockJobs[0];

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-6">
                <Button variant="ghost" onClick={() => navigate('/jobs/find')} className="pl-0 hover:bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
                </Button>

                <Card className="border-l-4 border-l-primary-accent">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900">{job.title}</h1>
                                <div className="flex items-center gap-2 mt-2 text-slate-600">
                                    <div className="p-1.5 bg-slate-100 rounded-lg">
                                        <Building2 className="h-5 w-5 text-primary-accent" />
                                    </div>
                                    <p className="text-xl font-bold">{job.company}</p>
                                </div>
                            </div>
                            <Button size="lg" onClick={() => navigate(`/jobs/${job.id}/apply`)}>
                                Apply Now
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 py-6 border-t border-b border-slate-100 mb-6">
                            <div className="flex items-center gap-2 text-slate-700">
                                <MapPin className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Location</p>
                                    <p className="font-medium">{job.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <Briefcase className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Type</p>
                                    <p className="font-medium">{job.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-slate-700">
                                <DollarSign className="h-5 w-5 text-slate-400" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-bold">Salary</p>
                                    <p className="font-medium">{job.salary}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <section>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Description</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {job.description}
                                </p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Requirements</h3>
                                <ul className="space-y-2">
                                    {job.requirements.map(req => (
                                        <li key={req} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle className="h-4 w-4 text-green-500" /> {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
