import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/** Основная кнопка YAA. primary — заливка сигнатурным зелёным, ghost — translucent-обводка. */
export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[variant]} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}
