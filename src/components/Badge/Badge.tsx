import type { ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeTone = 'green' | 'amber' | 'orange';

export interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
}

/** Бейдж/пилюля. Используется для tier-меток (P1–P7) и статусов. */
export function Badge({ children, tone = 'green' }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
