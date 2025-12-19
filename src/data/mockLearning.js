export const mockCourses = [
    {
        id: 1,
        title: 'Advanced Python for Data Science',
        provider: 'Coursera',
        mentors: ['Dr. Sarah Chen', 'Emily Davis', 'David Miller', 'Michael Brown'],
        platform: 'Coursera',
        duration: '40 hours',
        level: 'Advanced',
        rating: 4.8,
        reviews: 1240,
        price: 'Paid',
        fee: 'RM 229',
        category: 'Data Science',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        skills: ['Python', 'Data Analysis', 'Pandas'],
        link: 'https://www.coursera.org/learn/python-data-analysis',
        description: 'Master Python for data science. Learn to analyze and visualize data using pandas, NumPy, and Matplotlib.',
        syllabus: [
            { title: 'Week 1: Python Basics Refresher', hours: 10, details: 'Review of Python syntax, data types, and control structures. Introduction to Jupyter Notebooks and setting up the environment.' },
            { title: 'Week 2: Data Manipulation with Pandas', hours: 10, details: 'Deep dive into Pandas Series and DataFrames. Data cleaning, merging, handling missing values, and advanced indexing techniques.' },
            { title: 'Week 3: Data Visualization', hours: 10, details: 'Creating static and interactive visualizations using Matplotlib and Seaborn. Best practices for storytelling with data.' },
            { title: 'Week 4: Final Project', hours: 10, details: 'Apply all learned concepts to analyzing a real-world dataset. Build a complete data pipeline and present the findings.' }
        ]
    },
    {
        id: 2,
        title: 'Machine Learning A-Z',
        mentors: ['Dr. Andrew Ng', 'Kirill Eremenko'],
        platform: 'Udemy',
        duration: '40 hours',
        level: 'Intermediate',
        rating: 4.7,
        reviews: 8500,
        price: 'Paid',
        fee: 'RM 399',
        category: 'AI & ML',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2664&auto=format&fit=crop',
        skills: ['Machine Learning', 'Python', 'Algorithms'],
        link: 'https://www.coursera.org/specializations/machine-learning-introduction', // User requested all link to Coursera
        description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
        syllabus: [
            { title: 'Introduction to ML', hours: 5 },
            { title: 'Regression', hours: 10 },
            { title: 'Classification', hours: 15 },
            { title: 'Clustering', hours: 10 }
        ]
    },
    {
        id: 3,
        title: 'System Design Interview Guide',
        mentors: ['Alex Xu', 'Sahn Lam'],
        platform: 'Educative',
        duration: '10 hours',
        level: 'Advanced',
        rating: 4.9,
        reviews: 500,
        price: 'Paid',
        fee: 'RM 179',
        category: 'System Design',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        skills: ['System Design', 'Scalability', 'Architecture'],
        link: 'https://www.coursera.org/learn/software-design-architecture', // User requested all link to Coursera
        description: 'Learn how to design large-scale distributed systems and prepare for system design interviews.',
        syllabus: [
            { title: 'Load Balancing', hours: 2 },
            { title: 'Caching', hours: 2 },
            { title: 'Database Sharding', hours: 3 },
            { title: 'System Design Case Studies', hours: 3 }
        ]
    },
    {
        id: 4,
        title: 'Statistical Thinking for Data Science',
        mentors: ['Prof. Mine Çetinkaya-Rundel'],
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
            { title: 'Probability', hours: 5 },
            { title: 'Random Variables', hours: 5 },
            { title: 'Inference', hours: 5 },
            { title: 'Linear Regression', hours: 5 }
        ]
    },
    {
        id: 5,
        title: 'React - The Complete Guide',
        mentors: ['Gary Simon', 'Maximilian Schwarzmüller'],
        platform: 'Udemy',
        duration: '48 hours',
        level: 'Intermediate',
        rating: 4.8,
        reviews: 15000,
        price: 'Paid',
        fee: 'RM 65',
        category: 'Frontend',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        skills: ['React', 'JavaScript', 'Frontend'],
        link: 'https://www.coursera.org/learn/react-basics', // User requested all link to Coursera
        description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
        syllabus: [
            { title: 'React Basics', hours: 10 },
            { title: 'State & Props', hours: 12 },
            { title: 'React Hooks', hours: 14 },
            { title: 'Redux & State Management', hours: 12 }
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
