export const mockMentors = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'Staff Software Engineer',
        company: 'Google',
        expertise: ['System Design', 'Scalability', 'Career Growth', 'Python'],
        rating: 4.9,
        reviews: 42,
        imageColor: 'bg-blue-100', // Placeholder for avatar
        bio: 'I help engineers scale their systems and their careers. 10+ years of experience in distributed systems.',
        availability: ['Mon', 'Wed', 'Fri']
    },
    {
        id: 2,
        name: 'David Miller',
        role: 'Senior Data Scientist',
        company: 'Netflix',
        expertise: ['Machine Learning', 'A/B Testing', 'Data Strategy', 'R'],
        rating: 5.0,
        reviews: 28,
        imageColor: 'bg-green-100',
        bio: 'Passionate about turning data into product insights. I can help you with your ML portfolio and interview prep.',
        availability: ['Tue', 'Thu']
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Product Manager',
        company: 'Spotify',
        expertise: ['Product Vision', 'Agile', 'User Research', 'Leadership'],
        rating: 4.8,
        reviews: 65,
        imageColor: 'bg-purple-100',
        bio: 'Building products that users love. Transitioned from engineering to PM, happy to guide others on that path.',
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    {
        id: 4,
        name: 'Michael Brown',
        role: 'Frontend Architect',
        company: 'Airbnb',
        expertise: ['React', 'Performance', 'Design Systems', 'JavaScript'],
        rating: 4.7,
        reviews: 19,
        imageColor: 'bg-yellow-100',
        bio: 'Obsessed with pixel perfection and web performance. Let\'s make the web faster together.',
        availability: ['Sat', 'Sun']
    },
    {
        id: 5,
        name: 'Jessica Wilson',
        role: 'UX Research Lead',
        company: 'Figma',
        expertise: ['User Testing', 'Qualitative Analysis', 'Prototyping'],
        rating: 4.9,
        reviews: 50,
        imageColor: 'bg-pink-100',
        bio: 'Understanding the "why" behind user behavior. I enjoy mentoring early-career researchers.',
        availability: ['Wed', 'Fri']
    }
];

export const mockJobs = [
    {
        id: 1,
        title: 'Junior AI Engineer',
        company: 'TechFlow Solutions',
        location: 'San Francisco, CA (Remote)',
        type: 'Full-time',
        salary: '$90k - $120k',
        description: 'We are looking for a Junior AI Engineer to join our growing team. You will work on NLP models and help deploy them to production.',
        requirements: ['Python', 'PyTorch/TensorFlow', 'Basic NLP knowledge', 'Git'],
        level: 'Entry Level',
        posted: '2 days ago'
    },
    {
        id: 2,
        title: 'Data Science Intern',
        company: 'DataWiz Corp',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$30 - $40 / hr',
        description: 'A 3-month summer internship for students passionate about data. You will work directly with our analytics team on real-world problems.',
        requirements: ['SQL', 'Python/R', 'Communication skills', 'Currently executing a degree'],
        level: 'Internship',
        posted: '5 days ago'
    },
    {
        id: 3,
        title: 'Assistant Product Manager',
        company: 'InnovateX',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$80k - $110k',
        description: 'Assist in the product lifecycle from ideation to launch. Great opportunity for someone looking to break into Product Management.',
        requirements: ['Strong organizational skills', 'Analytical mindset', 'Tech-savvy'],
        level: 'Entry Level',
        posted: '1 week ago'
    },
    {
        id: 4,
        title: 'Frontend Developer',
        company: 'Creative Studios',
        location: 'Remote',
        type: 'Contract',
        salary: '$50 - $80 / hr',
        description: 'We need a React expert to help us build a new marketing dashboard. 3-month contract with possibility of extension.',
        requirements: ['React', 'Tailwind CSS', 'Figma', 'Responsive Design'],
        level: 'Mid-Senior',
        posted: '1 day ago'
    }
];
