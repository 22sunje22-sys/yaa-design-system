import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Основа/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Собственная история',
    children: <div style={{ color: '#c4e8d6', fontSize: 14 }}>9 концертов · медиана 4 500 мест</div>,
  },
};
