import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Основа/Палитра' };
export default meta;
type Story = StoryObj;

const CORE: [string, string, string][] = [
  ['--yaa-bg', '#040706', 'фон приложения'],
  ['--yaa-bg-graph', '#050a08', 'фон графа'],
  ['--yaa-green', '#1dff9e', 'PRIMARY / сигнатурный'],
  ['--yaa-green-hi', '#38ffaa', 'hover'],
  ['--yaa-green-2', '#4dffd1', 'gradient'],
  ['--yaa-green-3', '#6affd1', 'gradient'],
  ['--yaa-green-dk', '#2db86e', 'chrome графа'],
  ['--yaa-ink', '#04140b', 'текст на зелёном'],
  ['--yaa-text', '#f4fff8', 'текст 1°'],
  ['--yaa-text-2', '#c4e8d6', 'текст 2° / body'],
  ['--yaa-muted', '#7da590', 'muted / лейблы'],
  ['--yaa-amber', '#ffd166', 'warning'],
  ['--yaa-orange', '#ff9871', 'error'],
];

const ACCENTS: [string, string, string][] = [
  ['ХАБ', '#ff6b9d', '🫀'],
  ['ВАНГА', '#1dff9e', '🔮'],
  ['SIMMY', '#39d0d8', '🪞'],
  ['ГРАФ', '#a78bfa', '🕸'],
  ['КАРТА', '#fbbf24', '🗺'],
];

const TIERS: [string, string][] = [
  ['#ff6b6b', 'звёзды ≥ 5M'],
  ['#ffa94d', 'крупные 1M–5M'],
  ['#ffd93d', 'средние 200K–1M'],
  ['#6bcf7f', 'клубные 50K–200K'],
  ['#4dabf7', 'микро < 50K'],
];

const wrap = { fontFamily: 'var(--yaa-font)', color: 'var(--yaa-text)' } as const;
const h = { fontSize: 18, fontWeight: 700, margin: '24px 0 12px' } as const;

export const Палитра: Story = {
  render: () => (
    <div style={wrap}>
      <h3 style={{ ...h, marginTop: 0 }}>Основная палитра</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 12 }}>
        {CORE.map(([v, hex, desc]) => (
          <div key={v} style={{ border: '1px solid var(--yaa-bd-soft)', borderRadius: 12, overflow: 'hidden', background: 'var(--yaa-surf-sub)' }}>
            <div style={{ height: 64, background: hex }} />
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--yaa-green)' }}>{v}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--yaa-muted)' }}>{hex}</div>
              <div style={{ fontSize: 11, color: 'var(--yaa-muted)', marginTop: 2 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 style={h}>Акцентные цвета продуктов</h3>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {ACCENTS.map(([name, hex, icon]) => (
          <div key={name} style={{ borderRadius: 12, padding: '16px 18px', border: `1px solid ${hex}44`, background: 'var(--yaa-surf-sub)', minWidth: 120 }}>
            <div style={{ fontSize: 22 }}>{icon}</div>
            <div style={{ fontWeight: 700, marginTop: 6, color: hex }}>{name}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: hex, opacity: 0.8 }}>{hex}</div>
          </div>
        ))}
      </div>

      <h3 style={h}>Размер артиста в графе (по слушателям Я.Музыки)</h3>
      <div>
        {TIERS.map(([hex, desc]) => (
          <div key={hex} style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '6px 0' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: hex }} />
            <span style={{ fontSize: 13, color: 'var(--yaa-text-2)' }}>{desc}</span>
            <code style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: 12, color: 'var(--yaa-muted)' }}>{hex}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};
