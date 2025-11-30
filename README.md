# Secret Vault - Secure Secrets Management Application

A modern, secure application built with React and Next.js to store, organize, and manage sensitive data and API keys with a beautiful nested tree interface and advanced security features.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Database Schema](#database-schema)
- [Usage Guide](#usage-guide)
- [Security Features](#security-features)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Development](#development)

---

## ✨ Features

### Core Features
- **Nested Hierarchy Navigation** - Organize secrets in a 3-level structure: Categories → Services → Accounts
- **Full CRUD Operations** - Create, read, update, and delete categories, services, and accounts
- **Dynamic Secret Storage** - Store flexible key-value pairs (JSONB) for any type of secret data
- **Mobile Responsive** - Fully optimized for desktop, tablet, and mobile devices with touch-friendly controls
- **Dark Mode** - Sleek dark mode interface with glassmorphism design aesthetic

### Security Features
- **Password Masking** - Sensitive data is masked by default with reveal/hide toggle
- **One-Click Copy** - Copy secrets to clipboard with visual feedback
- **Row Level Security** - Database-level RLS policies protect all data
- **Supabase Integration** - Enterprise-grade backend with authentication ready
- **Secure State Management** - Redux Toolkit for controlled state handling

### UX Features
- **Expandable Tree UI** - Smooth collapse/expand animations for better data exploration
- **Real-time Updates** - Instant sync between components using Redux
- **Dropdown Actions** - Context-aware menus for category, service, and account operations
- **Form Validation** - Comprehensive validation for all CRUD operations
- **Toast Notifications** - User feedback for all actions (coming soon)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, Shadcn/UI |
| **State Management** | Redux Toolkit + RTK Query |
| **Backend** | Supabase (PostgreSQL) |
| **Icons** | Lucide React |
| **UI Components** | Shadcn/UI Component Library |
| **Package Manager** | npm |

---

## 📁 Project Structure

\`\`\`
secret-vault-app/
├── app/                                # Next.js App Router
│   ├── layout.tsx                      # Root layout with Providers
│   ├── page.tsx                        # Main page entry point
│   └── globals.css                     # Global Tailwind CSS configuration
│
├── src/
│   ├── features/
│   │   └── vault/                      # Feature-based folder structure
│   │       ├── components/
│   │       │   ├── vault-view.tsx              # Main vault container
│   │       │   ├── category-tree.tsx          # Category list with expand/collapse
│   │       │   ├── service-tree.tsx           # Services under each category
│   │       │   ├── account-details.tsx        # Account details panel
│   │       │   ├── masked-secret-field.tsx    # Masked password field component
│   │       │   ├── category-modal.tsx         # Category CRUD modal
│   │       │   ├── service-modal.tsx          # Service CRUD modal
│   │       │   ├── account-modal.tsx          # Account CRUD modal
│   │       │   └── crud-modals-container.tsx  # Modal management
│   │       └── hooks/
│   │           └── useClipboard.ts            # Clipboard copy hook
│   │
│   ├── store/
│   │   ├── index.ts                    # Redux store configuration
│   │   ├── slices/
│   │   │   ├── categoriesSlice.ts      # Categories state & reducers
│   │   │   ├── servicesSlice.ts        # Services state & reducers
│   │   │   ├── accountsSlice.ts        # Accounts state & reducers
│   │   │   └── uiSlice.ts              # UI modals & interactions state
│   │   └── api/
│   │       └── vaultApi.ts             # RTK Query API endpoints
│   │
│   └── providers.tsx                   # Redux Provider wrapper
│
├── scripts/
│   ├── 01_create_vault_schema.sql      # Database schema initialization
│   └── seed.ts                         # Sample data seeding script
│
├── components/
│   └── ui/                             # Shadcn/UI components (auto-generated)
│
├── hooks/
│   ├── use-mobile.tsx                  # Mobile detection hook
│   └── use-toast.ts                    # Toast notifications hook
│
├── lib/
│   └── utils.ts                        # Utility functions (cn classname merger)
│
├── public/                             # Static assets
│   ├── icon.svg
│   ├── icon-dark-32x32.png
│   └── icon-light-32x32.png
│
├── package.json                        # Dependencies & scripts
├── tsconfig.json                       # TypeScript configuration
├── next.config.mjs                     # Next.js configuration
├── tailwind.config.ts                  # Tailwind CSS configuration
└── README.md                           # This file
\`\`\`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- A Supabase account (https://supabase.com)
- Git

### Installation

1. **Clone or download the project**
   \`\`\`bash
   cd secret-vault-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up Supabase**
   - Create a new Supabase project
   - Go to the v0 Settings sidebar and connect your Supabase project
   - Add these environment variables from your Supabase project:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     \`\`\`

4. **Initialize the database**
   - Go to your Supabase dashboard → SQL Editor
   - Copy and paste the contents of `scripts/01_create_vault_schema.sql`
   - Execute the script to create tables and RLS policies
   - (Optional) Run the seed script to populate sample data

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000) in your browser.

6. **Deploy to Vercel** (Optional)
   - Click the "Publish" button in v0 to deploy to Vercel
   - Add the same Supabase environment variables to your Vercel project

---

## 🗄️ Database Schema

### Tables Overview

#### `categories`
Stores the top-level organizational units.
\`\`\`sql
CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
\`\`\`

#### `services`
Stores services grouped under categories.
\`\`\`sql
CREATE TABLE services (
  id UUID PRIMARY KEY,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
\`\`\`

#### `accounts`
Stores individual accounts with JSONB data for flexible secret storage.
\`\`\`sql
CREATE TABLE accounts (
  id UUID PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  name VARCHAR NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
\`\`\`

### Data Flow Example

\`\`\`
Category: "Email Providers"
├── Service: "Gmail"
│   └── Account: "Personal Gmail"
│       └── data: { 
│           "username": "john@gmail.com",
│           "password": "••••••••••",
│           "recovery_email": "backup@email.com"
│         }
└── Service: "Outlook"
    └── Account: "Work Outlook"
        └── data: { 
            "username": "john@company.com",
            "password": "••••••••••",
            "2fa_enabled": true
          }
\`\`\`

---

## 💡 Usage Guide

### Adding a Category
1. Click the **"+ Add Category"** button in the sidebar
2. Enter a category name (e.g., "Email Providers", "API Keys")
3. Click **"Create Category"**

### Adding a Service
1. Click the **three-dot menu** next to a category name
2. Select **"Add Service"**
3. Enter the service name (e.g., "Gmail", "AWS")
4. Click **"Create Service"**

### Adding an Account
1. Click the **arrow/expand icon** next to a service
2. Click **"+ Add Account"**
3. Enter the account name and add key-value pairs for secrets:
   - Click **"+ Add Field"** to add more fields
   - Common fields: username, password, api_key, token, etc.
4. Click **"Create Account"**

### Viewing & Copying Secrets
1. Click on an account to view its secrets in the details panel
2. Passwords and sensitive fields are **masked by default** (shown as dots)
3. Click the **eye icon** to reveal the secret
4. Click the **copy icon** to copy the value to your clipboard
5. A toast notification confirms the copy action

### Editing an Account
1. Open an account in the details panel
2. Click the **"Edit"** button
3. Modify the fields as needed
4. Click **"Save Changes"**

### Deleting Items
1. Hover over any category, service, or account
2. Click the **trash icon** or use the dropdown menu
3. Confirm the deletion (optional confirmation dialog)

---

## 🔐 Security Features

### Password Masking
All sensitive fields (containing "password", "token", "key", "secret" in the field name) are automatically masked with `••••••••••` by default. Click the eye icon to reveal temporarily.

### Copy to Clipboard
- One-click copy functionality with visual feedback
- Copied value persists in clipboard for 5 seconds
- Toast notification confirms successful copy

### Database Security
- **Row Level Security (RLS)** enabled on all tables
- All data is user-scoped (requires authentication)
- Deletion cascades properly through relationships
- Timestamps track creation and updates

### Frontend Security
- Redux state is client-side only (doesn't expose raw data in URLs)
- Sensitive fields are masked in the UI
- No console logging of secrets in production

---

## 🔌 API Integration

### RTK Query Hooks

The app uses **RTK Query** for data fetching and caching. Available hooks in `src/store/api/vaultApi.ts`:

\`\`\`typescript
// Categories
useGetCategoriesQuery()          // Fetch all categories
useCreateCategoryMutation()      // Create new category
useUpdateCategoryMutation()      // Update category
useDeleteCategoryMutation()      // Delete category

// Services
useGetServicesQuery(categoryId)  // Fetch services by category
useCreateServiceMutation()       // Create new service
useUpdateServiceMutation()       // Update service
useDeleteServiceMutation()       // Delete service

// Accounts
useGetAccountsQuery(serviceId)   // Fetch accounts by service
useCreateAccountMutation()       // Create new account
useUpdateAccountMutation()       // Update account
useDeleteAccountMutation()       // Delete account
\`\`\`

### Redux State Structure

\`\`\`typescript
{
  categories: {
    entities: { [id]: Category },
    ids: string[],
    loading: boolean,
    error: string | null
  },
  services: {
    entities: { [id]: Service },
    ids: string[],
    loading: boolean,
    error: string | null
  },
  accounts: {
    entities: { [id]: Account },
    ids: string[],
    loading: boolean,
    error: string | null
  },
  ui: {
    modals: {
      category: { open: boolean, mode: 'create' | 'edit', data: Category | null },
      service: { open: boolean, mode: 'create' | 'edit', data: Service | null },
      account: { open: boolean, mode: 'create' | 'edit', data: Account | null }
    },
    selectedAccountId: string | null,
    sidebarOpen: boolean // Mobile
  }
}
\`\`\`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Using v0 UI**
   - Click the **"Publish"** button in the top-right corner
   - Select your Git repository (GitHub/GitLab)
   - Vercel will auto-detect Next.js and deploy

2. **Environment Variables**
   - In your Vercel project, go to **Settings** → **Environment Variables**
   - Add the required Supabase variables:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     SUPABASE_SERVICE_ROLE_KEY
     \`\`\`

3. **Database Access**
   - Ensure your Supabase project is accessible from Vercel's IP range
   - Configure firewall rules if needed

### Self-Hosting

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start the production server**
   \`\`\`bash
   npm start
   \`\`\`

3. **Using Docker** (Optional)
   \`\`\`bash
   docker build -t secret-vault .
   docker run -p 3000:3000 secret-vault
   \`\`\`

---

## 🛠️ Development

### Available Scripts

\`\`\`bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checker
\`\`\`

### Folder Structure Best Practices

This project uses a **feature-based folder structure** for scalability:

- **Feature folders** (`src/features/vault/`) group related components, hooks, and logic
- **Store folder** (`src/store/`) contains Redux slices and RTK Query API definitions
- **Shared UI** (`components/ui/`) contains reusable shadcn/ui components
- **Utilities** (`lib/`, `hooks/`) contain shared utilities and custom hooks

### Adding New Features

1. Create a new folder in `src/features/`
2. Add subfolders: `components/`, `hooks/`, `types/` (if needed)
3. Create slices in `src/store/slices/` if you need new state
4. Create RTK Query endpoints in `src/store/api/`
5. Import and use in your feature components

### Debugging

Use `console.log("[v0] message")` for debugging during development:

\`\`\`typescript
console.log("[v0] Current state:", state)
console.log("[v0] API response:", response)
\`\`\`

Remove these logs before committing.

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [RTK Query Documentation](https://redux-toolkit.js.org/rtk-query/overview)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn/UI Components](https://ui.shadcn.com)

---

## 📝 License

This project is provided as-is for educational and personal use.

---

## 🤝 Support

For issues or questions:
1. Check the [Getting Started](#getting-started) section
2. Review the [Usage Guide](#usage-guide)
3. Open an issue on GitHub if using version control
4. Contact support at vercel.com/help

---

**Happy vaulting! 🔐**
