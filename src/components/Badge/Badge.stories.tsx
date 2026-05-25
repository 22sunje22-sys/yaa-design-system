import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Данные/Badge',
  component: Badge,
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Tier: Story = { args: { children: 'P7', tone: 'green' } };

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <Badge tone="green">P7</Badge>
      <Badge tone="amber">beta</Badge>
      <Badge tone="orange">cold-start</Badge>
    </div>
  ),
};
