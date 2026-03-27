import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ChevronDown, Code, BookOpen, Settings, Users, BarChart3, Lock, Smartphone, AlertCircle } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Topics", icon: BookOpen },
  { id: "getting-started", label: "Getting Started", icon: BookOpen },
  { id: "account", label: "Account & Auth", icon: Users },
  { id: "management", label: "Management", icon: Settings },
  { id: "admin", label: "Admin & Staff", icon: BarChart3 },
  { id: "technical", label: "Technical", icon: Code },
];

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    category: "getting-started",
    content: "Welcome to the EAC Platform, a comprehensive event and competition management system. This platform is designed to streamline the entire lifecycle of events, from registration and approval to participation and reporting. Whether you're a participant, organisational representative, or staff member, this guide will help you navigate the system efficiently. The platform offers role-based access, ensuring each user type has access to the tools they need. Start by creating your account or logging in to access the features available to you.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// Access the platform\nconst platformUrl = 'https://eac.platform.com';\nconst userRole = 'participant'; // or 'staff' or 'organizer'"
  },
  {
    id: "account-registration",
    title: "Account Registration",
    category: "account",
    content: "Creating an account on the EAC Platform is straightforward and secure. Navigate to the registration page and fill in your personal details including full name, email address, and create a secure password. Verify your email address by clicking the confirmation link sent to your inbox within 5 minutes of registration. If you don't receive the email, check your spam folder or request a new verification email. Once verified, you can log in immediately using your email and password. For security purposes, we recommend using a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters. If you forget your password, use the 'Forgot Password' feature to reset it securely.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    codeExample: "// Registration endpoint\nPOST /api/auth/register\n{\n  \"email\": \"user@example.com\",\n  \"password\": \"SecurePass123!\",\n  \"fullName\": \"John Doe\"\n}"
  },
  {
    id: "user-dashboard",
    title: "User Dashboard",
    category: "management",
    content: "Your personal dashboard is your command center within the EAC Platform. Here you can view your registered events, participation history, profile information, and upcoming competitions. The dashboard displays a summary of your activity, including pending approvals, event schedules, and important notifications. Update your profile by clicking on 'View Profile' to edit your personal information, contact details, and preferences. Manage your event participation from the 'MY DASHBOARD' section where you can view event details, schedules, and your participation status. The dashboard also includes a notification center showing system announcements, event updates, and approval statuses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    codeExample: "// Fetch dashboard data\nGET /api/dashboard\nResponse: {\n  events: [...],\n  stats: {...},\n  notifications: [...]\n}"
  },
  {
    id: "organisation-registration",
    title: "Organisation Registration",
    category: "account",
    content: "Organisations such as clubs, schools, and institutions can register on the platform to manage collective participation. Navigate to 'Register Organisation' and provide your organisation's name, registration number, address, and contact information. Designate an organisation manager and coach. Submit your organisation details along with supporting documentation (such as registration certificates or proof of legitimacy). Your submission will be reviewed by staff members and approved within 3-5 business days. Once approved, organisation administrators can manage member accounts, register teams for events, and access organisational reporting features. Organisations have the ability to bulk-register participants and track their performance across multiple events.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// Register organisation\nPOST /api/organisations/register\n{\n  \"name\": \"Elite Sports Club\",\n  \"registrationNumber\": \"ORG123456\",\n  \"email\": \"admin@club.com\"\n}"
  },
  {
    id: "teams-collaboration",
    title: "Teams & Collaboration",
    category: "management",
    content: "The Teams feature enables organisations to form groups of participants for team-based competitions. Create a team by specifying the team name, role designations, and adding members from your approved participants. Each team can have coaches, managers, and players with clearly defined roles and responsibilities. Team managers can oversee member participation, track attendance, and manage team registrations for events. Collaboration tools include team messaging, shared calendars, and integrated file sharing for strategy documents and schedules. Teams can participate in league formats with ongoing standings and rankings. The platform automatically tracks team statistics, win-loss records, and performance metrics across all events.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// Create team\nPOST /api/teams/create\n{\n  \"teamName\": \"Fire Dragons\",\n  \"organisationId\": \"ORG123\",\n  \"members\": [\"user1\", \"user2\", \"user3\"]\n}"
  },
  {
    id: "staff-portal",
    title: "Staff Portal",
    category: "admin",
    content: "The Staff Portal provides administrative access to manage the entire EAC Platform. Staff members can log in with elevated permissions to access the approval queue, manage user accounts, and oversee event administration. Within the portal, staff can review pending organisation registrations, player approvals, and verify participant credentials. The portal includes tools for creating system-wide announcements, managing event categories, and configuring platform settings. Staff members can generate comprehensive reports on platform usage, event participation, and approval metrics. The portal also features an audit log documenting all administrative actions for compliance and security purposes. Different staff roles (Admins, Moderators, Reviewers) have varying levels of access and permissions.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// Admin dashboard access\nGET /api/admin/dashboard\nHeaders: { Authorization: 'Bearer token' }\nResponse: { pendingApprovals, users, events }"
  },
  {
    id: "event-management",
    title: "Event Management",
    category: "management",
    content: "Event management is at the core of the EAC Platform. Authorised users can create new events by specifying event name, category, date, location, and participation requirements. During event creation, set the maximum number of participants, registration deadline, and qualification criteria. Events can be configured as individual or team-based competitions. Once created, events appear in the platform's event directory where participants can view details and register. Event managers can modify event details up until 48 hours before the event start time. Track participant registrations in real-time through the event dashboard. Manage event schedules, assign venues, and coordinate with participating teams. The system supports multiple events running simultaneously with independent participation and result tracking.",
    image: "https://images.unsplash.com/photo-1540575467063-178f50202fe4?w=500&h=300&fit=crop",
    codeExample: "// Create event\nPOST /api/events/create\n{\n  \"name\": \"Championship 2026\",\n  \"date\": \"2026-05-15\",\n  \"maxParticipants\": 100,\n  \"type\": \"team\"\n}"
  },
  {
    id: "results-scoring",
    title: "Results & Scoring",
    category: "admin",
    content: "The results management system provides flexible scoring options for various competition formats. Staff can input results during or immediately after events through the results entry interface. The platform supports multiple scoring systems including points-based, match results, time-based, and custom scoring rules. Automated calculations ensure fair and accurate ranking based on defined criteria. Leaderboards are updated in real-time and visible to all participants and spectators. Historical result data is maintained for performance analysis and archival purposes. Results can be disputed within a 7-day window with staff review and resolution. The system generates performance statistics showing win-loss records, averages, rankings, and trends for individual competitors and teams.",
    image: "https://images.unsplash.com/photo-1551075810-e95eb1189f2b?w=500&h=300&fit=crop",
    codeExample: "// Submit results\nPOST /api/results/submit\n{\n  \"eventId\": \"E123\",\n  \"winner\": \"team1\",\n  \"score\": \"3-1\",\n  \"timestamp\": \"2026-05-15T14:30:00Z\"\n}"
  },
  {
    id: "approvals",
    title: "Approvals",
    category: "admin",
    content: "The approval system ensures only legitimate participants and organisations compete on the platform. All new organisation registrations require staff approval before they can register participants. Individual player accounts may require verification depending on event requirements. The approval workflow is transparent - applicants can view their submission status and receive feedback on any rejections. Staff members access the Approvals section to review pending submissions and make decisions. Approvals typically take 3-5 business days, though expedited approvals can be processed within 24 hours for urgent cases. Approved organisations and participants receive email notifications confirming their status. The system maintains approval history for auditing purposes. Appeals or resubmissions can be made after addressing feedback provided during the initial review.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// Approve submission\nPOST /api/approvals/review\n{\n  \"submissionId\": \"SUB456\",\n  \"status\": \"approved\",\n  \"feedback\": \"Documentation verified\"\n}"
  },
  {
    id: "reports",
    title: "Reports",
    category: "admin",
    content: "Comprehensive reporting capabilities help you analyse participation, performance, and platform usage. Generate participant reports showing registration, attendance, and performance data across events. Event reports provide insights into participation numbers, demographics, and outcome statistics. Staff members can access system-wide reports including user growth, approval metrics, and platform health indicators. Reports can be filtered by date range, event type, organisation, or participant demographics. Export reports in multiple formats (PDF, CSV, Excel) for further analysis and distribution. Custom reports can be created by selecting specific metrics and data fields relevant to your needs. Scheduled reports can be generated automatically and delivered via email on a regular basis. All reports include detailed analytics and visualisations to help identify trends and patterns.",
    image: "https://images.unsplash.com/photo-1553531088-189a835c93ea?w=500&h=300&fit=crop",
    codeExample: "// Generate report\nPOST /api/reports/generate\n{\n  \"type\": \"event\",\n  \"format\": \"pdf\",\n  \"dateRange\": \"2026-01-01_2026-03-31\"\n}"
  },
  {
    id: "notifications",
    title: "Notifications & Communication",
    category: "technical",
    content: "Stay informed with the EAC Platform's comprehensive notification system. Receive real-time alerts for event updates, registration deadlines, result postings, and approval status changes. Customize your notification preferences by selecting which types of alerts you want to receive and your preferred delivery method (email, SMS, or in-app). Important announcements from event organisers and staff are broadcast platform-wide. Team-specific communications allow coaches and managers to coordinate with their members. Scheduled reminders help participants remember upcoming events and deadlines. The notification history is maintained in-app for reference and review. Urgent notifications are marked with priority indicators to ensure critical messages aren't missed.",
    image: "https://images.unsplash.com/photo-1512941691920-25bef266aae7?w=500&h=300&fit=crop",
    codeExample: "// Send notification\nPOST /api/notifications/send\n{\n  \"userId\": \"user123\",\n  \"type\": \"event_update\",\n  \"channels\": [\"email\", \"in-app\"]\n}"
  },
  {
    id: "security-privacy",
    title: "Security & Privacy",
    category: "technical",
    content: "The EAC Platform prioritizes the security and privacy of all user data. All communications are encrypted using industry-standard SSL/TLS protocols. User passwords are securely hashed and never stored in plain text. Two-factor authentication (2FA) is available for enhanced account security. Personal data is protected under strict data protection regulations and compliance standards. Staff access is logged and audited for accountability. Users can control their data visibility and privacy settings through the account preferences. The platform undergoes regular security audits and penetration testing. Data backups are maintained for disaster recovery and business continuity. Sensitive information like payment data is isolated and encrypted separately.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763bed3?w=500&h=300&fit=crop",
    codeExample: "// Enable 2FA\nPOST /api/security/2fa/enable\n{\n  \"userId\": \"user123\",\n  \"method\": \"authenticator\"\n}"
  },
  {
    id: "mobile-access",
    title: "Mobile Access",
    category: "technical",
    content: "The EAC Platform is fully optimized for mobile devices including smartphones and tablets. The responsive design adapts seamlessly to any screen size while maintaining full functionality. The native mobile app (iOS and Android) offers enhanced features including offline mode for viewing cached data. Push notifications keep you updated on important events and deadlines even when away from your computer. Mobile users can register for events, view results, check standings, and communicate with their teams from anywhere. The mobile interface includes simplified navigation for easier access to frequently used features. Download the app from the App Store or Google Play Store for the best mobile experience.",
    image: "https://images.unsplash.com/photo-1512941691920-25bef266aae7?w=500&h=300&fit=crop",
    codeExample: "// Mobile API endpoint\nGET /api/mobile/events?filter=upcoming\nHeaders: { 'User-Agent': 'EACApp/1.0' }\nResponse: { events: [] }"
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting & Support",
    category: "technical",
    content: "Encountering issues? The troubleshooting guide covers common problems and solutions. Clear your browser cache and cookies if you experience loading issues. Ensure your internet connection is stable for optimal performance. Update your browser to the latest version for better compatibility. For account access issues, use the password recovery feature or contact support. Technical issues should be reported through the support ticket system with screenshots when possible. Response times typically range from 2-24 hours depending on urgency. The support team is available Monday-Friday, 9AM-6PM in your local timezone. For urgent issues affecting events, call the emergency hotline. Review the help documentation and video tutorials before contacting support.",
    image: "https://images.unsplash.com/photo-1516321318423-f06628867ad1?w=500&h=300&fit=crop",
    codeExample: "// Submit support ticket\nPOST /api/support/tickets\n{\n  \"title\": \"Login issue\",\n  \"description\": \"Cannot access dashboard\",\n  \"priority\": \"high\"\n}"
  },
  {
    id: "best-practices",
    title: "Best Practices",
    category: "getting-started",
    content: "Follow these best practices to maximize your EAC Platform experience. Keep your account information current and secure with a strong password. Register early for events to secure your participation slot. Review event rules and requirements before registration to ensure eligibility. Maintain clear communication with your team or organisation managers. Submit all required documents during registration approval to avoid delays. Check notifications regularly to stay informed of important updates. Follow the platform's code of conduct and respect all community guidelines. Report inappropriate behaviour or disputes to staff promptly. Use the search functionality to find answers in documentation before asking support. Provide detailed feedback to help us improve the platform continuously.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    codeExample: "// API best practices\n// Always use HTTPS\n// Include proper auth headers\n// Handle errors gracefully\n// Cache responses when possible"
  },
  {
    id: "faqs",
    title: "FAQs",
    category: "getting-started",
    content: "Q: How long does account verification take? A: Usually instantaneous after confirming your email. Q: Can I change my registered organisation? A: Yes, contact support to transfer your account. Q: What formats are allowed for document uploads? A: PDF, JPG, PNG (max 5MB). Q: How do I reset my password? A: Use 'Forgot Password' on the login page. Q: Are there any participation fees? A: Event fees vary; check individual event details. Q: Can organisations register on behalf of participants? A: Yes, with participant consent. Q: How are results recorded? A: Results are entered by event staff or uploaded in bulk. Q: Can I appeal an approval rejection? A: Yes, within 14 days with additional documentation. Q: Is my data secure? A: Yes, we use industry-standard encryption and comply with data protection regulations. Q: Where can I get technical support? A: Contact our support team at support@eacplatform.com or call +1-800-EAC-HELP.",
    image: "https://images.unsplash.com/photo-1516321318423-f06628867ad1?w=500&h=300&fit=crop",
    codeExample: null
  }
];

