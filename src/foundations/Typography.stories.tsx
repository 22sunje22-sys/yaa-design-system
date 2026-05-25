import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Основа/Типографика' };
export default meta;
type Story = StoryObj;

const SCALE: [string, string, number, number][] = [
  ['64 / 800', 'Hero number', 64, 800],
  ['32 / 700', 'Page title (h1)', 32, 700],
  ['24 / 700', 'Section title', 24, 700],
  ['18 / 600', 'Signal value', 18, 600],
  ['16 / 400', 'Input / body-lg', 16, 400],
  ['15 / 700', 'Button', 15, 700],
  ['14 / 500', 'Body', 14, 500],
  ['13 / 500', 'Small / nav', 13, 500],
  ['12 / 500', 'Detail', 12, 500],
  ['11 / 600', 'Uppercase label', 11, 600],
];

export const Шкала: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--yaa-font)', color: 'var(--yaa-text)' }}>
      <div style={{ display: 'flex', gap: 36, marginBottom: 28, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>Space Grotesk</div>
          <div style={{ color: 'var(--yaa-muted)', fontSize: 12, marginTop: 4 }}>основной · 400 500 600 700</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--yaa-font-retro)', fontSize: 16, color: 'var(--yaa-green)' }}>PRESS START 2P</div>
          <div style={{ color: 'var(--yaa-muted)', fontSize: 12, marginTop: 10 }}>retro-акцент · eyebrows</div>
        </div>
      </div>
      {SCALE.map(([spec, sample, size, weight]) => (
        <div key={spec} style={{ display: 'flex', alignItems: 'baseline', gap: 18, padding: '12px 0', borderBottom: '1px solid rgba(29,255,158,0.06)' }}>
          <div style={{ width: 150, flexShrink: 0, color: 'var(--yaa-muted)', fontSize: 11, fontFamily: 'monospace' }}>{spec}px</div>
          <div style={{ fontSize: Math.min(size, 40), fontWeight: weight, whiteSpace: 'nowrap' }}>{sample}</div>
        </div>
      ))}
      <p style={{ color: 'var(--yaa-muted)', fontSize: 13, marginTop: 20 }}>
        Крупные числа и заголовки — градиентный clip-text (<code>linear-gradient(120deg, #1dff9e, #4dffd1)</code>).
      </p>
    </div>
  ),
};
