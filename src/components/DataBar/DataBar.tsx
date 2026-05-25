import styles from './DataBar.module.css';

export interface DataBarProps {
  label: string;
  /** доля заполнения 0..1 */
  fill: number;
  value: string;
}

/** Строка с горизонтальным баром — жанровые соседи в Vanga, рейтинги. */
export function DataBar({ label, fill, value }: DataBarProps) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.wrap}>
        <div className={styles.bar} style={{ width: `${Math.max(0, Math.min(1, fill)) * 100}%` }} />
      </div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
