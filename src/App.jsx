import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DemoNav from './pages/DemoNav';
import ProfileSetup from './pages/setup/ProfileSetup';
import PortfolioUpload from './pages/setup/PortfolioUpload';
import Assessment from './pages/assessment/Assessment';
import AssessmentSummary from './pages/assessment/AssessmentSummary';
import CareerDashboard from './pages/career/CareerDashboard';
import CareerDetail from './pages/career/CareerDetail';
import CareerComparison from './pages/career/CareerComparison';
import SkillGapAnalysis from './pages/learning/SkillGapAnalysis';
import CourseCatalog from './pages/learning/CourseCatalog';
import CourseDetail from './pages/learning/CourseDetail';
import LearningRoadmap from './pages/learning/LearningRoadmap';
import MentorListing from './pages/mentorship/MentorListing';
import MentorProfile from './pages/mentorship/MentorProfile';
import MentorshipScheduling from './pages/mentorship/MentorshipScheduling';
import JobListing from './pages/jobs/JobListing';
import JobDetail from './pages/jobs/JobDetail';
import JobApplication from './pages/jobs/JobApplication';
import CounsellorDashboard from './pages/counsellor/CounsellorDashboard';
import StudentDetail from './pages/counsellor/StudentDetail';
import UserDashboard from './pages/dashboard/UserDashboard';
import SkillProgress from './pages/dashboard/SkillProgress';
import CareerReadiness from './pages/dashboard/CareerReadiness';
import Achievements from './pages/dashboard/Achievements';
import Notifications from './pages/dashboard/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo" element={<DemoNav />} />
        <Route path="/setup" element={<ProfileSetup />} />
        <Route path="/upload-portfolio" element={<PortfolioUpload />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessment-summary" element={<AssessmentSummary />} />

        {/* Module 6 Routes (User Dashboard - Progress) */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/dashboard/progress" element={<SkillProgress />} />
        <Route path="/dashboard/readiness" element={<CareerReadiness />} />
        <Route path="/dashboard/achievements" element={<Achievements />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />

        <Route path="/career/results" element={<CareerDashboard />} />
        <Route path="/career/compare" element={<CareerComparison />} />
        <Route path="/career/:id" element={<CareerDetail />} />

        {/* Module 3 Routes */}
        <Route path="/learning/analysis" element={<SkillGapAnalysis />} />
        <Route path="/learning/courses" element={<CourseCatalog />} />
        <Route path="/learning/course/:id" element={<CourseDetail />} />
        <Route path="/learning/roadmap" element={<LearningRoadmap />} />

        {/* Module 4 Routes */}
        <Route path="/mentorship/find" element={<MentorListing />} />
        <Route path="/mentorship/:id" element={<MentorProfile />} />
        <Route path="/mentorship/:id/schedule" element={<MentorshipScheduling />} />

        <Route path="/jobs/find" element={<JobListing />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs/:id/apply" element={<JobApplication />} />

        {/* Module 5 Routes (Counsellor) */}
        <Route path="/counsellor/dashboard" element={<CounsellorDashboard />} />
        <Route path="/counsellor/student/:id" element={<StudentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
