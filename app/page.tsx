import { Metadata } from 'next';
import { listParts } from '@/data/listParts';
import { MainInfo } from '@/components/MainInfo/MainInfo';
import { PartCard } from '@/components/PartCard/PartCard';
import styles from './page.module.css';

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
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
            <MainInfo />
          </div>
          <div className={styles.cards}>
            {listParts.map((card) => (
              <PartCard key={card.id} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
