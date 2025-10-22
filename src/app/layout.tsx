import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `Chirag S Kotian - DevOps Engineer & Full Stack Developer | Multi-Cloud Expert`,
    template: `%s | Chirag S Kotian - DevOps Engineer`,
  },
  description: `Chirag S Kotian - DevOps Engineer & Full Stack Developer specializing in multi-cloud infrastructure (AWS, GCP, Azure), automation, and modern web development. Expert in building scalable systems and optimizing deployment pipelines across cloud platforms.`,
  keywords: [
    "Chirag S Kotian",
    "Chirag Kotian",
    "Chirag S Kotian DevOps",
    "Chirag Kotian Engineer",
    "Chirag S Kotian India",
    "Chirag Kotian Udupi",
    "Chirag S Kotian Karnataka",
    "DevOps Engineer",
    "Full Stack Developer",
    "Cloud Infrastructure",
    "AWS",
    "Google Cloud Platform",
    "Microsoft Azure",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "CI/CD",
    "Jenkins",
    "GitLab CI/CD",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "Infrastructure as Code",
    "Cloud Security",
    "DevSecOps",
    "Microservices",
    "Container Orchestration",
    "Linux",
    "Shell Scripting",
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "API Development",
    "RESTful APIs",
    "GraphQL",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "System Architecture",
    "Software Engineering",
    "Agile Development",
    "Scrum",
    "Multi-Cloud Architecture",
    "Cloud Migration",
    "Cost Optimization",
    "Disaster Recovery",
    "Backup Solutions",
    "Udupi",
    "Karnataka",
    "India",
    "Remote Work",
    "Freelance DevOps",
    "Cloud Consultant",
    "Full Stack Engineer",
    "Software Developer",
    "Tech Professional",
    "IT Professional",
    "Computer Science",
    "MCA Student",
    "BCA Graduate"
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `Chirag S Kotian - DevOps Engineer & Full Stack Developer | Multi-Cloud Expert`,
    description: `Chirag S Kotian - DevOps Engineer & Full Stack Developer specializing in multi-cloud infrastructure (AWS, GCP, Azure), automation, and modern web development. Expert in building scalable systems.`,
    url: DATA.url,
    siteName: `Chirag S Kotian - DevOps Engineer & Full Stack Developer`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Chirag S Kotian - DevOps Engineer & Full Stack Developer Portfolio`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Chirag S Kotian - DevOps Engineer & Full Stack Developer`,
    description: `DevOps Engineer & Full Stack Developer specializing in multi-cloud infrastructure and modern web development.`,
    creator: "@Chirag_S_kotian",
    images: [`${DATA.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: DATA.url,
  },
  category: "Technology",
  classification: "DevOps Engineering Portfolio",
  other: {
    "contact:email": DATA.contact.email,
    "contact:phone_number": DATA.contact.tel,
    "contact:country_name": "India",
    "contact:region": "Karnataka",
    "contact:locality": "Udupi",
    "geo.region": "IN-KA",
    "geo.placename": "Udupi",
    "geo.position": "13.3409;74.7421",
    "ICBM": "13.3409, 74.7421",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chirag S Kotian",
  "alternateName": ["Chirag Kotian", "Chirag S Kotian DevOps", "Chirag Kotian Engineer"],
  "url": DATA.url,
  "image": `${DATA.url}${DATA.avatarUrl}`,
  "description": "Chirag S Kotian - DevOps Engineer & Full Stack Developer specializing in multi-cloud infrastructure, automation, and modern web development",
  "jobTitle": ["DevOps Engineer", "Full Stack Developer", "Cloud Infrastructure Specialist"],
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance DevOps & Full Stack Developer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Udupi",
    "addressRegion": "Karnataka",
    "addressCountry": "IN",
    "postalCode": "574116"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": DATA.contact.tel,
    "contactType": "Professional",
    "email": DATA.contact.email,
    "availableLanguage": "English"
  },
  "sameAs": [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url,
    DATA.url
  ],
  "knowsAbout": DATA.skills,
  "alumniOf": DATA.education.map(edu => ({
    "@type": "EducationalOrganization",
    "name": edu.school,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Udupi",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  })),
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "DevOps Engineer",
      "description": "Specializes in cloud infrastructure, automation, and containerization",
      "skills": DATA.skills.filter(skill => 
        skill && ["AWS", "Google Cloud Platform", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "CI/CD", "DevSecOps"].includes(skill)
      )
    },
    {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Specializes in modern web development and software engineering",
      "skills": DATA.skills.filter(skill => 
        skill && ["JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "API Development"].includes(skill)
      )
    }
  ],
  "nationality": "Indian",
  "birthPlace": {
    "@type": "Place",
    "name": "Udupi, Karnataka, India"
  },
  "award": [],
  "memberOf": [],
  "publisher": {
    "@type": "Organization",
    "name": "Chirag S Kotian Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            textAlign: 'center',
            padding: '20px',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>JavaScript Required</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px' }}>
              This portfolio website requires JavaScript to function properly. Please enable JavaScript in your browser settings to view the full experience.
            </p>
            <div style={{ fontSize: '1rem', opacity: 0.8 }}>
              <p><strong>Chirag S Kotian</strong> - DevOps Engineer & Full Stack Developer</p>
              <p>Email: ckotian117@gmail.com</p>
              <p>GitHub: <a href="https://github.com/Chirag-S-Kotian" style={{ color: '#fff', textDecoration: 'underline' }}>github.com/Chirag-S-Kotian</a></p>
            </div>
          </div>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <SpeedInsights />
            <Analytics />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
