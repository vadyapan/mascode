import { Metadata } from 'next';
import Image from 'next/image';
import { MainInfo } from '@/components';
import { listParts } from '@/data/listParts';
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
              <div key={card.id} className={styles.card}>
                <Image
                  src={'/book-icon.svg'}
                  width={53.33}
                  height={66.67}
                  alt={'Иконка книги'}
                />
                <div className={styles.part}>
                  <span className={styles.title}>{card.title}</span>
                  <span className={styles.desc}>{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
