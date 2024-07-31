import type { Metadata } from 'next';
import { Roboto_Mono, Racing_Sans_One } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });
const racing_sans_one = Racing_Sans_One({ weight: '400', subsets: ['latin'], variable: '--font-racing-sans-one' });

export const metadata: Metadata = {
  title: 'MGMT',
  description: 'Job Application Tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}, ${racing_sans_one.variable}`}>{children}</body>
    </html>
  );
}
