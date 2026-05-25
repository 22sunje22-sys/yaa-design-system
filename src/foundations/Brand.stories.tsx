import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Основа/Бренд' };
export default meta;
type Story = StoryObj;

/** Фирменный стиль ya.agency — родительский бренд booking-инструментов. */
export const Бренд: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--yaa-font)', color: 'var(--yaa-text)', maxWidth: 720 }}>
      <div
        style={{
          background: 'var(--yaa-brand-black)',
          border: '1px solid var(--yaa-bd-soft)',
          borderRadius: 'var(--yaa-r-lg)',
          padding: '40px 32px',
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 13, letterSpacing: 2, color: 'var(--yaa-muted)', textTransform: 'uppercase' }}>
          ya.agency
        </div>
        <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.05, marginTop: 8 }}>
          <span style={{ color: 'var(--yaa-brand-green)' }}>двигаем</span> ивенты
        </div>
        <div style={{ fontSize: 15, color: 'var(--yaa-text-2)', marginTop: 12 }}>
          Не агентство. Партнёр по продажам билетов.
        </div>
        <button
          style={{
            marginTop: 20, background: 'var(--yaa-yellow)', color: '#000', border: 'none',
            borderRadius: 'var(--yaa-r-md)', padding: '12px 24px', fontWeight: 700,
            fontSize: 14, cursor: 'pointer', fontFamily: 'var(--yaa-font)',
          }}
        >
          Обсудить проект →
        </button>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 12px' }}>Бренд-палитра</h3>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {[
          ['#000000', '--yaa-brand-black'],
          ['#161616', '--yaa-brand-ink'],
          ['#10ed92', '--yaa-brand-green'],
          ['#36ec95', '--yaa-brand-green2'],
          ['#fff600', '--yaa-yellow'],
        ].map(([hex, v]) => (
          <div key={v} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--yaa-bd-soft)', width: 150 }}>
            <div style={{ height: 56, background: hex }} />
            <div style={{ padding: '8px 10px', background: 'var(--yaa-surf-sub)' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--yaa-muted)' }}>{hex}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 10, color: 'var(--yaa-green)' }}>{v}</div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--yaa-muted)', fontSize: 13, lineHeight: 1.6, marginTop: 20 }}>
        Бренд агентства — чёрный фон + кислотный зелёный + жёлтый акцент. Продуктовые инструменты
        (Vanga, SIMMY, Graph, Map) используют чуть более «софт» зелёный <code>--yaa-green #1dff9e</code> на
        тёмно-зелёном фоне. Жёлтый <code>#fff600</code> — только для редких CTA-хайлайтов, не для интерфейса.
      </p>
    </div>
  ),
};
