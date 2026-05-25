import type { ReactNode } from 'react';
import styles from './Chip.module.css';

export interface ChipProps {
  children: ReactNode;
  onClick?: () => void;
}

/** Кликабельный чип — подсказки артистов (suggestions) в Vanga/SIMMY. */
export function Chip({ children, onClick }: ChipProps) {
  return (
    <span className={styles.chip} onClick={onClick} role="button" tabIndex={0}>
      {children}
    </span>
  );
}
