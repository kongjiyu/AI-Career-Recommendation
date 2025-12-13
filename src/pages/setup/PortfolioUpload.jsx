import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Upload, FileText, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function PortfolioUpload() {
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleUpload = () => {
        setIsUploading(true);
        // Simulate upload and scan delay
        setTimeout(() => {
            setIsUploading(false);
            setUploadComplete(true);
        }, 2000);
    };

    const handleContinue = () => {
        navigate('/assessment');
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-primary-highlight">Upload Portfolio</h1>
                    <p className="text-slate-600 mt-2">
                        Upload your CV, transcripts, or certificates. AI will analyze them to extract your skills.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <Card className="border-dashed border-2 border-secondary-surface bg-primary-base/50">
                            <CardContent className="flex flex-col items-center justify-center py-12 space-y-4 text-center cursor-pointer hover:bg-primary-surface/30 transition-colors" onClick={handleUpload}>
                                <div className="p-4 rounded-full bg-primary-surface/50">
                                    {isUploading ? (
                                        <Loader2 className="h-8 w-8 text-primary-accent animate-spin" />
                                    ) : (
                                        <Upload className="h-8 w-8 text-primary-accent" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-primary-highlight">
                                        {isUploading ? 'Analyzing Documents...' : 'Drop files here or click to upload'}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        PDF, DOCX, JPG (Max 10MB)
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {uploadComplete && (
                            <div className="space-y-3">
                                <div className="flex items-center p-3 rounded-md bg-green-500/10 border border-green-500/20">
                                    <FileText className="h-5 w-5 text-green-600 mr-3" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-green-800">resume_2024.pdf</p>
                                        <p className="text-xs text-green-600">Scanned successfully</p>
                                    </div>
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-primary-highlight">AI Analysis Results</h3>

                        {!uploadComplete ? (
                            <div className="h-64 rounded-lg border border-secondary-surface bg-primary-surface/30 flex items-center justify-center text-slate-500">
                                <p>Upload a document to see extracted insights</p>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <Card>
                                    <CardContent className="pt-6 space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Key Skills Detected</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {['Python', 'Data Analysis', 'Project Management', 'Communication', 'React.js'].map((skill) => (
                                                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium bg-primary-accent/20 text-primary-accent border border-primary-accent/30">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="bg-primary-surface/30 p-4 rounded-lg border border-secondary-surface">
                                    <p className="text-sm text-primary-highlight">
                                        <span className="text-primary-accent font-semibold">AI Insight:</span> Your portfolio suggests a strong inclination towards Technical Product Management or Data Science roles.
                                    </p>
                                </div>

                                <Button onClick={handleContinue} className="w-full">
                                    Proceed to Skills Assessment <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
