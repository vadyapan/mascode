import { Metadata } from 'next';
import styles from './page.module.css';
import { Button, H, P } from '@/components';
import Link from 'next/link';
import { listParts } from '@/data/listParts';
import Image from 'next/image';

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
            <H tag="h2">Получи практику программирования на JavaScript</H>
            <div className={styles.line}></div>
            <P>
              Изучение теории это лишь 10% обучения. Все остальное — практика.
              Прокачивай навыки решая задачи.
            </P>
            <P>
              Чтобы овладеть JavaScript на уровне junior/junior+, нужно
              самостоятельно решить около 100-150 задач.
            </P>
            <Link href={'/tasks/part'}>
              <Button apperance="present">Начать</Button>
            </Link>
          </div>
          <div className={styles.cards}>
            {listParts.map((card) => (
              <div key={card.id} className={styles.card}>
                <Image
                  src={'../../book-icon.svg'}
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
