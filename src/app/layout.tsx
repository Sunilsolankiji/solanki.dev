import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Sunil Solanki | Aspiring Full-Stack Developer',
  description: 'Portfolio of Sunil Solanki, a computer science student passionate about coding, learning, and creating impactful web applications.',
  openGraph: {
    title: 'Sunil Solanki | Aspiring Full-Stack Developer',
    description: 'Portfolio of Sunil Solanki, a computer science student passionate about coding, learning, and creating impactful web applications.',
    url: 'https://solanki-dev.web.app', // Replace with actual URL
    siteName: 'Solanki.Dev',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with an actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
