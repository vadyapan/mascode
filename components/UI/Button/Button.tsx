import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  appearance,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.present]: appearance == 'present',
        [styles.success]: appearance == 'success',
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}>
      {children}
    </button>
  );
};
