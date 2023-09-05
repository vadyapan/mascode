import styles from './page.module.css';
import { Button, TypingInfo } from '@/components';
import Link from 'next/link';
import { listParts } from '@/data/listParts';
import Image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.info}>
            <TypingInfo />
            <Link href={'/tasks/part'}>
              <Button apperance="present">Начать</Button>
            </Link>
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
