import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Обратная связь/Callout',
  component: Callout,
};
export default meta;
type Story = StoryObj<typeof Callout>;

export const Warning: Story = {
  args: { tone: 'warning', children: '⚠ Нет ни собственной истории, ни похожих — это самая слабая оценка.' },
};
export const Error: Story = {
  args: { tone: 'error', children: 'Артист «qzqzqz» не найден. Попробуй другое написание.' },
};
