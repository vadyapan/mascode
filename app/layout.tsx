'use client';
import { ReactNode } from 'react';
import { Header } from '@/layout/Header/Header';
import { Raleway, IBM_Plex_Sans, Caveat, Fira_Code } from 'next/font/google';
import { ThemeContextProvider } from '@/contexts/themeContext';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-dog',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <MantineProvider>
      <ThemeContextProvider>
        <Notifications position="top-center" autoClose={5000} zIndex={2077} />
        <html
          lang="ru"
          className={`${raleway.variable} ${ibmPlexSans.variable} ${caveat.variable} ${fira.variable}`}>
          <body>
            <Header />
            {children}
            <div id="modal-window" />
          </body>
        </html>
      </ThemeContextProvider>
    </MantineProvider>
  );
}
