import { H } from '@/components/UI/H/H';
import { listFaq } from '@/data/listFaq';
import { FC } from 'react';
import styles from './page.module.css';

const Faq: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <H tag="h4" className={styles.title}>
              Часто задаваемые вопросы
            </H>
          </div>
          <div className={styles.questions}>
            {listFaq.map((item) => (
              <div key={item.id} className={styles.question}>
                <span className={styles.questionTitle}>{item.question}</span>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
