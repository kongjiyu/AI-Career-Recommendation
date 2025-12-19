export const mockCourses = [
    {
        id: 1,
        title: 'Advanced Python for Data Science',
        provider: 'Coursera',
        mentor: 'Dr. Sarah Chen',
        platform: 'Coursera',
        duration: '40 hours',
        level: 'Advanced',
        rating: 4.8,
        reviews: 1240,
        price: 'Paid',
        fee: '$49.99',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        skills: ['Python', 'Data Analysis', 'Pandas'],
        link: 'https://www.coursera.org/learn/python-data-analysis',
        description: 'Master Python for data science. Learn to analyze and visualize data using pandas, NumPy, and Matplotlib.',
        syllabus: [
            'Week 1: Python Basics Refresher',
            'Week 2: Data Manipulation with Pandas',
            'Week 3: Data Visualization',
            'Week 4: Final Project'
        ]
    },
    {
        id: 2,
        title: 'Machine Learning A-Z',
        provider: 'Udemy',
        platform: 'Udemy',
        duration: '40 hours',
        level: 'Intermediate',
        rating: 4.7,
        reviews: 8500,
        price: 'Paid',
        fee: '$89.99',
        category: 'AI & ML',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2664&auto=format&fit=crop',
        skills: ['Machine Learning', 'Python', 'Algorithms'],
        link: 'https://www.coursera.org/specializations/machine-learning-introduction', // User requested all link to Coursera
        description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
        syllabus: [
            'Introduction to ML',
            'Regression',
            'Classification',
            'Clustering'
        ]
    },
    {
        id: 3,
        title: 'System Design Interview Guide',
        provider: 'Educative.io',
        platform: 'Educative',
        duration: '10 hours',
        level: 'Advanced',
        rating: 4.9,
        reviews: 500,
        price: 'Paid',
        fee: '$39.99',
        category: 'System Design',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        skills: ['System Design', 'Scalability', 'Architecture'],
        link: 'https://www.coursera.org/learn/software-design-architecture', // User requested all link to Coursera
        description: 'Learn how to design large-scale distributed systems and prepare for system design interviews.',
        syllabus: [
            'Load Balancing',
            'Caching',
            'Database Sharding',
            'System Design Case Studies'
        ]
    },
    {
        id: 4,
        title: 'Statistical Thinking for Data Science',
        provider: 'edX',
        platform: 'edX',
        duration: '20 hours',
        level: 'Beginner',
        rating: 4.6,
        reviews: 320,
        price: 'Free',
        fee: 'Free',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop',
        skills: ['Statistics', 'Data Analysis', 'Math'],
        link: 'https://www.coursera.org/learn/probability-statistics', // User requested all link to Coursera
        description: 'Learn how to think about data and uncertainty using the tools of probability and statistics.',
        syllabus: [
            'Probability',
            'Random Variables',
            'Inference',
            'Linear Regression'
        ]
    },
    {
        id: 5,
        title: 'React - The Complete Guide',
        provider: 'Udemy',
        platform: 'Udemy',
        duration: '48 hours',
        level: 'Intermediate',
        rating: 4.8,
        reviews: 15000,
        price: 'Paid',
        fee: '$13.99',
        category: 'Frontend',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        skills: ['React', 'JavaScript', 'Frontend'],
        link: 'https://www.coursera.org/learn/react-basics', // User requested all link to Coursera
        description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        syllabus: [
            'React Basics',
            'State & Props',
            'React Hooks',
            'Redux & State Management'
        ]
    }
];

export const mockSkillGaps = [
    { skill: 'System Design', currentScore: 40, targetScore: 85, importance: 'Critical' },
    { skill: 'Machine Learning', currentScore: 30, targetScore: 75, importance: 'High' },
    { skill: 'Cloud Computing', currentScore: 50, targetScore: 80, importance: 'High' },
    { skill: 'Statistics', currentScore: 60, targetScore: 70, importance: 'Medium' }
];

export const mockRoadmap = [
    {
        id: 1,
        phase: 'Phase 1: Foundations',
        duration: 'Month 1-2',
        status: 'In Progress',
        items: [
            { id: 101, type: 'Course', title: 'Python for Data Science', status: 'Completed' },
            { id: 102, type: 'Course', title: 'Intro to Statistics', status: 'In Progress' }
        ]
    },
    {
        id: 2,
        phase: 'Phase 2: Core Skills',
        duration: 'Month 3-4',
        status: 'Upcoming',
        items: [
            { id: 201, type: 'Course', title: 'Machine Learning A-Z', status: 'Locked' },
            { id: 202, type: 'Project', title: 'Build a Prediction Model', status: 'Locked' }
        ]
    },
    {
        id: 3,
        phase: 'Phase 3: Advanced Specialization',
        duration: 'Month 5-6',
        status: 'Upcoming',
        items: [
            { id: 301, type: 'Course', title: 'System Design Interview Guide', status: 'Locked' },
            { id: 302, type: 'Certification', title: 'AWS Cloud Practitioner', status: 'Locked' }
        ]
    }
];
