# Maitreya Beach Resort Management Platform PRD

## 1. Product Summary

Maitreya Beach Resort needs a full-stack management platform that connects to the already-built public resort website and powers booking, quotes, WhatsApp communication, guest CRM, expenses, analytics, and resort operations.

The existing public marketing website is not part of this implementation. It will later route guests to platform-owned booking and quote flows or consume platform APIs.

## 2. Goals

- Give resort staff one central platform for daily operations.
- Manage booking requests, confirmed stays, check-ins, and checkouts.
- Generate itemized quotes and send them through WhatsApp.
- Track guests, repeat visits, preferences, and communication history.
- Track revenue, expenses, vendors, occupancy, and profitability.
- Provide secure booking and quote routes that can later be linked from the existing website.
- Deploy the platform on a local home server with secure remote access, backups, and monitoring.

## 3. Non-Goals

- Rebuilding or redesigning the existing public marketing website.
- Rebuilding existing landing, rooms, gallery, testimonial, amenities, SEO, or static content pages.
- Online payment gateway integration in the first release.
- OTA/channel-manager integrations such as Booking.com, Agoda, Airbnb, or MakeMyTrip.
- Full accounting software replacement.
- Native iOS or Android applications.
- Multi-property support.

## 4. Users

| User | Description | Key Needs |
| --- | --- | --- |
| Guest / Prospect | Website visitor routed to platform booking or quote flows | Request quote, submit booking request, receive WhatsApp updates |
| Resort Admin | Owner or manager | Manage all operations, users, pricing, expenses, and reports |
| Manager | Resort operations manager | Manage bookings, quotes, CRM, WhatsApp, expenses, and reports |
| Staff | Front desk or housekeeping staff | View arrivals, departures, assigned tasks, and booking notes |
| Accountant | Internal or external accountant | View and export revenue and expense reports |

## 5. Recommended Tech Stack

The requested stack is MEAN with PostgreSQL. Since MEAN traditionally uses MongoDB, this project will use:

- **Admin/platform frontend:** Angular
- **Backend:** Node.js + Express
- **Database:** PostgreSQL 17
- **ORM:** Prisma, preferred for typed database access and migrations
- **Authentication:** JWT access and refresh tokens
- **File storage:** Local server filesystem with backed-up mounted volumes
- **PDF generation:** Server-side quote and report generation
- **WhatsApp:** Meta Cloud API or approved WhatsApp Business Solution Provider
- **PWA:** Angular service worker for admin and platform-owned guest flows
- **Deployment:** Docker Compose, Nginx, and local home server
- **Remote access:** Cloudflare Tunnel preferred; dynamic DNS and port forwarding as fallback

## 6. Codex Agent Skills & UI Enhancement Workflow

These skills are implementation tools for the Codex agent. They are not product features. New skills must be installed before UI implementation and Codex must be restarted after installation.

### 6.1 Recommended Skills

| Skill | Required Use | Install Command |
| --- | --- | --- |
| `frontend-design` | Production-grade Angular layouts, typography, visual hierarchy, and component design | `npx skills add https://github.com/anthropics/skills --skill frontend-design` |
| `web-design-guidelines` | UI, UX, responsive design, and accessibility review before completing screens | `npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines` |
| `webapp-testing` | Browser testing, screenshots, responsive verification, and interaction testing | `npx skills add https://github.com/anthropics/skills --skill webapp-testing` |
| `playwright` | Terminal-driven browser automation and repeatable end-to-end checks | `npx skills add https://github.com/openai/skills --skill playwright` |
| `impeccable` | Optional final visual critique, polish, spacing cleanup, and interaction refinement | `npx skills add https://github.com/pbakaus/impeccable --skill impeccable` |

Optional specialist skills:

- `ui-doctor`: Deep UI review for accessibility, usability, cognitive load, and interaction problems.
- `frontend-accessibility`: Additional accessibility checks for forms, modals, dashboards, and keyboard workflows.

### 6.2 Mandatory Usage

Codex must apply the UI/design and enhancement workflow when building:

- Admin dashboard shell and navigation.
- Booking manager list and calendar views.
- Quote pipeline and quote editor.
- Services catalog forms.
- Guest CRM profiles.
- WhatsApp message center.
- Expense entry and P&L reports.
- Revenue analytics.
- Staff task screens.
- Platform-owned booking, quote, and package-builder routes.