export default function Documentation() {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = sections.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.content.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-3">EAC Platform Documentation</h1>
            <p className="text-blue-100 text-lg">Complete guide to using the platform</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Input
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                  }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-400 mb-6"
        >
          Showing {filtered.length} of {sections.length} articles
        </motion.div>

        {/* Documentation Cards */}
        <div className="grid gap-6">
          {filtered.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-xl overflow-hidden shadow-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all">
                {/* Image */}
                {section.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-slate-700">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <CardContent className="p-6">
                  {/* Title and Expand Button */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {section.title}
                      </h2>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm font-medium">
                        {CATEGORIES.find((c) => c.id === section.category)?.label}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setExpandedId(expandedId === section.id ? null : section.id)
                      }
                      className="ml-4 p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                    >
                      <motion.div
                        animate={{ rotate: expandedId === section.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === section.id ? "auto" : 0,
                      opacity: expandedId === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {section.content}
                    </p>

                    {/* Code Example */}
                    {section.codeExample && (
                      <div className="mt-6 pt-6 border-t border-slate-700">
                        <div className="flex items-center gap-2 mb-3">
                          <Code size={18} className="text-blue-400" />
                          <span className="text-sm font-semibold text-slate-300">
                            Code Example
                          </span>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap break-words">
                            {section.codeExample}
                          </pre>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Collapsed Preview */}
                  {expandedId !== section.id && (
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {section.content.substring(0, 150)}...
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <AlertCircle size={48} className="mx-auto text-slate-500 mb-4" />
            <p className="text-slate-400 text-lg">
              No documentation found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
