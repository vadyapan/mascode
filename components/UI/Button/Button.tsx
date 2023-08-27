import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({
  apperance,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.present]: apperance == 'present',
        [styles.success]: apperance == 'success',
        [styles.primary]: apperance == 'primary',
        [styles.ghost]: apperance == 'ghost',
      })}
      {...props}>
      {children}
    </button>
  );
};
