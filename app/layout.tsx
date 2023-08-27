'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Header } from '@/layout/Header/Header';
import { Raleway, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import { UserContext } from '@/context/UserContext';
import { applyScheme, getSavedScheme } from '@/utils/colorScheme';
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

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [userScheme, setUserScheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const getScheme = getSavedScheme();
    if (getScheme !== null) setUserScheme(JSON.parse(getScheme));
  }, []);

  useEffect(() => {
    applyScheme(userScheme);
  }, [userScheme]);

  return (
    <UserContext.Provider
      value={{ userScheme: userScheme, setUserScheme: setUserScheme }}>
      <html
        lang="ru"
        className={`${raleway.variable} ${ibmPlexSans.variable} ${jetBrainsMono.variable}`}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </UserContext.Provider>
  );
}
