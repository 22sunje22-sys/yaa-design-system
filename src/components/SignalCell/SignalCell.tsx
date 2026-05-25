import styles from './SignalCell.module.css';

export interface SignalCellProps {
  label: string;
  value: string;
}

/** Ячейка сигнала артиста (YM listeners, Last.fm, VK, Wordstat). Кладётся в grid. */
export function SignalCell({ label, value }: SignalCellProps) {
  return (
    <div className={styles.cell}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
