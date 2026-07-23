# 🎬 Backend Model Film Ranking

A backend REST API built with **Node.js**, **TypeScript**, **Express**, and **Prisma ORM** for a film ranking / movie platform. It provides authentication, media uploads, payments, and email capabilities to power a film-ranking application.

> Repository: [shimul950/backend-model-filmranking](https://github.com/shimul950/backend-model-filmranking)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Database Setup (Prisma)](#-database-setup-prisma)
- [Available Scripts](#-available-scripts)
- [Running the Project](#-running-the-project)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🧩 Overview

**backend-model-filmranking** is the server-side application powering a film ranking platform. It exposes an API layer that handles user authentication, film data management, image/media uploads, subscription/payment processing, and transactional emails, backed by a PostgreSQL database managed through Prisma ORM.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Language | TypeScript |
| Runtime | Node.js |
| Web Framework | [Express](https://expressjs.com/) v5 |
| ORM / Database | [Prisma](https://www.prisma.io/) + PostgreSQL (`pg`) |
| Authentication | [better-auth](https://www.better-auth.com/), JSON Web Tokens (`jsonwebtoken`) |
| File Uploads | [Multer](https://github.com/expressjs/multer) + [Cloudinary](https://cloudinary.com/) |
| Payments | [Stripe](https://stripe.com/) |
| Email | [Nodemailer](https://nodemailer.com/) |
| Templating | [EJS](https://ejs.co/) |
| Validation | [Zod](https://zod.dev/) |
| HTTP Status Codes | `http-status` |
| Dev Tooling | `tsx`, `eslint`, `typescript-eslint` |
| Package Manager | pnpm / npm |

---

## ✨ Features

Based on the project's dependencies, this backend is built to support:

- 🔐 **User Authentication** – secure sign-up/sign-in flows and session/token management via `better-auth` and JWT.
- 🎞 **Film / Ranking Management** – CRUD-style data operations backed by a relational schema via Prisma.
- ☁️ **Media Uploads** – uploading and storing film posters/images through Multer with Cloudinary as the storage backend.
- 💳 **Payments & Subscriptions** – Stripe integration for handling payments or premium features.
- 📧 **Transactional Emails** – automated emails (e.g., verification, notifications) via Nodemailer and EJS templates.
- ✅ **Schema Validation** – request validation and type safety using Zod.
- 🍪 **Cookie-based Sessions** – handled via `cookie-parser`.

---

## 📁 Project Structure

```
backend-model-filmranking/
├── .vscode/              # Editor configuration
├── prisma/                # Prisma schema & migrations
├── src/                    # Application source code (routes, controllers, services, etc.)
├── .gitignore
├── eslint.config.mjs      # ESLint configuration
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── prisma.config.ts       # Prisma configuration
├── tsconfig.json          # TypeScript configuration
└── README.md
```

---

## ✅ Prerequisites

Make sure you have the following installed before setting up the project:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [pnpm](https://pnpm.io/) (preferred) or npm
- [PostgreSQL](https://www.postgresql.org/) database
- A [Cloudinary](https://cloudinary.com/) account (for media uploads)
- A [Stripe](https://stripe.com/) account (for payments)
- An SMTP provider / email service (for Nodemailer)

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shimul950/backend-model-filmranking.git
   cd backend-model-filmranking
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root (see [Environment Variables](#-environment-variables) below).

4. **Set up the database**

   ```bash
   pnpm generate   # Generate Prisma Client
   pnpm migrate    # Run database migrations
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and configure the following variables based on the integrations used in this project:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Auth
JWT_SECRET=your_jwt_secret
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:5000

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Email (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
```

> ⚠️ Update the variable names above to match exactly what is referenced in `src/`, since this list is based on the project's dependencies rather than a committed `.env.example` file.

---

## 🗄 Database Setup (Prisma)

This project uses **Prisma ORM** with PostgreSQL. Common Prisma commands available via `pnpm`/`npm` scripts:

| Command | Description |
|---|---|
| `pnpm generate` | Generates the Prisma Client |
| `pnpm migrate` | Runs Prisma migrations in development |
| `pnpm push` | Pushes the Prisma schema to the database without migrations |
| `pnpm pull` | Pulls the current database schema into Prisma |
| `pnpm studio` | Opens Prisma Studio — a GUI to view/edit your database |

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `tsx watch src/server.ts` | Runs the app in development mode with hot reload |
| `build` | `tsc` | Compiles TypeScript to JavaScript (`dist/`) |
| `start` | `node dist/server.js` | Runs the compiled production build |
| `migrate` | `prisma migrate dev` | Runs Prisma migrations |
| `generate` | `prisma generate` | Generates Prisma Client |
| `studio` | `prisma studio` | Opens Prisma Studio |
| `push` | `prisma db push` | Pushes schema changes to the database |
| `pull` | `prisma db pull` | Pulls schema from the database |
| `test` | — | Not yet configured |

---

## ▶️ Running the Project

**Development:**

```bash
pnpm dev
```

**Production build:**

```bash
pnpm build
pnpm start
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**, as specified in `package.json`.

---

## 👤 Author

**shimul950**
GitHub: [@shimul950](https://github.com/shimul950)

---

> 📝 **Note:** This README was generated from the repository's public metadata and `package.json`. Some sections (such as exact API endpoints, database models, and precise environment variable names) are inferred from the dependencies used and should be verified/updated against the actual source code in `src/` and `prisma/schema.prisma`.