Codex must not redesign the existing public website unless approved as a separate task.

### 6.3 UI Standards

- Build quiet, operational, information-dense admin screens.
- Prefer clear navigation, compact tables, predictable filters, and fast repeated actions.
- Use consistent design tokens for color, spacing, typography, shadows, and radius.
- Use icons for familiar actions and accessible labels/tooltips.
- Provide loading, empty, error, success, and permission-limited states.
- Ensure forms have labels, validation messages, keyboard support, and error recovery.
- Verify contrast, focus states, responsive layouts, overflow, and text wrapping.
- Keep cards limited to repeated items, modals, and genuinely framed tools.

### 6.4 Required UI Verification Loop

For every major UI module:

1. Implement populated, loading, empty, error, and restricted-access states.
2. Run lint, type-check, tests, and production build.
3. Open the local app using Browser or Playwright.
4. Capture and inspect desktop and mobile screenshots.
5. Test primary interactions, forms, keyboard navigation, and validation.
6. Fix visible layout, overflow, accessibility, and console issues.
7. Run a final `web-design-guidelines` or equivalent UI review before completion.

## 7. Product Scope

### 7.1 Existing Website Integration

The existing website remains independently deployable. The platform will expose:

- Booking request route, such as `/book`.
- Quote request route, such as `/quote`.
- Optional package-builder route, such as `/packages`.
- Public APIs for room types, packages, services, availability, pricing, reviews, and gallery metadata.
- Integration documentation for routing existing website CTAs to the platform.

Acceptance criteria:

- Existing website can route guests to booking and quote flows without being migrated.
- Public integration APIs are documented and protected with validation and rate limiting.

### 7.2 Booking Management

Requirements:

- Booking request creation.
- Guest details, dates, rooms, services, packages, pricing, and notes.
- Booking reference number.
- List and calendar views.
- Statuses: `new`, `quote_sent`, `confirmed`, `checked_in`, `checked_out`, and `cancelled`.
- Booking edits, cancellation reason, internal notes, and special requests.
- Audit history for important changes.

Acceptance criteria:

- Admin can create, edit, confirm, cancel, check in, and check out a booking.
- Calendar prevents accidental room overbooking.
- Status changes can trigger configured WhatsApp messages and staff tasks.

### 7.3 Quote Management

Requirements:

- Itemized pricing for rooms, add-ons, packages, discounts, taxes, and fees.
- Quote statuses: `draft`, `sent`, `accepted`, `expired`, and `rejected`.
- Quote expiry and follow-up reminders.
- PDF generation.
- WhatsApp delivery.
- Convert accepted quote into booking.

Acceptance criteria:

- Pricing uses the central services catalog and seasonal pricing rules.
- Generated PDF contains guest details, line items, validity, total, and resort details.
- Accepted quote can be converted to a booking without re-entering data.

### 7.4 Services Catalog

Requirements:

- Physical rooms and room types.
- Capacity, amenities, pricing, and availability.
- Packages and add-on services.
- Seasonal pricing rules.
- Enable/disable controls.

Acceptance criteria:

- Booking and quote flows use admin-configured availability and pricing.
- Admin can update catalog data without code changes.

### 7.5 Guest CRM

Requirements:

- Guest identity and contact information.
- Stay and quote history.
- Preferences, tags, and internal notes.
- WhatsApp consent state.
- Repeat-guest and loyalty indicators.

Acceptance criteria:

- Returning guests are identified using phone number or email.
- Admin can review guest history before confirming a booking.

### 7.6 WhatsApp Communication

Requirements:

- Booking received acknowledgement.
- Booking confirmation.
- Quote PDF delivery.
- T-1 day pre-arrival reminder.
- Post-checkout feedback request.
- Promotional broadcasts to opted-in guests.
- Template manager, message logs, delivery status, and manual retry.

Acceptance criteria:

- Every automated and manual message is logged.
- Failed messages are visible and retryable.
- Promotional messages are sent only to opted-in guests.

### 7.7 Dashboard & Analytics

Requirements:

