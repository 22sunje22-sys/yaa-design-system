import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Данные/Chip',
  component: Chip,
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Suggestions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {['macan', 'земфира', 'баста', 'ic3peak', 'каспийский груз'].map((a) => (
        <Chip key={a}>{a}</Chip>
      ))}
    </div>
  ),
};
