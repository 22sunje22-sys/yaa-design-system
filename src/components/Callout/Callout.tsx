import type { ReactNode } from 'react';
import styles from './Callout.module.css';

export type CalloutTone = 'warning' | 'error';

export interface CalloutProps {
  tone?: CalloutTone;
  children: ReactNode;
}

/** Информационный/предупреждающий блок. warning — янтарный, error — оранжевый. */
export function Callout({ tone = 'warning', children }: CalloutProps) {
  return <div className={`${styles.callout} ${styles[tone]}`}>{children}</div>;
}
