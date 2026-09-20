# 🎬 Film Rank — Backend API & Database Architecture

A production-ready, modular REST API and relational data architecture built for **Film Rank** — a modern movie discovery, community review, ranking, and streaming monetization platform.

Built with **Node.js**, **TypeScript**, **Express 5**, and **Prisma ORM**, backed by a scalable **PostgreSQL** database.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express 5](https://img.shields.io/badge/Express-5.x-black?style=flat&logo=express)](https://expressjs.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-7.x-2D3748?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white)](https://stripe.com/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white)](https://cloudinary.com/)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Database Architecture & ER Diagram](#-database-architecture--er-diagram)
  - [Entity Relationship Diagram (Mermaid)](#entity-relationship-diagram)
  - [Step-by-Step Architecture & Logic Breakdown](#step-by-step-architecture--logic-breakdown)
  - [Domain Groupings](#domain-groupings)
  - [Database Constraints & Integrity Rules](#database-constraints--integrity-rules)
  - [Schema Enums Reference](#schema-enums-reference)
- [Backend Features: What Can We Do?](#-backend-features-what-can-we-do)
  - [1. Authentication & Session Management](#1-authentication--session-management)
  - [2. Role-Based Access Control (RBAC)](#2-role-based-access-control-rbac)
  - [3. Media & Film Catalog Management](#3-media--film-catalog-management)
  - [4. Social Reviews & Ratings System](#4-social-reviews--ratings-system)
  - [5. Threaded Comments & Discussion Chains](#5-threaded-comments--discussion-chains)
  - [6. Like & Tagging Interaction](#6-like--tagging-interaction)
  - [7. Watchlist / Bookmark Engine](#7-watchlist--bookmark-engine)
  - [8. Monetization, Subscriptions & Stripe Payments](#8-monetization-subscriptions--stripe-payments)
  - [9. Analytics, Metrics & Reporting Engine](#9-analytics-metrics--reporting-engine)
  - [10. Media Uploads & Email Automation](#10-media-uploads--email-automation)
- [How to Set Up Anyone with this Repository](#-how-to-set-up-anyone-with-this-repository)
  - [Prerequisites](#prerequisites)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
  - [Step 4: Database Setup & Prisma Migrations](#step-4-database-setup--prisma-migrations)
  - [Step 5: Run the Server](#step-5-run-the-server)
  - [Step 6: Verify Automatic SuperAdmin Provisioning](#step-6-verify-automatic-superadmin-provisioning)
  - [Step 7: Testing Stripe Webhooks Locally](#step-7-testing-stripe-webhooks-locally)
- [API Route Directory](#-api-route-directory)
- [Available Scripts](#-available-scripts)
- [Project Directory Structure](#-project-directory-structure)
- [License & Author](#-license--author)

---

## 🌟 Overview

**Film Rank** is designed to power an end-to-end film discovery, rating, and community portal. The backend handles:
- Hybrid authentication (`better-auth`, JWT tokens, session persistence, and Google OAuth).
- Multi-tier role permissions (`USER`, `ADMIN`, `SUPER_ADMIN`).
- Rich film cataloging with multi-genre and multi-platform streaming metadata.
- Spoiler-protected user reviews with real-time average rating calculation.
- Tree-structured nested comments (infinite reply threads).
- Watchlist management and one-click review liking.
- Stripe payment checkouts for premium films with webhook verification and duplicate purchase prevention.
- Comprehensive analytics dashboards for platform admins and individual users.

---

## 🏛 Database Architecture & ER Diagram

The database is designed around 4 distinct business domains:
1. **Identity & Access** (`User`, `Admin`, `SuperAdmin`, `Session`, `Account`, `Verification`)
2. **Catalog & Classification** (`Media`, `Genre`, `Platform`, `MediaGenre`, `MediaPlatform`)
3. **Community & Engagement** (`Review`, `Comment`, `Like`, `Tag`, `ReviewTag`)
4. **Commerce & Personalization** (`Watchlist`, `Subscription`, `Payment`)

### Entity Relationship Diagram

```mermaid
erDiagram
    %% ================= DOMAIN: IDENTITY & ACCESS =================
    USER ||--o| ADMIN : "has profile extension (1:0..1)"
    USER ||--o| SUPER_ADMIN : "has profile extension (1:0..1)"
    USER ||--o{ SESSION : "owns (1:N)"
    USER ||--o{ ACCOUNT : "links OAuth/credentials (1:N)"
    
    %% ================= DOMAIN: ENGAGEMENT =================
    USER ||--o{ REVIEW : "writes (1:N)"
    USER ||--o{ COMMENT : "posts (1:N)"
    USER ||--o{ LIKE : "gives (1:N)"
    
    %% ================= DOMAIN: COMMERCE =================
    USER ||--o{ WATCHLIST : "saves to (1:N)"
    USER ||--o{ SUBSCRIPTION : "subscribes (1:N)"
    USER ||--o{ PAYMENT : "makes purchase (1:N)"

    %% ================= DOMAIN: CATALOG =================
    MEDIA ||--o{ REVIEW : "reviewed in (1:N)"
    MEDIA ||--o{ WATCHLIST : "saved in (1:N)"
    MEDIA ||--o{ PAYMENT : "purchased item (1:N)"
    
    %% Media Many-to-Many Join Tables
    MEDIA ||--o{ MEDIA_GENRE : "classified under (1:N)"
    GENRE ||--o{ MEDIA_GENRE : "applies to (1:N)"
    
    MEDIA ||--o{ MEDIA_PLATFORM : "streamed on (1:N)"
    PLATFORM ||--o{ MEDIA_PLATFORM : "hosts (1:N)"

    %% Engagement Sub-relations
    REVIEW ||--o{ COMMENT : "has discussion (1:N)"
    REVIEW ||--o{ LIKE : "liked by (1:N)"
    REVIEW ||--o{ REVIEW_TAG : "categorized by (1:N)"
    TAG ||--o{ REVIEW_TAG : "attached to (1:N)"

    %% Threaded Comments (Self-Relation)
    COMMENT ||--o{ COMMENT : "replies to parentId (1:N)"

    %% ================= ENTITY DEFINITIONS =================
    USER {
        String id PK "UUID"
        String name
        String email UK "Unique email address"
        Role role "USER | ADMIN | SUPER_ADMIN"
        Boolean emailVerified "Default: false"
        String image "Nullable avatar URL"
        UserStatus status "ACTIVE | BLOCKED | DELETED"
        Boolean needPasswordChange "Default: false"
        Boolean isDeleted "Soft-delete flag"
        DateTime deletedAt "Nullable deletion timestamp"
        DateTime createdAt
        DateTime updatedAt
    }

    ADMIN {
        String id PK "UUID"
        String userId FK,UK "1:1 link to User"
        String name
        String email UK
        String contactNumber "Nullable"
        Boolean isDeleted "Soft-delete flag"
        DateTime deletedAt
    }

    SUPER_ADMIN {
        String id PK "UUID"
        String userId FK,UK "1:1 link to User"
        String name
        String email UK
        String contactNumber "Nullable"
        Boolean isDeleted "Soft-delete flag"
        DateTime deletedAt
    }

    SESSION {
        String id PK
        String token UK "Unique session token"
        DateTime expiresAt
        String ipAddress "Nullable"
        String userAgent "Nullable"
        String userId FK
    }

    ACCOUNT {
        String id PK
        String accountId
        String providerId "google, credentials, etc."
        String userId FK
        String password "Nullable hashed password"
    }

    VERIFICATION {
        String id PK
        String identifier "Email or phone"
        String value "Token or OTP code"
        DateTime expiresAt
    }

    MEDIA {
        String id PK "UUID"
        String title "Indexed"
        String synopsis
        Int releaseYear "Indexed (release_year)"
        String director "Indexed"
        String_Array cast "String array of actors"
        Int duration "Duration in minutes"
        Float averageRating "Denormalized (0-5)"
        Int reviewCount "Denormalized count"
        String posterUrl "Cloudinary image URL"
        String language
        String country
        MediaStatus status "UPCOMING | RELEASED | ARCHIVED"
        PricingType pricing "FREE | PREMIUM"
        String youtubeLink "Trailer URL"
    }

    GENRE {
        String id PK "UUID"
        String name UK "Unique (e.g. Action, Drama)"
    }

    PLATFORM {
        String id PK "UUID"
        String name UK "Unique (e.g. Netflix, Prime)"
    }

    MEDIA_GENRE {
        String mediaId PK,FK
        String genreId PK,FK
    }

    MEDIA_PLATFORM {
        String mediaId PK,FK
        String platformId PK,FK
    }

    REVIEW {
        String id PK "UUID"
        String userId FK "Author"
        String mediaId FK "Film reviewed"
        Int rating "Rating (1 to 5)"
        String content "Written review"
        Boolean spoiler "Spoiler tag flag"
        ReviewStatus status "PENDING | APPROVED | REJECTED"
        DateTime createdAt
        DateTime updatedAt
    }

    COMMENT {
        String id PK "UUID"
        String content "Comment body"
        String userId FK "Commenter"
        String reviewId FK "Target review"
        String parentId FK "Nullable self-link for nested replies"
        DateTime createdAt
    }

    LIKE {
        String id PK "UUID"
        String userId FK "User who liked"
        String reviewId FK "Liked review"
    }

    TAG {
        String id PK "UUID"
        String name UK "Unique tag (e.g. plot-twist)"
    }

    REVIEW_TAG {
        String reviewId PK,FK
        String tagId PK,FK
    }

    WATCHLIST {
        String id PK "UUID"
        String userId FK "User owner"
        String mediaId FK "Saved film"
    }

    SUBSCRIPTION {
        String id PK "UUID"
        String userId FK "Subscriber"
        SubscriptionStatus status "ACTIVE | CANCELLED | EXPIRED"
        DateTime startDate
        DateTime endDate
        DateTime createdAt
    }

    PAYMENT {
        String id PK "UUID"
        String userId FK "Payer"
        String mediaId FK "Purchased media (movie_id)"
        Float amount "Purchase price"
        String currency "e.g. USD"
        PaymentProvider provider "STRIPE | PAYPAL | RAZORPAY"
        PaymentStatus status "PAID | UNPAID"
        String transactionId "Nullable gateway ref"
        DateTime createdAt
    }
```

---

### 🔍 Step-by-Step Architecture & Logic Breakdown

#### 1. Identity & Access Management Logic
- **Single Source of Truth (`User`)**: Every user account, regardless of their role, is stored in the core `User` table. Role checks across authentication and authorization middlewares evaluate `User.role` (`USER`, `ADMIN`, `SUPER_ADMIN`).
- **Profile Extension Pattern (`1:0..1`)**: Rather than partitioning users into separate auth tables, `Admin` and `SuperAdmin` are modeled as **optional one-to-one profile extensions** linked via a unique foreign key `userId`.
  - Enables unified login credentials, session management, and OAuth linking.
  - Allows administrative profiles to maintain specialized administrative attributes (such as `contactNumber`, dedicated soft-delete auditing, and management timestamps) without polluting standard user records.
- **Session & OAuth Bookkeeping**:
  - `Session`: Tracks active login sessions, expiration timestamps, IP addresses, and user agents for session invalidation and multi-device management.
  - `Account`: Stores OAuth provider details (e.g., Google OAuth `providerId`, OAuth access/refresh tokens) alongside standard credential passwords.
  - `Verification`: Manages transient tokens or OTPs for email confirmation and password reset workflows.

#### 2. Media Catalog & Classification Logic
- **Core Media Entity**: Represents films, documentaries, or television shows. Holds comprehensive metadata: title, synopsis, release year, director, array of cast members, duration (in minutes), language, country, trailer link, status (`UPCOMING`, `RELEASED`, `ARCHIVED`), and pricing tier (`FREE`, `PREMIUM`).
- **Denormalized Ratings for High Performance**:
  - `Media.averageRating` (Float) and `Media.reviewCount` (Int) are maintained directly on the `Media` record.
  - When users submit, update, or remove approved reviews, the backend recalculates and caches these metrics. This prevents heavy aggregation queries (`AVG()` and `COUNT()`) whenever the film catalog or ranking leaderboards are rendered.
- **Pure Many-to-Many Relationships**:
  - **Media & Genres**: A film can belong to multiple genres (e.g., *Sci-Fi*, *Thriller*), and a genre covers multiple films. This is resolved via `MediaGenre` with a composite primary key `@@id([mediaId, genreId])`.
  - **Media & Platforms**: A film can be available on multiple streaming providers (e.g., *Netflix*, *Prime Video*, *In-House*), resolved via `MediaPlatform` with composite primary key `@@id([mediaId, platformId])`.

#### 3. Community Engagement & Social Review Logic
- **The Core Review Node**: The `Review` model connects `User` and `Media`. It records a 1–5 numerical rating, written analysis, a boolean `spoiler` warning flag, and an administrative moderation status (`PENDING`, `APPROVED`, `REJECTED`).
- **Tree-Structured Threaded Comments**:
  - Discussion takes place directly on reviews via the `Comment` model.
  - To support Reddit-style or YouTube-style multi-level nested discussions, `Comment` uses a **self-referential relationship**:
    - `parentId`: Nullable foreign key pointing to another `Comment.id`.
    - Top-level comments have `parentId = null`.
    - Replies have `parentId = <parent_comment_id>`.
- **Enforced Single Like**:
  - Users can like reviews through the `Like` table.
  - A composite unique constraint `@@unique([userId, reviewId])` strictly guarantees that a user can only like a given review once. Liking again toggles the record off.
- **Review Categorization Tags**:
  - Free-form tags (e.g., `#mind-bending`, `#cinematography`, `#plot-twist`) are cataloged in `Tag` and linked to reviews via `ReviewTag` with composite primary key `@@id([reviewId, tagId])`.

#### 4. Commerce, Personalization & Monetization Logic
- **Personal Watchlist**:
  - Allows users to save films to watch later.
  - Enforces `@@unique([userId, mediaId])`, ensuring a film cannot be added more than once per user.
- **Subscription Engine**:
  - `Subscription` tracks active premium passes (`status: ACTIVE, CANCELLED, EXPIRED`) with explicit `startDate` and `endDate` intervals.
- **Pay-Per-View Purchases (`Payment`)**:
  - Facilitates direct pay-per-view access for single `PREMIUM` movies.
  - Enforces `@@unique([userId, mediaId])` to **prevent duplicate purchases** of the same film by the same customer.
  - Logs the financial transaction amount, currency, provider (`STRIPE`, `PAYPAL`, `RAZORPAY`), payment status (`PAID`, `UNPAID`), and Stripe `transactionId`.

---

### 🛡 Database Constraints & Integrity Rules

| Rule Type | Table | Constraint / Logic | Purpose |
|---|---|---|---|
| **Composite Primary Key** | `MediaGenre` | `@@id([mediaId, genreId])` | Enforces unique genre association per media item without duplicate rows. |
| **Composite Primary Key** | `MediaPlatform` | `@@id([mediaId, platformId])` | Prevents linking a movie to the same streaming platform multiple times. |
| **Composite Primary Key** | `ReviewTag` | `@@id([reviewId, tagId])` | Ensures a tag is attached at most once per review. |
| **Unique Constraint** | `Like` | `@@unique([userId, reviewId])` | Guarantees that a user can only like a review once. |
| **Unique Constraint** | `Watchlist` | `@@unique([userId, mediaId])` | Prevents duplicate watchlist entries for the same media item. |
| **Unique Constraint** | `Payment` | `@@unique([userId, mediaId])` | **Crucial commerce rule**: Prevents duplicate charges for the same user and film. |
| **Unique 1:1 Foreign Key** | `Admin`, `SuperAdmin` | `userId String @unique` | Enforces that each user account can only have at most one extension profile. |
| **Foreign Key OnDelete: Cascade** | `Session`, `Account`, `Review`, `Comment`, `Like`, `Watchlist` | `onDelete: Cascade` | Removing a user cleanly cleans up personal auth sessions, comments, reviews, and likes. |
| **Foreign Key OnDelete: Restrict** | `Payment`, `Subscription` | `onDelete: Restrict` | **Financial integrity**: Prevents deletion of user records if financial ledger records or subscriptions exist. |
| **Soft Delete Pattern** | `User`, `Admin`, `SuperAdmin` | `isDeleted: Boolean`, `deletedAt: DateTime?` | Allows logical deactivation and compliance audits without breaking relational data. |

---

### 🏷 Schema Enums Reference

```prisma
enum Role {
  USER
  ADMIN
  SUPER_ADMIN
}

enum UserStatus {
  ACTIVE
  BLOCKED
  DELETED
}

enum PricingType {
  FREE
  PREMIUM
}

enum ReviewStatus {
  PENDING
  APPROVED
  REJECTED
}

enum SubscriptionStatus {
  ACTIVE
  CANCELLED
  EXPIRED
}

enum PaymentProvider {
  STRIPE
  PAYPAL
  RAZORPAY
}

enum MediaStatus {
  UPCOMING
  RELEASED
  ARCHIVED
}

enum PaymentStatus {
  PAID
  UNPAID
}
```

---

## 🚀 Backend Features: What Can We Do?

With this backend REST API, you have a complete foundation for building a modern, commercial film-ranking platform:

### 1. Authentication & Session Management
- **Local Credential Auth**: Secure registration and login with bcrypt-hashed passwords.
- **Google OAuth 2.0 Integration**: Direct Google social sign-in (`/api/v1/auth/login/google`) with automatic user/account provisioning.
- **JWT & Token Rotation**: Issues short-lived access tokens alongside persistent refresh tokens for secure session continuity.
- **Cookie Sessions**: Integrated with `cookie-parser` for seamless web client auth.
- **Email Verification & Password Recovery**: Automated transactional emails using Nodemailer with styled EJS email templates for email confirmation, OTP codes, and password reset links.

### 2. Role-Based Access Control (RBAC)
- **Three Tier Hierarchy**:
  - `SUPER_ADMIN`: Manage administrators, promote/demote user roles, modify system credentials, and view system-wide financial analytics.
  - `ADMIN`: Add/edit films, moderate reviews, tag films, view user lists, and toggle user account statuses (`ACTIVE` / `BLOCKED`).
  - `USER`: Browse catalog, submit ratings, write reviews, post threaded comments, like reviews, save watchlists, and purchase premium content.
- **Automatic SuperAdmin Bootstrapping**: Automatically inspects the database on server boot. If no administrative account exists, it seeds a SuperAdmin based on credentials in `.env`.

### 3. Media & Film Catalog Management
- **Complete Film CRUD**: Create, read, update, and delete media items with rich metadata (synopsis, director, cast array, release year, duration, language, country, YouTube trailer links).
- **Multi-Genre & Multi-Platform Tagging**: Associate any movie with multiple genres (Action, Sci-Fi, Thriller) and streaming platforms (Netflix, HBO Max, Prime Video).
- **Poster Image Uploads**: Direct multipart file upload via Multer streamed to Cloudinary CDN storage.
- **Catalog Status & Pricing**: Mark films as `UPCOMING`, `RELEASED`, or `ARCHIVED`, and gate them as `FREE` or `PREMIUM`.

### 4. Social Reviews & Ratings System
- **Community Ratings (1–5 Stars)**: Users can rate films and submit comprehensive reviews with spoiler warnings (`spoiler: true/false`).
- **Auto-Calculated Denormalized Aggregates**: Automatically recalculates `averageRating` and `reviewCount` on the film whenever a review is posted or modified.
- **Moderation Workflow**: Review status transitions (`PENDING` -> `APPROVED` / `REJECTED`) to protect the platform from spam and offensive content.

### 5. Threaded Comments & Discussion Chains
- **Nested Discussions**: Comment on any review to spark discussions.
- **Multi-Level Reply Chains**: Uses a self-referential tree structure (`parentId`) enabling nested comment hierarchies.
- **User Ownership**: Users can edit or delete their own comments, while admins retain moderation power.

### 6. Like & Tagging Interaction
- **Instant Like Toggling**: Single-endpoint toggle (`POST /api/v1/like/like/:reviewId`) that likes or unlikes a review cleanly.
- **Live Like Counters**: Quick aggregation endpoint to fetch total likes on any review.
- **Review Tags**: Categorize reviews by custom tags (`#must-watch`, `#visual-masterpiece`).

### 7. Watchlist / Bookmark Engine
- **One-Click Toggle**: Users can add or remove any film to their personal saved list via `/api/v1/watchlist/toggle`.
- **Personal Library**: Retrieve all saved films with full movie details, genres, and streaming links.

### 8. Monetization, Subscriptions & Stripe Payments
- **Stripe Checkout Integration**: Seamlessly creates Stripe Checkout sessions for premium films.
- **Webhook Reconciliation**: Secure webhook listener at `/webhook` with raw request body verification to mark payments as `PAID` upon completed checkout.
- **Duplicate Purchase Prevention**: Database-level unique constraint prevents a user from buying the same film twice.
- **Subscription Tracking**: Monitor subscription states (`ACTIVE`, `CANCELLED`, `EXPIRED`) with validity timeframes.

### 9. Analytics, Metrics & Reporting Engine
- **Admin Dashboard (`/api/v1/stats`)**:
  - Summary metrics: total users, total films, total genres, total platforms, total wishlists, total reviews, and total revenue.
  - **Rating Distribution Chart**: Breakdown of 1-star through 5-star ratings across the entire platform.
  - **Monthly Review Growth Chart**: Aggregation of reviews submitted month-by-month.
  - **Top 10 Most Reviewed Films**: Leaderboard of popular films with posters, ratings, and review counts.
  - **Live Feeds**: Recent signups, recent reviews, and recent payment transactions.
- **User Dashboard (`/api/v1/stats`)**:
  - Personal engagement metrics: total reviews written, total comments posted, total items in watchlist, and recent activity logs.

### 10. Media Uploads & Email Automation
- **Cloudinary Storage**: High-performance image storage for movie posters and user profile avatars.
- **EJS Email Templates**: Beautifully formatted HTML emails sent via SMTP for verification codes and password recovery.

---

## 🛠 How to Set Up Anyone with this Repository

Follow these step-by-step instructions to get the Film Rank backend running locally from scratch.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.18.0 or v20+ ([Download Node.js](https://nodejs.org/))
- **Package Manager**: [pnpm](https://pnpm.io/) (preferred) or npm
  ```bash
  npm install -g pnpm
  ```
- **PostgreSQL Database**: A running local PostgreSQL instance or a managed cloud database (such as [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or [Prisma Postgres](https://www.prisma.io/postgres)).
- **Cloudinary Account**: Free account for poster/avatar image uploads ([Cloudinary](https://cloudinary.com/)).
- **Stripe Account**: Free developer test account for payment checkouts ([Stripe](https://stripe.com/)).
- **SMTP Email Service**: Gmail App Password or SMTP provider (e.g. Mailgun, SendGrid, Brevo) for sending emails.
- **Google Cloud Console** *(Optional for Google OAuth)*: OAuth 2.0 Client ID and Secret.

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/shimul950/backend-model-filmranking.git
cd backend-model-filmranking
```

---

### Step 2: Install Dependencies

```bash
pnpm install
# or
npm install
```

---

### Step 3: Configure Environment Variables

1. Copy the sample environment file to create your local `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` in your editor and configure each variable:

```env
# ==============================================
# ENVIRONMENT CONFIGURATION FOR FILM RANK BACKEND
# ==============================================

# Server & Runtime Environment
NODE_ENV=development
PORT=5000

# PostgreSQL Database Connection String
# Replace with your local or cloud Postgres connection string
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/filmrank?schema=public"

# Better Auth Configuration
# Secret should be a random string of at least 32 characters
BETTER_AUTH_SECRET="your-better-auth-secret-min-32-chars-long"
BETTER_AUTH_URL="http://localhost:5000"

# JWT Authentication
ACCESS_TOKEN_SECRET="your-super-secret-access-token-key"
REFRESH_TOKEN_SECRET="your-super-secret-refresh-token-key"
ACCESS_TOKEN_EXPIRES_IN="1d"
REFRESH_TOKEN_EXPIRES_IN="7d"
BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN="1d"
BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE="1d"

# Email Configuration (Nodemailer / SMTP)
EMAIL_SENDER_SMTP_USER="your-email@gmail.com"
EMAIL_SENDER_SMTP_PASS="your-16-character-app-password"
EMAIL_SENDER_SMTP_HOST="smtp.gmail.com"
EMAIL_SENDER_SMTP_PORT="465"
EMAIL_SENDER_SMTP_FROM="your-email@gmail.com"

# Client Webhook & Redirects
FRONTEND_URL="http://localhost:3000"

# Google OAuth 2.0 Credentials (From Google Cloud Console)
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"
GOOGLE_CALLBACK_URL="http://localhost:5000/api/auth/callback/google"

# Stripe Payment Gateway
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"

# Cloudinary Storage Configuration
CLOUDINARY_CLOUDE_NAME="your-cloudinary-cloud-name"
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

# Default SuperAdmin Seeding (Automatically seeded on first startup)
SEED_ADMIN_EMAIL="admin@filmrank.com"
SEED_ADMIN_PASSWORD="YourSecurePassword123!"
```

> [!IMPORTANT]
> All the above environment variables are strictly verified at startup by `src/config/env.ts`. Make sure none of the keys are left empty.

---

### Step 4: Database Setup & Prisma Migrations

Generate the custom Prisma Client and apply database schema migrations:

1. **Generate Prisma Client**:
   ```bash
   pnpm generate
   ```
   *(This outputs the generated client to `src/generated/prisma`)*.

2. **Run Migrations**:
   ```bash
   pnpm migrate
   ```
   *(Or alternatively, push schema changes directly to your database with `pnpm push`)*.

3. **(Optional) Open Prisma Studio**:
   To view and edit database rows visually in your browser:
   ```bash
   pnpm studio
   ```
   *Opens by default at `http://localhost:5555`.*

---

### Step 5: Run the Server

#### Development Mode (with hot reloading):
```bash
pnpm dev
```
You should see in the console:
```text
Admin already exists. Skipping seeding. (or: Seeded admin created ...)
server is running on http://localhost:5000
```

#### Production Build & Run:
```bash
pnpm build
pnpm start
```

---

### Step 6: Verify Automatic SuperAdmin Provisioning

When the application boots for the first time, `seedAdmin()` in `src/utils/seed.ts` automatically provisions a `SUPER_ADMIN` account using the credentials specified in your `.env`:
- **Email**: Value of `SEED_ADMIN_EMAIL` (e.g. `admin@filmrank.com`)
- **Password**: Value of `SEED_ADMIN_PASSWORD` (e.g. `YourSecurePassword123!`)

You can immediately test logging in via `POST /api/v1/auth/login`:
```json
{
  "email": "admin@filmrank.com",
  "password": "YourSecurePassword123!"
}
```

---

### Step 7: Testing Stripe Webhooks Locally

To test pay-per-view film checkout events and automated payment reconciliation locally:

1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli).
2. Log in with your Stripe account:
   ```bash
   stripe login
   ```
3. Forward webhook events to your running local server:
   ```bash
   stripe listen --forward-to localhost:5000/webhook
   ```
4. Trigger a test event:
   ```bash
   stripe trigger checkout.session.completed
   ```

---

## 📡 API Route Directory

All business routes are prefixed with `/api/v1`:

| Module | Method | Endpoint | Access Level | Description |
|---|---|---|---|---|
| **Auth** | `POST` | `/api/v1/auth/register` | Public | Register a new user |
| **Auth** | `POST` | `/api/v1/auth/login` | Public | Login with email & password |
| **Auth** | `GET` | `/api/v1/auth/getme` | Authenticated | Retrieve current user profile |
| **Auth** | `POST` | `/api/v1/auth/refresh-token` | Public | Refresh JWT access token |
| **Auth** | `POST` | `/api/v1/auth/change-password`| Authenticated | Change current password |
| **Auth** | `POST` | `/api/v1/auth/forget-password`| Public | Request password reset email |
| **Auth** | `POST` | `/api/v1/auth/reset-password` | Public | Reset password with token |
| **Auth** | `POST` | `/api/v1/auth/verify-email` | Public | Verify user email address |
| **Auth** | `GET` | `/api/v1/auth/login/google` | Public | Initiate Google OAuth sign-in |
| **Auth** | `PATCH`| `/api/v1/auth/update-profile`| Authenticated | Update user name & avatar |
| **Users** | `GET` | `/api/v1/users` | Admin, SuperAdmin | Fetch all registered users |
| **Users** | `POST` | `/api/v1/users/create-admin` | Admin, SuperAdmin | Create an administrative user |
| **Admins** | `GET` | `/api/v1/admins` | Admin, SuperAdmin | List all admin profiles |
| **Admins** | `GET` | `/api/v1/admins/:id` | Admin, SuperAdmin | Get single admin profile |
| **Admins** | `PATCH`| `/api/v1/admins/:id` | Admin, SuperAdmin | Update admin profile details |
| **Admins** | `DELETE`| `/api/v1/admins/:id` | Admin, SuperAdmin | Soft delete an admin |
| **Admins** | `PATCH`| `/api/v1/admins/change-user-status/:id` | Admin, SuperAdmin | Update status (ACTIVE / BLOCKED) |
| **Admins** | `PATCH`| `/api/v1/admins/change-user-role/:id` | SuperAdmin only | Promote/demote role (USER/ADMIN/SUPER_ADMIN) |
| **SuperAdmin** | `GET` | `/api/v1/super-admins` | SuperAdmin only | List super administrator accounts |
| **Media** | `POST` | `/api/v1/media` | Admin, SuperAdmin | Create new movie/show + poster upload |
| **Media** | `GET` | `/api/v1/media` | Public | Browse all media (supports filters/pagination) |
| **Media** | `GET` | `/api/v1/media/:id` | Public | Get single media item details |
| **Media** | `PUT` | `/api/v1/media/:id` | Admin, SuperAdmin | Update media details + poster |
| **Media** | `DELETE`| `/api/v1/media/:id` | Admin, SuperAdmin | Delete media item |
| **Genre** | `POST` | `/api/v1/genre` | Admin, SuperAdmin | Create genre category |
| **Genre** | `GET` | `/api/v1/genre` | Admin, SuperAdmin | List all genres |
| **Platform**| `POST` | `/api/v1/platform` | Admin, SuperAdmin | Create streaming platform |
| **Platform**| `GET` | `/api/v1/platform` | Admin, SuperAdmin | List all platforms |
| **Review** | `POST` | `/api/v1/review` | Authenticated | Create a rating & review |
| **Review** | `GET` | `/api/v1/review` | Public | Browse all approved reviews |
| **Review** | `GET` | `/api/v1/review/:id` | Public | Get review details |
| **Review** | `PATCH`| `/api/v1/review/:id` | Owner, Admin | Update rating or review content |
| **Review** | `PATCH`| `/api/v1/review/:id/status`| Admin, SuperAdmin | Moderate review (APPROVED / REJECTED) |
| **Review** | `DELETE`| `/api/v1/review/:id` | Owner, Admin | Remove a review |
| **Comments**| `POST` | `/api/v1/comment` | Authenticated | Post a comment or reply (`parentId`) |
| **Comments**| `GET` | `/api/v1/comment/review/:reviewId` | Public | Get threaded comments for a review |
| **Comments**| `GET` | `/api/v1/comment/my-comments` | Authenticated | Get user's posted comments |
| **Comments**| `PATCH`| `/api/v1/comment/:id` | Owner, Admin | Edit comment content |
| **Comments**| `DELETE`| `/api/v1/comment/:id` | Owner, Admin | Delete a comment |
| **Likes** | `POST` | `/api/v1/like/like/:reviewId` | Authenticated | Toggle like/unlike on a review |
| **Likes** | `GET` | `/api/v1/like/count/:reviewId`| Public | Fetch total like count for review |
| **Tags** | `POST` | `/api/v1/tag` | Admin, SuperAdmin | Create review tag |
| **Tags** | `GET` | `/api/v1/tag` | Admin, SuperAdmin | List all tags |
| **Watchlist**| `POST`| `/api/v1/watchlist/toggle` | Authenticated | Toggle movie in personal watchlist |
| **Watchlist**| `GET` | `/api/v1/watchlist` | Authenticated | Get current user's watchlist |
| **Payments**| `POST` | `/api/v1/payment/checkout` | Authenticated | Initiate Stripe checkout for premium film |
| **Webhooks**| `POST` | `/webhook` | Stripe Service | Raw body listener for Stripe events |
| **Stats** | `GET` | `/api/v1/stats` | Authenticated | Role-aware dashboard analytics (Admin / User) |

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `pnpm dev` | `tsx watch src/server.ts` | Runs the server in development mode with live watch & reload |
| `pnpm build` | `prisma generate && tsc` | Generates the Prisma client and compiles TypeScript to `dist/` |
| `pnpm start` | `tsx src/server.ts` | Starts the production server |
| `pnpm migrate`| `prisma migrate dev` | Applies new schema migrations in development |
| `pnpm generate`| `prisma generate` | Regenerates Prisma Client to `src/generated/prisma` |
| `pnpm studio`| `prisma studio` | Launches interactive browser GUI for the database |
| `pnpm push` | `prisma db push` | Pushes Prisma schema changes directly to the database without migrations |
| `pnpm pull` | `prisma db pull` | Inspects database schema and updates Prisma schema definitions |

---

## 📁 Project Directory Structure

```text
backend-model-filmranking/
├── prisma/
│   ├── migrations/               # Database migration history
│   ├── schema/                   # Modular Prisma schema definitions
│   │   ├── admin.prisma          # Admin profile extension model
│   │   ├── auth.prisma           # User, Session, Account, Verification
│   │   ├── comment.prisma        # Threaded review comments
│   │   ├── enums.prisma          # Shared database enums
│   │   ├── genre.prisma          # Genre lookup model
│   │   ├── like.prisma           # Review likes
│   │   ├── media.prisma          # Core film & media catalog
│   │   ├── media-genre.prisma    # M:N Media <-> Genre join table
│   │   ├── media-platform.prisma # M:N Media <-> Platform join table
│   │   ├── payment.prisma        # Purchases & financial transactions
│   │   ├── platform.prisma       # Streaming platform lookup model
│   │   ├── review.prisma         # Ratings & reviews
│   │   ├── review-tag.prisma     # M:N Review <-> Tag join table
│   │   ├── schema.prisma         # Generator & datasource config
│   │   ├── subcription.prisma    # Subscription models
│   │   ├── super-admin.prisma    # SuperAdmin profile extension model
│   │   ├── tag.prisma            # Descriptive tags
│   │   └── wishList.prisma       # User watchlists
├── src/
│   ├── app/
│   │   ├── errorHelpers/         # Custom AppError and global error handlers
│   │   ├── interfaces/           # Common TypeScript interfaces
│   │   ├── lib/                  # Initialized Prisma client & Better-Auth
│   │   ├── middleware/           # checkAuth, validateRequest, multer
│   │   ├── modules/              # Domain-driven feature modules
│   │   │   ├── admin/            # Admin routes, controller, service
│   │   │   ├── auth/             # Authentication & OAuth flows
│   │   │   ├── comment/          # Threaded comments
│   │   │   ├── genre/            # Genre management
│   │   │   ├── like/             # Like toggle & count
│   │   │   ├── media/            # Media catalog operations
│   │   │   ├── payment/          # Stripe checkout & webhook listener
│   │   │   ├── platform/         # Streaming platform directory
│   │   │   ├── review/           # Review CRUD & moderation
│   │   │   ├── stats/            # Admin & user dashboard analytics
│   │   │   ├── superAdmin/       # SuperAdmin operations
│   │   │   ├── tag/              # Tag management
│   │   │   ├── user/             # User listing & creation
│   │   │   └── wishList/         # Watchlist toggle & fetching
│   │   └── templates/            # EJS email templates
│   ├── config/
│   │   ├── cloudinary.config.ts  # Cloudinary SDK configuration
│   │   ├── env.ts                # Strict runtime environment variable loader
│   │   └── multer.config.ts      # Multer Cloudinary storage engine
│   ├── routes/
│   │   └── index.ts              # Global Express v1 route registry
│   ├── utils/
│   │   └── seed.ts               # Automatic SuperAdmin seeding on bootstrap
│   ├── app.ts                    # Express application configuration
│   └── server.ts                 # Server entry point & bootstrap lifecycle
├── .env.example                  # Template of required environment variables
├── package.json
├── prisma.config.ts              # Prisma 7 configuration file
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---

## 👤 Author

Developed and maintained by **[shimul950](https://github.com/shimul950)**.
Contributions, issues, and feature requests are welcome!