- Occupancy percentage.
- Revenue month-to-date.
- Today’s arrivals and departures.
- Pending quotes and booking requests.
- Revenue trends, peak periods, and top-performing rooms/packages.
- Date-range filters.

Acceptance criteria:

- Metrics use the correct booking statuses and selected date range.
- Dashboard loads core metrics within three seconds on the local network.

### 7.8 Expense Management

Requirements:

- Expense entry with category, vendor, amount, date, notes, and receipt.
- Vendor directory.
- Revenue vs expense P&L snapshot.
- Category and vendor breakdowns.
- CSV and PDF exports.

Acceptance criteria:

- Expenses can be filtered by date range, category, and vendor.
- Receipt uploads remain linked to expense records.
- Accountant-friendly exports are available.

### 7.9 Loyalty, Reviews, Media & Staff Tasks

Requirements:

- Repeat-visit count and optional return-guest discount rules.
- Review submission route and admin moderation.
- Public approved-review API for future website use.
- Gallery/media metadata manager and public API.
- Automatic and manual housekeeping/front-desk tasks.

Acceptance criteria:

- Admin can manage these modules without changes to the existing website.
- Booking lifecycle events can create configured staff tasks.

## 8. Core Data Model

Core PostgreSQL tables:

- `users`, `roles`, `refresh_tokens`
- `guests`, `guest_tags`, `guest_notes`
- `rooms`, `room_types`, `room_media`
- `services`, `packages`, `package_items`, `seasonal_pricing_rules`
- `bookings`, `booking_rooms`, `booking_services`, `booking_notes`
- `quotes`, `quote_items`
- `reviews`
- `whatsapp_templates`, `whatsapp_messages`
- `expenses`, `expense_categories`, `vendors`
- `staff_tasks`
- `files`
- `audit_logs`

## 9. API Modules

- `/api/auth`: Login, refresh, logout, password reset.
- `/api/public`: Availability, catalog, price preview, approved reviews, gallery metadata.
- `/api/bookings`: Create, list, edit, status transitions, calendar.
- `/api/quotes`: Create, send, expire, accept, convert, PDF.
- `/api/catalog`: Rooms, room types, services, packages, pricing rules.
- `/api/guests`: Profiles, history, notes, tags, consent.
- `/api/whatsapp`: Templates, send, webhook, logs, retries.
- `/api/expenses`: Expenses, categories, vendors, exports.
- `/api/analytics`: Dashboard, revenue, occupancy, P&L.
- `/api/tasks`: Staff tasks, assignment, status.
- `/api/files`: Upload, download, delete, metadata.
- `/api/health`: Service and database health.

## 10. Security & Permissions

Roles:

- **Admin:** Full access.
- **Manager:** Bookings, quotes, CRM, expenses, reports, and WhatsApp.
- **Staff:** Assigned tasks, arrivals/departures, and limited booking notes.
- **Accountant:** Read-only revenue/expense reporting and exports.

Requirements:

- JWT access and refresh token flow.
- Argon2 or bcrypt password hashing.
- Role-based authorization on every protected API.
- Public endpoint rate limiting.
- Input validation.
- File type and size validation.
- Audit logs for critical changes.
- Environment-based secrets.
- HTTPS for remote access.

## 11. Local Home Server Deployment

Recommended setup:

- Docker Compose for API, PostgreSQL, Nginx, and backup jobs.
- Angular production build served by Nginx.
- Express API behind Nginx.
- Uploaded files stored in mounted host volumes.
- Cloudflare Tunnel for public HTTPS access without exposing raw home-network ports.
- Tailscale/VPN option for restricted admin access.

Backup requirements:

- Daily PostgreSQL dump retained for 14 days.
- Weekly backup retained for eight weeks.
- Back up uploads, receipts, quote PDFs, and configuration.
- Test database and file restore before go-live.

Monitoring:

- Health endpoint checks.
- Container restart policies.
- Nginx and API logs.
- Disk usage monitoring.
- Backup success/failure logging.

## 12. Implementation Plan

### Phase 0: Project Setup

Duration: 1 day

- Create Angular admin/platform workspace.
- Create Express API workspace.
- Configure TypeScript, linting, formatting, and testing.
- Configure PostgreSQL and Prisma.
- Create Docker Compose development environment.
- Install and verify required Codex UI/testing skills.

