import account_registration from './account_registration.jpg';
import account_role_form from './account_role_form.jpg';
import account_roles from './account_roles.jpg';
import add_participant from './add_participant.jpg';
import admin_overview from './admin_overview.jpg';
import approvals_team from './approvals_team.jpg';
import approvals from './approvals.jpg';
import basketball_pooling from './basketball_pooling.jpg';
import basketball from './basketball.jpg';
import best_practices from './best_practices.jpg';
import chess_registration_form from './chess_registration_form.jpg';
import club_approval from './club_approval.jpg';
import create_event from './create_event.jpg';
import culture_form from './culture_form.png';
import event_category from './event_category.jpg';
import event_create_form from './event_create_form.jpg';
import event_management from './event_management.jpg';
import export_reports from './export_reports.jpg';
import faqs from './faqs.jpg';
import get_on from './get_on.jpg';
import getting_started from './getting_started.jpg';
import hero from './hero.png';
import mobile_access from './mobile_access.jpg';
import orgernization_form from './orgernization_form.jpg';
import orgernization_registration from './orgernization_registration.jpg';

//lucide icons
import { ChevronDown, BookOpen, Settings, Users, BarChart3, Lock, Smartphone, AlertCircle, Code } from "lucide-react";
import { path } from 'motion/react-client';

const categories = [
  { id: "all_topics", label: "All Topics", icon: BookOpen },
  { id: "getting_started", label: "Getting Started", icon: BookOpen },
  { id: "accounts_and_auth", label: "Account & Auth", icon: Users },
  { id: "management", label: "Management", icon: Settings },
  { id: "admin_and_staff", label: "Admin & Staff", icon: BarChart3 },
  { id: "technical", label: "Technical", icon: Code },
];

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    path: "/getting_started",
    description: "Start here! This guide walks you through registration, sign in  and all you need to start and use the platform, including account setup, navigation tips, and best practices for a smooth experience.",
    category: "getting-started",
    images: [getting_started, get_on],
    content: `
Welcome to the **EAC Platform** — a centralized system designed to manage events, competitions, and participant workflows efficiently.

This platform supports multiple user roles including participants, organizational representatives, administrators, and staff. Each role has access to tailored features designed to simplify their tasks.

### **Steps to begin using the platform:**

1. Create an account or log in
2. Complete your profile information
3. Explore available events or management tools depending on your role

The dashboard provides quick access to your activities, notifications, and important updates. Use the navigation menu to explore different sections of the platform.

If you're new, we recommend starting with account setup and exploring the "Getting Started" guides to understand the workflow.
`
  },

  {
  id: "account-auth",
    title: "Account & Authentication",
    path: "/accounts_and_auth",
    description: "Learn how to create and manage your account, including registration, login, password management, and security features to keep your information safe.",
    category: "account",
  images: [account_registration, account_role_form, account_roles],
  content: `
 Managing your account is simple and secure on the EAC Platform. 

### **Steps to register:**
1. Navigate to the registration page
2. Enter your full name, email address, and password
3. Confirm your email via the verification link sent to your inbox

*For login:*
- Use your registered email and password
- Ensure your credentials are correct and case-sensitive

### **Security features include:**
- Password reset via email
- Email verification for new accounts
- Session management to protect your data

If you forget your password, click *"Forgot Password"* and follow the instructions to reset it securely.

Always use a strong password and avoid sharing your login credentials.
`
  },
  {
    id: "management",
    title: "Management",
    path: "/management",
    description: "Discover how to manage your activities, events, and teams effectively on the EAC Platform.",
    category: "management",
    images: [create_event, event_create_form, event_management],
    content: `
The Management section of the EAC Platform is designed to give you full control over your events, teams, and participant activities from a single, intuitive interface.

### Event Management
Create, update, and manage events with ease. You can define event details, schedules, locations, and participant requirements. The platform allows you to monitor event progress in real time and make adjustments whenever necessary.

### Team Coordination
Organise your teams efficiently by assigning roles, managing responsibilities, and tracking performance. Whether you're working with small groups or large teams, the platform ensures clear communication and accountability.

### Participant Management
Handle participant registration, approvals, and engagement seamlessly. You can track attendance, manage participant data, and ensure a smooth experience from onboarding to event completion.

### Activity Tracking
Stay informed with detailed insights into ongoing activities. Monitor progress, identify bottlenecks, and ensure everything runs according to plan.

### Best Practices
- Keep your event details up to date to avoid confusion
- Assign clear roles to team members for better coordination
- Regularly monitor activity progress to stay on track
- Use the platform's tools to communicate effectively with participants

With these tools, the EAC Platform empowers you to streamline operations, improve collaboration, and deliver successful events consistently.
`
  },
  {
    id: "admin-staff",
    title: "Admin & Staff",
    path: "/admin-staff",
    description: "Learn about the administrative tools and features available for staff members and platform administrators.",
    category: "admin",
    images: [admin_overview],
   content: `
The Admin & Staff section provides powerful tools that enable administrators and staff members to oversee platform operations, manage users, and maintain system integrity efficiently.

### User Management
Administrators can create, update, and manage user accounts across the platform. Assign roles, control access levels, and ensure that each user has the appropriate permissions based on their responsibilities.

### Role & Permission Control
Define and manage roles for staff members to maintain a secure and organised system. This ensures that sensitive actions and data are only accessible to authorised personnel.

### Event Oversight
Monitor and manage all events across the platform. Admins can review event details, approve or reject submissions, and ensure that all activities align with organisational standards.

### Data & Reporting
Access key insights through reports and analytics. Track platform usage, user engagement, and event performance to support informed decision-making.

### System Configuration
Customise platform settings to suit organisational needs. This may include updating system preferences, managing categories, and maintaining overall platform structure.

### Best Practices
- Assign roles carefully to maintain security and accountability
- Regularly review user access and permissions
- Monitor platform activity to detect and resolve issues early
- Keep system settings updated to reflect organisational changes

With these tools, administrators and staff can maintain control, ensure smooth operations, and support users effectively across the platform.
`
  },
  {
    id: "technical",
    title: "Technical",
    path: "/technical",
    description: "Explore the technical aspects and features of the EAC Platform.",
    category: "technical",
    images: [approvals, approvals_team],
    content: `
The Technical section provides insight into the underlying features and system capabilities that power the EAC Platform. It is designed to help users understand how processes work behind the scenes and how to make the most of the platform’s advanced functionality.

### Workflow & Approvals
The platform includes structured workflows to ensure that actions such as event creation, updates, and requests go through proper approval channels. This helps maintain consistency, accountability, and quality across all activities.

### System Processes
Understand how different components of the platform interact, from data handling to automated processes. This includes how actions trigger updates, notifications, and system responses.

### Integration Capabilities
The EAC Platform is built to support integrations with other tools and services. This allows for improved efficiency, data sharing, and streamlined operations across systems.

### Performance & Reliability
The platform is designed to handle multiple users and activities efficiently. It ensures stable performance, secure data handling, and minimal downtime for a smooth user experience.

### Security & Access Control
Technical safeguards are in place to protect user data and system integrity. Role-based access, authentication, and approval layers ensure that only authorised actions are performed.

### Best Practices
- Follow defined workflows to ensure approvals are processed correctly
- Avoid bypassing system processes to maintain data integrity
- Regularly review system updates and changes
- Report any unexpected behaviour to maintain platform reliability

This section helps you better understand how the platform operates, enabling you to work more efficiently and confidently within the system.
`
  }

  // {
  //   id: "user-dashboard",     title: "User Dashboard For Clubs & Organisations",     category: "management",     content: "Your personal dashboard is your command center within the EAC Platform. Here you can view your registered events, participation history, profile information, and upcoming competitions. The dashboard displays a summary of your activity, including pending approvals, event schedules, and important notifications. Update your profile by clicking on 'View Profile' to edit your personal information, contact details, and preferences. Manage your event participation from the 'MY DASHBOARD' section where you can view event details, schedules, and your participation status. The dashboard also includes a notification center showing system announcements, event updates, and approval statuses.",
  //   images: ["/images/User-Dashboard .jpg", "/images/select-event.jpg"]
  // },
