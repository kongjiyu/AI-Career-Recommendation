export const mockReadiness = {
    score: 72,
    level: 'Intermediate',
    breakdown: [
        { category: 'Technical Skills', score: 85, max: 100 },
        { category: 'Portfolio', score: 60, max: 100 },
        { category: 'Soft Skills', score: 70, max: 100 },
        { category: 'Network', score: 40, max: 100 }
    ],
    suggestions: [
        'Complete "System Design" mock interview',
        'Add 2 more projects to your portfolio',
        'Connect with 5 more mentors in your field'
    ]
};

export const mockSkillHistory = [
    { month: 'Jan', score: 45 },
    { month: 'Feb', score: 50 },
    { month: 'Mar', score: 55 },
    { month: 'Apr', score: 65 },
    { month: 'May', score: 70 },
    { month: 'Jun', score: 78 }
];

export const mockAchievements = [
    { id: 1, title: 'Fast Learner', description: 'Completed 3 courses in one month', icon: 'zap', unlocked: true, date: '2024-05-15' },
    { id: 2, title: 'Networker', description: 'Connected with your first mentor', icon: 'users', unlocked: true, date: '2024-06-02' },
    { id: 3, title: 'Code Warrior', description: 'Submitted 5 projects', icon: 'code', unlocked: false, progress: 3, total: 5 },
    { id: 4, title: 'Job Ready', description: 'Reach 90% Readiness Score', icon: 'briefcase', unlocked: false, progress: 72, total: 90 }
];

export const mockNotifications = [
    { id: 1, title: 'New Course Recommendation', message: 'Based on your recent progress, we recommend "Advanced React Patterns".', type: 'info', time: '2 hours ago' },
    { id: 2, title: 'Mentor Session Confirmed', message: 'Your session with Sarah Chen is confirmed for tomorrow at 10:00 AM.', type: 'success', time: '5 hours ago' },
    { id: 3, title: 'Profile Incomplete', message: 'Add your latest project to boost your readiness score.', type: 'warning', time: '1 day ago' },
    { id: 4, title: 'Weekly Insight', message: 'Demand for AI Solutions Architects has increased by 15% this month.', type: 'insight', time: '2 days ago' }
];

export const mockActivityLog = [
    { id: 1, action: 'Completed Course', detail: 'Python for Data Science', time: '2 days ago' },
    { id: 2, action: 'Updated Portfolio', detail: 'Added "E-commerce App" project', time: '5 days ago' },
    { id: 3, action: 'Assessment', detail: 'Retook Skill Assessment', time: '1 week ago' }
];
