Below is a complete, assignment-ready prototype plan for AI-Powered Personalised Career Guidance (Title 6).
It is written assuming NO backend implementation (frontend prototype only), and it covers all pages previously mentioned, with tech stack + page-by-page descriptions.

You can paste large parts of this directly into your SDD (Prototype / UI Design / Implementation Plan section) and Chapter 4 (Mockups).

⸻

1. Prototype Development Plan (Without Backend)

1.1 Objective

The objective of this prototype is to visually and functionally demonstrate how users interact with the AI-Powered Personalised Career Guidance system, focusing on user flows, UI layout, and feature coverage, without implementing server-side logic or AI computation.

The prototype will simulate system behavior using static data, dummy AI outputs, and predefined interaction flows to validate usability, completeness of use cases, and design coherence.

⸻

1.2 Scope of the Prototype

The prototype will:
	•	Simulate user onboarding, assessment, recommendations, learning, mentorship, and progress tracking
	•	Use static JSON / mock data to represent AI outputs and job/course listings
	•	Focus on navigation flow and UI clarity, not actual data processing
	•	Support Student/User role and Counsellor role

The prototype will NOT:
	•	Implement real AI models
	•	Store persistent data
	•	Perform real job applications or course enrollment
	•	Connect to external APIs

⸻
2. Technology Stack (Prototype Only)

2.1 Frontend Framework

Layer	Technology	Justification
UI Framework	React.js	Component-based, reusable UI
Styling	Tailwind CSS	Fast prototyping, consistent design
Routing	React Router	Page navigation simulation
Charts	Chart.js / Recharts	Visual progress & analytics
Icons	Lucide / FontAwesome	Clear UI indicators


⸻

2.2 Design & Prototyping Tools

Tool	Purpose
Figma	UI mockups (required by assignment)
Canva / FigJam	User flow diagrams
JSON files	Mock data for AI outputs, jobs, mentors


⸻

2.3 Data Simulation
	•	Static JSON files for:
	•	Career recommendations
	•	Skill scores
	•	Course listings
	•	Mentor profiles
	•	Job listings
	•	Hardcoded AI explanations (e.g. “Based on your interest in problem-solving…”)

⸻

2.4 UI/UX Design System

**Color Palette (Light Mode - Clean Tech/Future):**
- **Primary Base (Background):** `#F8FAFC` (Slate 50) - Clean, bright background
- **Surface/Card:** `#FFFFFF` (White) - Crisp cards with subtle borders
- **Primary Accent:** `#0EA5E9` (Sky 500) - Vibrant, futuristic blue for actions
- **Secondary Accent:** `#64748B` (Slate 500) - For secondary elements/borders
- **Highlight/Text:** `#0F172A` (Slate 900) - High contrast dark text for readability
- **Text Secondary:** `#475569` (Slate 600) - Muted text

**Typography:**
- Font Family: `Inter` (Body) and `Space Grotesk` (Headers) - Retaining the tech feel.

⸻

3. Page-by-Page Description (ALL Pages)

⸻

🔹 MODULE 1: Skill & Interest Assessment Engine

1. Sign Up / Login Page

Purpose: Entry point to the system
Description:
Allows users to log in or create an account. Authentication is simulated. Role selection (Student / Counsellor) determines accessible pages.

⸻

2. User Profile Setup Page

Purpose: Collect baseline career data
Description:
Form-based page to input education level, field of study, skills, interests, and career goals. Data is stored temporarily in state.

⸻

3. Portfolio Upload Page

Purpose: Simulate portfolio submission
Description:
Allows users to upload CVs, certificates, or project files (file upload UI only). The system displays extracted “skills” using dummy parsed results.

⸻

4. Skill & Interest Assessment Page

Purpose: Conduct assessment
Description:
Interactive questionnaire with multiple-choice and scenario-based questions. Progress indicator shows completion percentage.

⸻

5. Assessment Summary Page

Purpose: Show assessment results
Description:
Displays skill scores, interest areas, and personality indicators using charts. Results are passed to the AI Career Matching module.

⸻

🔹 MODULE 2: AI Career Matching Module

6. Career Recommendation Overview Page

Purpose: Display AI results
Description:
Shows a ranked list of recommended careers with fit scores, demand indicators, and short explanations.

⸻

7. Career Detail Page

Purpose: Explain recommendations
Description:
Detailed view of a selected career, including role description, required skills, salary range, and growth outlook.

⸻

8. Career Comparison Page (Optional but Valuable)

Purpose: Decision support
Description:
Allows users to compare multiple careers side-by-side based on skill match, salary, and learning effort.

⸻

🔹 MODULE 3: Learning Recommendation Engine

9. Skill Gap Analysis Page

Purpose: Identify missing skills
Description:
Compares current skills vs required skills for chosen career, highlighting gaps visually.

⸻

10. Recommended Courses Page

Purpose: Suggest learning paths
Description:
Lists recommended online courses, certifications, or programs with duration, level, and provider.

⸻

11. Course Detail Page

Purpose: Course information
Description:
Displays course syllabus, learning outcomes, and a simulated “Enroll” button.

⸻

12. Learning Roadmap Page

Purpose: Long-term planning
Description:
Timeline-based roadmap showing recommended learning order and milestones.

⸻

🔹 MODULE 4: Mentorship & Job Portal

13. Mentor Listing Page

Purpose: Browse mentors
Description:
Displays mentor profiles filtered by industry, experience, and skills.

⸻

14. Mentor Profile Page

Purpose: Mentor evaluation
Description:
Shows mentor background, expertise, availability, and reviews.

⸻

15. Mentorship Scheduling Page

Purpose: Book sessions
Description:
Calendar-based UI allowing users to select time slots and request mentorship sessions.

⸻

16. Job & Internship Listing Page

Purpose: Career opportunities
Description:
Shows job and internship recommendations based on AI matching results.

⸻

17. Job Detail Page

Purpose: Job evaluation
Description:
Detailed job description including responsibilities, required skills, and company profile.

⸻

18. Job Application Page

Purpose: Simulated application
Description:
Allows users to apply using profile data and portfolio. Submission confirmation is simulated.

⸻

🔹 MODULE 5: Progress Dashboard

19. User Dashboard (Home Page)

Purpose: Central overview
Description:
Displays current career goal, learning progress, readiness score, and upcoming activities.

⸻

20. Skill Progress Page

Purpose: Track improvement
Description:
Charts showing skill growth over time based on completed learning activities.

⸻

21. Career Readiness Page

Purpose: Readiness evaluation
Description:
Displays a readiness score with explanation and suggestions to improve employability.

⸻

22. Achievements & History Page

Purpose: Motivation & tracking
Description:
Lists completed courses, mentorship sessions, applications, and earned badges.

⸻

23. Notifications & Insights Page

Purpose: System feedback
Description:
Displays AI-generated tips, reminders, and career insights.

⸻

🔹 COUNSELLOR PAGES (Human-in-the-Loop)

24. Counsellor Login Page

Purpose: Secure access
Description:
Login page for counsellors with role-based access.

⸻

25. User Case Review Page

Purpose: Review AI outputs
Description:
Allows counsellors to view user assessments, career matches, and progress.

⸻

26. Career Plan Adjustment Page

Purpose: Override AI
Description:
Counsellors can modify recommendations and learning paths manually.

⸻

27. Session Notes Page

Purpose: Record guidance
Description:
Allows counsellors to add notes, recommendations, and follow-up actions.