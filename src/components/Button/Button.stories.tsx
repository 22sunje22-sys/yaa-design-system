import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Действия/Button',
  component: Button,
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'ghost'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary', children: 'Предсказать' } };
export const Ghost: Story = { args: { variant: 'ghost', children: '🔍 Углублённый поиск' } };
export const Disabled: Story = { args: { variant: 'primary', children: 'Считаю…', disabled: true } };

export const Все: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
      <Button variant="primary">Предсказать</Button>
      <Button variant="ghost">🔍 Углублённый поиск</Button>
      <Button variant="primary" disabled>Считаю…</Button>
    </div>
  ),
};
