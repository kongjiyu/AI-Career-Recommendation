import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const questions = [
    {
        id: 1,
        question: "How comfortable are you with public speaking?",
        options: ["Very Uncomfortable", "Somewhat Uncomfortable", "Neutral", "Comfortable", "Very Comfortable"]
    },
    {
        id: 2,
        question: "When faced with a complex problem, do you prefer to...",
        options: ["Break it down into smaller parts", "Look for existing solutions", "Brainstorm with a team", "Analyze the root cause deeply"]
    },
    {
        id: 3,
        question: "Which of the following topics interests you the most?",
        options: ["Artificial Intelligence", "Digital Marketing", "Financial Analysis", "Graphic Design"]
    },
    {
        id: 4,
        question: "How do you prefer to learn new skills?",
        options: ["Reading documentation", "Watching video tutorials", "Hands-on projects", "Mentorship"]
    }
];

export default function Assessment() {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleOptionSelect = (option) => {
        setAnswers({ ...answers, [currentQuestion]: option });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/assessment-summary');
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <Layout>
            <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-500">
                        <span>Question {currentQuestion + 1} of {questions.length}</span>
                        <span>{Math.round(progress)}% Completed</span>
                    </div>
                    <div className="h-2 w-full bg-secondary-surface/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary-accent transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(option)}
                                    className={cn(
                                        "w-full text-left p-4 rounded-lg border transition-all",
                                        answers[currentQuestion] === option
                                            ? "bg-primary-accent/20 border-primary-accent text-primary-highlight"
                                            : "bg-primary-base border-secondary-surface text-slate-600 hover:bg-primary-surface"
                                    )}
                                >
                                    <div className="flex items-center">
                                        <div className={cn(
                                            "w-4 h-4 rounded-full border mr-3 flex items-center justify-center",
                                            answers[currentQuestion] === option
                                                ? "border-primary-accent bg-primary-accent"
                                                : "border-secondary-surface"
                                        )}>
                                            {answers[currentQuestion] === option && <div className="w-2 h-2 rounded-full bg-primary-base" />}
                                        </div>
                                        {option}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between pt-6">
                            <Button
                                variant="ghost"
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0}
                                className={currentQuestion === 0 ? "invisible" : ""}
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                            </Button>
                            <Button
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                            >
                                {currentQuestion === questions.length - 1 ? 'Finish Assessment' : 'Next Question'}
                                {currentQuestion !== questions.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    );
}
