'use client';
import { ReactNode } from 'react';
import { Header } from '@/layout/Header/Header';
import {
  Raleway,
  IBM_Plex_Sans,
  Noto_Sans_Mono,
  Caveat,
} from 'next/font/google';
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

const notoSans = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-notoSans',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
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
          className={`${raleway.variable} ${ibmPlexSans.variable} ${notoSans.variable} ${caveat.variable}`}>
          <body>
            <div id="modal-window" />
            <Header />
            {children}
          </body>
        </html>
      </ThemeContextProvider>
    </MantineProvider>
  );
}
