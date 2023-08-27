import { Metadata } from 'next';
import { MainContent } from '@/layout/MainContent/MainContent';

export const metadata: Metadata = {
  title: 'Mascode | Получи практику программирования на JavaScript',
  description: 'Получи практику программирования на JavaScript',
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=1'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function Home(): JSX.Element {
  return (
    <>
      <MainContent />
    </>
  );
}
