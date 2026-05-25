import type { InputHTMLAttributes } from 'react';
import styles from './TextInput.module.css';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

/** Поле ввода YAA. На focus — зелёная рамка + лёгкое свечение фона. */
export function TextInput({ className, ...rest }: TextInputProps) {
  return <input className={`${styles.input} ${className ?? ''}`} {...rest} />;
}
