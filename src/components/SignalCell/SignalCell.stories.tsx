import type { Meta, StoryObj } from '@storybook/react';
import { SignalCell } from './SignalCell';

const meta: Meta<typeof SignalCell> = {
  title: 'Данные/SignalCell',
  component: SignalCell,
};
export default meta;
type Story = StoryObj<typeof SignalCell>;

export const Single: Story = { args: { label: 'YM listeners', value: '14.2M' } };

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
      <SignalCell label="YM listeners" value="14.2M" />
      <SignalCell label="Last.fm" value="180K" />
      <SignalCell label="VK members" value="695K" />
      <SignalCell label="Wordstat" value="42K" />
    </div>
  ),
};
