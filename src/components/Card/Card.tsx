import type { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  children: ReactNode;
}

/** Базовая карточка — translucent тёмно-зелёный + blur. Несущий контейнер интерфейса. */
export function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  );
}
