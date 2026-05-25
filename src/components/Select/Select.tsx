import type { SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

/** Селект YAA — та же translucent-эстетика, что и TextInput. */
export function Select({ options, className, ...rest }: SelectProps) {
  return (
    <select className={`${styles.select} ${className ?? ''}`} {...rest}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
