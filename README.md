# MANASA - Mental Health Platform for Students

A Neuro-Holistic Digital Ecosystem for Student Well-being in India. MANASA provides comprehensive mental health support through AI-powered tools, professional counseling, and evidence-based practices tailored for Indian students.

## 🌟 Features

- **Self-Discovery Tools** - Comprehensive mental health assessments and personalized insights
- **Holistic Wellness** - Integrated approach to physical and mental well-being
- **Digital Therapeutics** - CBT tools, mindfulness meditation, and stress management
- **Support Network** - Peer support communities and professional counseling
- **24/7 Crisis Support** - Emergency helplines and immediate assistance
- **AI-Powered Recommendations** - Personalized wellness plans using machine learning

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Font:** Geist (Sans & Mono)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd manasa-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
manasa-landing/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog listing page
│   │   ├── contact/        # Contact page with form
│   │   ├── faq/            # FAQ page
│   │   ├── get-started/    # Registration page
│   │   ├── pricing/        # Pricing plans page
│   │   ├── privacy/        # Privacy policy
│   │   ├── terms/          # Terms of service
│   │   ├── layout.tsx      # Root layout with header
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx  # Navigation header
│   │   ├── sections/
│   │   │   └── Testimonials.tsx  # Testimonials section
│   │   ├── ui/
│   │   │   ├── Badge.tsx   # Badge component
│   │   │   ├── Button.tsx  # Button component
│   │   │   ├── Card.tsx    # Card component
│   │   │   ├── Input.tsx   # Input field
│   │   │   └── TextArea.tsx # Textarea field
│   │   ├── CallToAction.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   └── Solution.tsx
│   └── ...
├── public/
├── package.json
└── README.md
```

## 🎨 Pages

### Main Pages
- **Home (/)** - Landing page with hero, features, testimonials, and CTA
- **About (/about)** - Mission, vision, team, and impact
- **Pricing (/pricing)** - Student and institutional pricing plans
- **Contact (/contact)** - Contact form and crisis helplines
- **Get Started (/get-started)** - Registration for students, institutions, and counselors
- **FAQ (/faq)** - Comprehensive frequently asked questions
- **Blog (/blog)** - Mental health articles and resources

### Legal Pages
- **Privacy Policy (/privacy)** - Data protection and privacy information
- **Terms of Service (/terms)** - Terms and conditions

## 🧩 Components

### UI Components
- **Button** - Versatile button with variants (primary, secondary, outline, ghost)
- **Card** - Card container with header, title, content, and footer
- **Input** - Text input with label and error support
- **TextArea** - Multi-line input field
- **Badge** - Status badges with color variants

### Layout Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Site footer with links and social media

### Section Components
- **Hero** - Landing page hero section
- **Features** - Key features and modules
- **Testimonials** - Student testimonials and stats
- **CallToAction** - Conversion section
- **ProblemStatement** - Problem definition
- **Solution** - Solution overview

## 🎯 Key Features Implementation

### Form Validation
Contact and registration forms include client-side validation with error messages.

### Responsive Design
All components are fully responsive with mobile-first approach using Tailwind CSS.

### Accessibility
- Semantic HTML
- ARIA labels for icon links
- Keyboard navigation support
- Focus states

### SEO
- Meta tags configured in layout
- Semantic page structure
- Descriptive headings

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Tailwind CSS for styling
- Component composition pattern

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables (if any)
4. Deploy

Alternative platforms:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📝 Environment Variables

Currently, no environment variables are required for the basic setup. Add as needed for:
- API endpoints
- Analytics tracking
- Payment integration
- Email service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 📧 Contact

- **Website:** [MANASA Platform](https://manasa.health)
- **Email:** support@manasa.health
- **Crisis Helpline:** +91 1800-XXX-XXXX

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for comprehensive icon library
- All mental health professionals and students who inspired this project

---

**Built with ❤️ for the mental well-being of Indian students**
