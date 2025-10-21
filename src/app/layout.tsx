import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - DevOps Engineer | Cloud Infrastructure & Automation Specialist`,
    template: `%s | ${DATA.name} - DevOps Engineer`,
  },
  description: `${DATA.description} Expert in AWS, Kubernetes, Docker, Terraform, and CI/CD pipelines. Available for DevOps consulting and cloud infrastructure projects.`,
  keywords: [
    "DevOps Engineer",
    "Cloud Infrastructure",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "CI/CD",
    "Jenkins",
    "GitLab",
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
    "Monitoring",
    "Logging",
    "Auto Scaling",
    "Load Balancing",
    "Cloud Migration",
    "Site Reliability Engineering",
    "SRE",
    "Cloud Architecture",
    "System Administration",
    "Udupi",
    "Karnataka",
    "India",
    "Remote Work",
    "Freelance DevOps",
    "Cloud Consultant"
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
    title: `${DATA.name} - DevOps Engineer | Cloud Infrastructure Specialist`,
    description: `${DATA.description} Expert in AWS, Kubernetes, Docker, and automation. Available for DevOps consulting.`,
    url: DATA.url,
    siteName: `${DATA.name} - DevOps Engineer`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - DevOps Engineer Portfolio`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - DevOps Engineer`,
    description: `${DATA.description} Expert in cloud infrastructure and automation.`,
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
  "name": DATA.name,
  "url": DATA.url,
  "image": `${DATA.url}${DATA.avatarUrl}`,
  "description": DATA.description,
  "jobTitle": "DevOps Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance DevOps Consultant"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Udupi",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": DATA.contact.tel,
    "contactType": "Professional",
    "email": DATA.contact.email
  },
  "sameAs": [
    DATA.contact.social.GitHub.url,
    DATA.contact.social.LinkedIn.url,
    DATA.contact.social.X.url
  ],
  "knowsAbout": DATA.skills,
  "alumniOf": DATA.education.map(edu => ({
    "@type": "EducationalOrganization",
    "name": edu.school
  })),
  "hasOccupation": {
    "@type": "Occupation",
    "name": "DevOps Engineer",
    "description": "Specializes in cloud infrastructure, automation, and containerization",
    "skills": DATA.skills
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
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            {/* <SpeedInsights />
            <Analytics /> */}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
