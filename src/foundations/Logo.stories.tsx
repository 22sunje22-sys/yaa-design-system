import type { Meta, StoryObj } from '@storybook/react';
import mark from '../assets/yaa-logo-mark.webp';
import banner from '../assets/yaa-logo-banner.webp';

const meta: Meta = { title: 'Основа/Логотип' };
export default meta;
type Story = StoryObj;

const label = {
  fontSize: 11, textTransform: 'uppercase', letterSpacing: 1.5,
  color: 'var(--yaa-muted)', fontWeight: 600, marginBottom: 10,
} as const;

/** Логотип YAA — граффити-вензель в чёрном круге на кислотно-зелёном. */
export const Логотип: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--yaa-font)', color: 'var(--yaa-text)', maxWidth: 760 }}>
      <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
          <div style={label}>Знак (mark) · 1:1</div>
          <img src={mark} alt="YAA logo mark" width={160} height={160}
            style={{ borderRadius: 'var(--yaa-r-lg)', display: 'block' }} />
        </div>
        <div>
          <div style={label}>Баннер · 16:9-ish</div>
          <img src={banner} alt="YAA logo banner" width={360}
            style={{ borderRadius: 'var(--yaa-r-lg)', display: 'block' }} />
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <div style={label}>На тёмном фоне (как в продукте)</div>
        <div style={{
          background: 'var(--yaa-bg)', padding: 32, borderRadius: 'var(--yaa-r-lg)',
          border: '1px solid var(--yaa-bd-soft)', display: 'inline-block',
        }}>
          <img src={mark} alt="YAA logo on dark" width={96} height={96} style={{ display: 'block' }} />
        </div>
      </div>

      <p style={{ color: 'var(--yaa-muted)', fontSize: 13, lineHeight: 1.6, marginTop: 22 }}>
        Граффити-вензель «YAA» в чёрном круге. Фон знака — кислотный зелёный бренда
        (<code>--yaa-brand-green</code>). Баннерная версия добавляет psychedelic-волны.
        Не растягивать, не перекрашивать вензель, сохранять чёрный круг как контейнер.
      </p>
    </div>
  ),
};