Milestone: Admin frontend, API, and database run locally.

### Phase 1: Foundation

Duration: Days 1-3

- Database schema and migrations.
- Authentication and role-based access.
- Admin layout and navigation.
- Services catalog skeleton.
- Dashboard skeleton.
- File upload and audit-log foundations.

Milestone: Admin can log in and access the protected platform.

### Phase 2: Booking & Quote Core

Duration: Days 4-7

- Platform-owned booking and quote routes.
- Public availability and pricing APIs.
- Booking manager and calendar.
- Quote pipeline and PDF generation.
- Quote-to-booking conversion.

Milestone: Guest requests can be routed from the existing website and managed by admin.

### Phase 3: WhatsApp & CRM

Duration: Days 8-10

- Guest CRM.
- WhatsApp template manager.
- Booking acknowledgement and confirmation.
- Quote PDF delivery.
- Message logs, retries, and feedback request.

Milestone: WhatsApp lifecycle messages are tested end to end.

### Phase 4: Operations & Analytics

Duration: Days 11-13

- Expenses, vendors, P&L, and exports.
- Revenue and occupancy analytics.
- Loyalty rules.
- Staff tasks.
- Reviews and media metadata APIs.
- Final responsive, accessibility, and visual-polish passes.

Milestone: All operational modules are integrated and reviewed using required UI skills.

### Phase 5: Deployment & Handover

Duration: Day 14

- Production build.
- Home-server deployment.
- Nginx and secure remote access.
- Backup and monitoring jobs.
- PWA setup.
- UAT fixes and restore test.
- Admin handover notes.

Milestone: Platform is live and accessible through the configured secure endpoint.

## 13. Testing Plan

Unit tests:

- Pricing calculations.
- Quote expiry.
- Booking status transitions.
- Discount rules.
- Role permissions.

Integration tests:

- Booking request to admin workflow.
- Quote generation, PDF, and conversion.
- Expense entry to P&L.
- WhatsApp message logging.
- Staff task creation from booking events.

End-to-end tests:

- Guest submits a quote request.
- Guest submits a booking request.
- Admin confirms and updates a booking.
- Admin sends a quote through WhatsApp.
- Admin exports an expense report.

Manual UI verification:

- Desktop, tablet, and mobile platform views.
- Keyboard navigation and form validation.
- Loading, empty, error, and permission states.
- Screenshot inspection for layout and overflow.
- Browser console and network error checks.
- Remote access and backup restore.

## 14. Client Inputs Required

- Room types, room count, capacity, and pricing.
- Seasonal pricing rules.
- Add-on services and package definitions.
- Resort contact and tax details.
- WhatsApp Business number and BSP/Meta access.
- Domain or preferred remote-access method.
- Home server specifications and operating system.
- Admin/staff user list and roles.
- Existing website routing access when integration begins.

## 15. Risks & Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| WhatsApp onboarding delay | Automation cannot go live on schedule | Build logs/templates first and use sandbox/test number |
| Home internet downtime | Platform and routed guest flows become unavailable | Use UPS, stable ISP, Cloudflare Tunnel, and tested backups |
| Dynamic IP changes | Domain access fails | Use Cloudflare Tunnel or dynamic DNS |
| Local server disk failure | Data loss | Daily database and weekly external backups |
| Pricing complexity | Quote errors | Central pricing service with unit tests |
| Existing website integration delay | Guest routes are not linked at launch | Platform routes remain directly accessible and documented |

## 16. Launch Checklist

- Production environment variables configured.
- Database migrations applied.
- Admin users created.
- Catalog and pricing entered.
- WhatsApp templates approved and tested.
- Secure remote access configured.
- HTTPS verified.
- Backup and restore verified.
- Booking and quote flows tested end to end.
- UI review and responsive screenshots completed.
- Accessibility and keyboard checks completed.
- Expense exports tested.
- Client UAT sign-off received.

## 17. Success Metrics

- Admin can confirm or reject a booking in under two minutes.
- Quote PDF can be generated and sent through WhatsApp in under 30 seconds.
- Dashboard loads core metrics in under three seconds on the local network.
- Platform has no critical accessibility or responsive-layout issues at launch.
- Daily backups complete successfully.
- No critical bugs during the first 30 days after go-live.
