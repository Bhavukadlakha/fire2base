# Bhavuk Adlakha - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring AI chatbot integration and NextAuth authentication.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🤖 AI Chatbot Integration
- 🔐 NextAuth Authentication
- 📱 Fully Responsive Design
- 🚀 Optimized Performance
- 🎯 SEO Friendly

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd fire2base
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:9002

# Email Configuration (optional - for email provider)
# EMAIL_SERVER=smtp://username:password@smtp.example.com:587
# EMAIL_FROM=noreply@example.com

# Database URL (if using Prisma)
DATABASE_URL="file:./dev.db"
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the following environment variables in Vercel dashboard:
   - `NEXTAUTH_SECRET`: Generate a secure secret key
   - `NEXTAUTH_URL`: Your production URL (e.g., https://your-domain.vercel.app)
   - `EMAIL_SERVER`: Your email server configuration (if using email auth)
   - `EMAIL_FROM`: Your email address (if using email auth)

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:

- **NEXTAUTH_SECRET**: A secure random string (use `openssl rand -base64 32` to generate)
- **NEXTAUTH_URL**: Your production URL
- **EMAIL_SERVER**: SMTP server configuration (if using email authentication)
- **EMAIL_FROM**: Email address for authentication emails

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js
- **Database**: Prisma with SQLite
- **AI Integration**: Custom AI chatbot
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── sections/       # Page sections
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── ai/                 # AI integration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
