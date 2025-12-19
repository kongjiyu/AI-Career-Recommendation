import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const skillData = [
    { subject: 'Technical', A: 120, fullMark: 150, description: "Proficiency in coding, system design, and algorithms." },
    { subject: 'Creative', A: 98, fullMark: 150, description: "Ability to design UI/UX, solve problems innovatively, and think outside the box." },
    { subject: 'Leadership', A: 86, fullMark: 150, description: "Capability to guide teams, make decisions, and inspire others." },
    { subject: 'Communication', A: 99, fullMark: 150, description: "Effectiveness in verbal and written expression of ideas." },
    { subject: 'Analytical', A: 85, fullMark: 150, description: "Skill in interpreting data, identifying patterns, and logical reasoning." },
    { subject: 'Management', A: 65, fullMark: 150, description: "Competence in organizing resources, planning, and execution." },
];

const interestData = [
    {
        name: 'AI & ML',
        score: 85,
        reason: "You showed a strong preference for data-driven decision making and automation patterns.",
        description: "Field focused on creating intelligent systems that learn from data to solve complex problems."
    },
    {
        name: 'Data Science',
        score: 80,
        reason: "Your high analytical score indicates a natural ability to interpret complex data sets.",
        description: "Field involving scientific methods, processes, and systems to extract knowledge from data."
    },
    {
        name: 'Web Dev',
        score: 70,
        reason: "You expressed interest in building tangible user interfaces and interactive experiences.",
        description: "The work involved in developing a website for the Internet or an intranet."
    },
    {
        name: 'Cybersec',
        score: 60,
        reason: "You prioritize system integrity and secure architecture in your problem-solving approach.",
        description: "Protection of computer systems and networks from information disclosure or damage."
    },
    {
        name: 'Cloud',
        score: 55,
        reason: "You understand the importance of scalable infrastructure and distributed systems.",
        description: "On-demand availability of computer system resources, especially data storage and computing power."
    },
];

const careerMatches = [
    {
        title: "AI Solutions Architect",
        match: 95,
        color: "bg-green-500",
        reason: "Your strong technical profile (120/150) combined with solid leadership scores makes you ideal for designing complex AI systems."
    },
    {
        title: "Data Scientist",
        match: 88,
        color: "bg-blue-500",
        reason: "High analytical scores and a keen interest in pattern recognition align perfectly with data science roles."
    },
    {
        title: "Product Manager (Tech)",
        match: 82,
        color: "bg-purple-500",
        reason: "Your balance of creative problem solving and management skills suits product ownership."
    },
];

export default function AssessmentSummary() {
    const navigate = useNavigate();
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <Layout>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-primary-highlight">Assessment Results</h1>
                        <p className="text-slate-600 mt-2">
                            Based on your profile, portfolio, and assessment answers.
                        </p>
                    </div>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Skill Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                                        <PolarGrid stroke="#E2E8F0" />
                                        <PolarAngleAxis
                                            dataKey="subject"
                                            tick={{ fill: '#475569', fontSize: 12, cursor: 'pointer' }}
                                            onClick={({ payload }) => {
                                                const skill = skillData.find(s => s.subject === payload.value);
                                                if (skill) setActiveSkill(skill);
                                            }}
                                        />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                        <Radar
                                            name="My Skills"
                                            dataKey="A"
                                            stroke="#0EA5E9"
                                            fill="#0EA5E9"
                                            fillOpacity={0.3}
                                        />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', color: '#0F172A' }}
                                            itemStyle={{ color: '#0F172A' }}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-sm font-semibold text-slate-900 mb-3">Skill Details</h4>
                                <div className="min-h-[80px] p-4 bg-slate-50 rounded-lg border border-slate-100 transition-all duration-300">
                                    {activeSkill ? (
                                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <h5 className="font-bold text-primary-highlight mb-1">{activeSkill.subject}</h5>
                                            <p className="text-sm text-slate-700">{activeSkill.description}</p>
                                        </div>
                                    ) : (
                                        <p className="text-sm text-slate-400 italic text-center py-4">
                                            Hover over or click a skill below to view details
                                        </p>
                                    )}
                                </div>
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {skillData.map((skill, index) => (
                                        <button
                                            key={index}
                                            onMouseEnter={() => setActiveSkill(skill)}
                                            onClick={() => setActiveSkill(skill)}
                                            className={`p-2 text-xs font-medium rounded-md transition-colors duration-200 border ${activeSkill?.subject === skill.subject
                                                ? 'bg-primary-highlight text-white border-primary-highlight'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-primary-highlight hover:text-primary-highlight'
                                                }`}
                                        >
                                            {skill.subject}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Top Career Matches</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {careerMatches.map((career, i) => (
                                    <div key={i} className="p-4 rounded-lg bg-primary-surface/50 border border-secondary-surface">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h4 className="font-bold text-primary-highlight">{career.title}</h4>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xl font-bold text-primary-highlight">{career.match}%</span>
                                                <span className="text-xs text-slate-500 ml-1">Match</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 italic">"{career.reason}"</p>
                                        <div className="mt-2 w-full bg-slate-200 rounded-full h-1.5">
                                            <div
                                                className={`h-1.5 rounded-full ${career.color}`}
                                                style={{ width: `${career.match}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Interest Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                {interestData.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-slate-700">{item.name}</span>
                                            <span className="text-sm font-bold text-sky-600">{item.score}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2">
                                            <div
                                                className="bg-sky-500 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${item.score}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-slate-500">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                                <h4 className="font-semibold text-primary-highlight mb-4">Why these interests?</h4>
                                {interestData.slice(0, 3).map((item, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <div className="min-w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600 mt-0.5">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-slate-800">{item.name}</h5>
                                            <p className="text-sm text-slate-600 mt-1">
                                                {item.reason}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="ghost" className="w-full text-sky-600 hover:text-sky-700 text-sm mt-2">
                                    View Full Analysis
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={() => navigate('/assessment')}>
                        Retake Assessment
                    </Button>
                    <Button size="lg" className="w-full md:w-auto" onClick={() => navigate('/career/results')}>
                        Explore Detailed Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