//   {
//     id: "organisation-registration",
//     title: "Club & Organisation Registration Process",
//     category: "account",
//     content: "Organisations such as clubs, schools, and institutions can register on the platform to manage collective participation. Navigate to 'Register Organisation' and provide your organisation's name, registration number, address, and contact information. Designate an organisation manager and coach. Submit your organisation details along with supporting documentation (such as registration certificates or proof of legitimacy). Your submission will be reviewed by staff members and approved within 3-5 business days. Once approved, organisation administrators can manage member accounts, register teams for events, and access organisational reporting features. Organisations have the ability to bulk-register participants and track their performance across multiple events.",
//     images: ["/images/User-Dashboard .jpg", "/images/organisation-form.jpg", "/images/organisation-registration.jpg", "/images/volunteers.jpg", "/images/culture-form.png"]
//   },
//   {
//     id: "teams-collaboration",
//     title: "Upload Participants Details",
//     category: "management",
//     content: "Clubs and organisation are allowed to upload participants details on the the choosen competitions form below. Create a team by specifying the team name, role designations, and adding members from your approved participants. Each team can have coaches, managers, and players with clearly defined roles and responsibilities. Team managers can oversee member participation, track attendance, and manage team registrations for events. Collaboration tools include team messaging, shared calendars, and integrated file sharing for strategy documents and schedules. Teams can participate in league formats with ongoing standings and rankings. The platform automatically tracks team statistics, win-loss records, and performance metrics across all events.",
//     images: ["/images/select-event.jpg", "/images/add-participant.jpg", "/images/basketball.jpg", "/images/chess registration form.jpg", "/images/culture-form.png"]
//   },
//   {
//     id: "staff-portal",
//     title: "Staff Portal",
//     category: "admin",
//     content: "The Staff Portal provides administrative access to manage the entire EAC Platform. Staff members can log in with elevated permissions to access the approval queue, manage user accounts, and oversee event administration. Within the portal, staff can review pending organisation registrations, player approvals, and verify participant credentials. The portal includes tools for creating system-wide announcements, managing event categories, and configuring platform settings. Staff members can generate comprehensive reports on platform usage, event participation, and approval metrics. The portal also features an audit log documenting all administrative actions for compliance and security purposes. Different staff roles (Admins, Moderators, Reviewers) have varying levels of access and permissions.",
//     images: ["/images/staff-portal.jpg", "/images/admin-overview.jpg"]
//   },
//   {
//     id: "event-management",
//     title: "Event Management",
//     category: "management",
//     content: "Event management is at the core of the EAC Platform. Authorised users can create new events by specifying event name, category, date, location, and participation requirements. During event creation, set the maximum number of participants, registration deadline, and qualification criteria. Events can be configured as individual or team-based competitions. Once created, events appear in the platform's event directory where participants can view details and register. Event managers can modify event details up until 48 hours before the event start time. Track participant registrations in real-time through the event dashboard. Manage event schedules, assign venues, and coordinate with participating teams. The system supports multiple events running simultaneously with independent participation and result tracking.",
//     images: ["/images/create-event.jpg", "/images/event-create-form.jpg", "/images/webinar-event.jpg", "/images/webinar-event-form.jpg"]
//   },
//   {
//     id: "results-scoring",
//     title: "Results & Scoring",
//     category: "admin",
//     content: "The results management system provides flexible scoring options for various competition formats. Staff can input results during or immediately after events through the results entry interface. The platform supports multiple scoring systems including points-based, match results, time-based, and custom scoring rules. Automated calculations ensure fair and accurate ranking based on defined criteria. Leaderboards are updated in real-time and visible to all participants and spectators. Historical result data is maintained for performance analysis and archival purposes. Results can be disputed within a 7-day window with staff review and resolution. The system generates performance statistics showing win-loss records, averages, rankings, and trends for individual competitors and teams.",
//     images: ["/images/basketball-pooling.jpg", "/images/results-scoring.jpg"]
//   },
//   {
//     id: "approvals",
//     title: "Approvals",
//     category: "admin",
//     content: "The approval system ensures only legitimate participants and organisations compete on the platform. All new organisation registrations require staff approval before they can register participants. Individual player accounts may require verification depending on event requirements. The approval workflow is transparent - applicants can view their submission status and receive feedback on any rejections. Staff members access the Approvals section to review pending submissions and make decisions. Approvals typically take 3-5 business days, though expedited approvals can be processed within 24 hours for urgent cases. Approved organisations and participants receive email notifications confirming their status. The system maintains approval history for auditing purposes. Appeals or resubmissions can be made after addressing feedback provided during the initial review.",
//     images: ["/images/approvals.jpg", "/images/club approval.jpg", "/images/request-info.jpg", "/images/request info form.jpg"]  // Replace with your actual image file
//   },
//   {
//     id: "reports",
//     title: "Reports",
//     category: "admin",
//     content: "Comprehensive reporting capabilities help you analyse participation, performance, and platform usage. Generate participant reports showing registration, attendance, and performance data across events. Event reports provide insights into participation numbers, demographics, and outcome statistics. Staff members can access system-wide reports including user growth, approval metrics, and platform health indicators. Reports can be filtered by date range, event type, organisation, or participant demographics. Export reports in multiple formats (PDF, CSV, Excel) for further analysis and distribution. Custom reports can be created by selecting specific metrics and data fields relevant to your needs. Scheduled reports can be generated automatically and delivered via email on a regular basis. All reports include detailed analytics and visualisations to help identify trends and patterns.",
//     images: ["/images/reports.jpg", "/images/export-reports.jpg"] // Replace with your actual image file
//   },
//   {
//     id: "notifications",
//     title: "Notifications & Communication",
//     category: "technical",
//     content: "Stay informed with the EAC Platform's comprehensive notification system. Receive real-time alerts for event updates, registration deadlines, result postings, and approval status changes. Customize your notification preferences by selecting which types of alerts you want to receive and your preferred delivery method (email, SMS, or in-app). Important announcements from event organisers and staff are broadcast platform-wide. Team-specific communications allow coaches and managers to coordinate with their members. Scheduled reminders help participants remember upcoming events and deadlines. The notification history is maintained in-app for reference and review. Urgent notifications are marked with priority indicators to ensure critical messages aren't missed.",
//     images: ["/images/getting-started.jpg", "/images/get-on.jpg"], // Replace with your actual image file
//   },
//   {
//     id: "security-privacy",
//     title: "Security & Privacy",
//     category: "technical",
//     content: "The EAC Platform prioritizes the security and privacy of all user data. All communications are encrypted using industry-standard SSL/TLS protocols. User passwords are securely hashed and never stored in plain text. Two-factor authentication (2FA) is available for enhanced account security. Personal data is protected under strict data protection regulations and compliance standards. Staff access is logged and audited for accountability. Users can control their data visibility and privacy settings through the account preferences. The platform undergoes regular security audits and penetration testing. Data backups are maintained for disaster recovery and business continuity. Sensitive information like payment data is isolated and encrypted separately.",
//     images: ["/images/security.jpg", "/images/privacy.jpg"] // Replace with your actual image file
//   },
//   {
//     id: "mobile-access",
//     title: "Mobile Access",
//     category: "technical",
//     content: "The EAC Platform is fully optimized for mobile devices including smartphones and tablets. The responsive design adapts seamlessly to any screen size while maintaining full functionality. The native mobile app (iOS and Android) offers enhanced features including offline mode for viewing cached data. Push notifications keep you updated on important events and deadlines even when away from your computer. Mobile users can register for events, view results, check standings, and communicate with their teams from anywhere. The mobile interface includes simplified navigation for easier access to frequently used features. Download the app from the App Store or Google Play Store for the best mobile experience.",
//     images: ["/images/mobile-access.jpg", "/images/mobile-app.jpg"] // Replace with your actual image file 
//   },
//   {
//     id: "troubleshooting",
//     title: "Troubleshooting & Support",
//     category: "technical",
//     content: "Encountering issues? The troubleshooting guide covers common problems and solutions. Clear your browser cache and cookies if you experience loading issues. Ensure your internet connection is stable for optimal performance. Update your browser to the latest version for better compatibility. For account access issues, use the password recovery feature or contact support. Technical issues should be reported through the support ticket system with screenshots when possible. Response times typically range from 2-24 hours depending on urgency. The support team is available Monday-Friday, 9AM-6PM in your local timezone. For urgent issues affecting events, call the emergency hotline. Review the help documentation and video tutorials before contacting support.",
//     images: ["/images/troubleshooting.jpg", "/images/support.jpg"] // Replace with your actual image file
//   },
//   {
//     id: "best-practices",
//     title: "Best Practices",
//     category: "getting-started",
//     content: "Follow these best practices to maximize your EAC Platform experience. Keep your account information current and secure with a strong password. Register early for events to secure your participation slot. Review event rules and requirements before registration to ensure eligibility. Maintain clear communication with your team or organisation managers. Submit all required documents during registration approval to avoid delays. Check notifications regularly to stay informed of important updates. Follow the platform's code of conduct and respect all community guidelines. Report inappropriate behaviour or disputes to staff promptly. Use the search functionality to find answers in documentation before asking support. Provide detailed feedback to help us improve the platform continuously.",
//     images: ["/images/best-practices.jpg", "/images/getting-started.jpg"] // Replace with your actual image file
//   },
//   {
//     id: "faqs",
//     title: "FAQs",
//     category: "getting-started",
//     content: `Q: How long does account verification take?
// A: Usually instantaneous after confirming your email.

