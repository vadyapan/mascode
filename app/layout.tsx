'use client';
// import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Header } from '@/layout/Header/Header';
import {
  Raleway,
  IBM_Plex_Sans,
  JetBrains_Mono,
  Caveat,
} from 'next/font/google';
import { UserContextProvider } from '@/context/UserContext';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import './globals.css';

// export const metadata: Metadata = {
//   title: 'Mascode | Получи практику программирования на JavaScript',
//   description: 'Получи практику программирования на JavaScript',
//   icons: {
//     icon: ['/favicon.ico?v=1'],
//     apple: ['/apple-touch-icon.png?v=1'],
//     shortcut: ['/apple-touch-icon.png'],
//   },
//   manifest: '/site.webmanifest',
// };

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

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jb-mono',
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
      <UserContextProvider>
        <Notifications
          position="bottom-center"
          autoClose={3000}
          zIndex={2077}
        />
        <html
          lang="ru"
          className={`${raleway.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable} ${caveat.variable}`}>
          <body>
            <Header />
            {children}
          </body>
        </html>
      </UserContextProvider>
    </MantineProvider>
  );
}
