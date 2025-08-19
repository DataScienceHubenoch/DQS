# Data Quest

A modern Web 2.0 application for data science services, courses, and training with Supabase backend integration.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase credentials to .env

# Start development server
npm run dev

# Build for production
npm run build
```

## Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Copy your project URL and anon key to `.env`
3. Run the database migrations in the Supabase SQL editor
4. Configure authentication settings in Supabase dashboard

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Supabase (Backend-as-a-Service)
- Supabase Auth (Authentication)
- Real-time subscriptions
- Web3 Integration
- React Router
- Shadcn UI Components

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── auth/       # Authentication components
│   ├── blog/       # Blog-related components
│   ├── courses/    # Course-related components
│   ├── forms/      # Enhanced form components
│   └── realtime/   # Real-time features
├── contexts/       # React contexts (Web3, Auth, etc.)
├── hooks/          # Custom React hooks
├── lib/           # Utility functions and configurations
│   ├── supabase.ts # Supabase client and types
│   └── utils/      # Utility functions
├── pages/         # Page components
├── styles/        # Global styles and Tailwind config
└── types/         # TypeScript type definitions
```

## Features

- **Authentication**: Secure user registration and login
- **User Dashboard**: Personal learning dashboard
- **Course Management**: Dynamic course enrollment and tracking
- **Real-time Updates**: Live notifications and updates
- **Blog System**: Dynamic blog with author management
- **Form Submissions**: Database-backed contact and inquiry forms
- **User Profiles**: Comprehensive user profile management
- Web3 wallet integration
- Responsive design
- Modern UI components
- Type-safe development
- SEO optimized

## Database Schema

The application uses the following main tables:
- `profiles` - User profile information
- `courses` - Available courses
- `enrollments` - Course enrollments and progress
- `blog_posts` - Blog content
- `contact_submissions` - Contact form submissions
- `service_inquiries` - Service inquiry submissions
- `newsletter_subscriptions` - Newsletter subscribers

## Authentication

- Email/password authentication via Supabase Auth
- Automatic profile creation on registration
- Role-based access control (student, instructor, admin)
- Secure session management

## Real-time Features

- Live enrollment status updates
- Real-time notifications
- Blog post notifications
- Course progress tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Environment Variables

Required environment variables:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for admin functions)