// Q: Can I change my registered organisation?
// A: Yes, contact support to transfer your account.

// Q: What formats are allowed for document uploads?
// A: PDF, JPG, PNG (max 5MB).

// Q: How do I reset my password?
// A: Use 'Forgot Password' on the login page.

// Q: Are there any participation fees?
// A: Event fees vary; check individual event details.

// Q: Can organisations register on behalf of participants?
// A: Yes, with participant consent.

// Q: How are results recorded?
// A: Results are entered by event staff or uploaded in bulk.

// Q: Can I appeal an approval rejection?
// A: Yes, within 14 days with additional documentation.

// Q: Is my data secure?
// A: Yes, we use industry-standard encryption and comply with data protection regulations.

// Q: Where can I get technical support?
// A: Contact our support team at support@eacplatform.com or call +1-800-EAC-HELP.`,
//     image: "" // Replace with your actual image file
//   }
];

const assets = {
  account_registration,
  account_role_form,
  account_roles,
  add_participant,
  admin_overview,
  approvals_team,
  approvals,
  basketball_pooling,
  basketball,
  best_practices,
  chess_registration_form,
  club_approval,
  create_event,
  culture_form,
  event_category,
  event_create_form,
  event_management,
  export_reports,
  faqs,
  get_on,
  getting_started,
  hero,
  mobile_access,
  orgernization_form,
  orgernization_registration
}

export default { assets, categories, sections };
