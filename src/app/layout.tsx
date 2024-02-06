import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Abel Ramadhan - Software Engineer',
    description: 'Welcome to my portfolio!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange>
                    <main className=''>
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
