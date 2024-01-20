import { FC } from 'react';
import Image from 'next/image';
import { PartCardProps } from '@/components/PartCard/PartCard.props';
import styles from './PartCard.module.css';

export const PartCard: FC<PartCardProps> = ({ title, desc }) => {
  return (
    <>
      <div className={styles.card}>
        <Image
          src={'/book-icon.svg'}
          width={53.33}
          height={66.67}
          alt={'Иконка книги'}
        />
        <div className={styles.part}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
    </>
  );
};
