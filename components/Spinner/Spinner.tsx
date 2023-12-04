import { FC } from 'react';
import styles from './Spinner.module.css';
import cn from 'classnames';

export const Spinner: FC = () => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="#f05124"
      xmlns="http://www.w3.org/2000/svg">
      <circle className={styles.spinner_nOfF} cx="4" cy="12" r="3" />
      <circle
        className={cn(styles.spinner_nOfF, styles.spinner_fVhf)}
        cx="4"
        cy="12"
        r="3"
      />
      <circle
        className={cn(styles.spinner_nOfF, styles.spinner_piVe)}
        cx="4"
        cy="12"
        r="3"
      />
      <circle
        className={cn(styles.spinner_nOfF, styles.spinner_MSNs)}
        cx="4"
        cy="12"
        r="3"
      />
    </svg>
  );
};
