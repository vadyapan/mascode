import { H, P } from '@/components';
import { listFaq } from '@/data/listFaq';
import styles from './page.module.css';

export default function Faq(): JSX.Element {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <H tag="h5" className={styles.title}>
              Часто задаваемые вопросы
            </H>
          </div>
          <div className={styles.questions}>
            {listFaq.map((item) => (
              <div key={item.id} className={styles.question}>
                <span className={styles.questionTitle}>{item.question}</span>
                <P className={styles.answer}>{item.answer}</P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
