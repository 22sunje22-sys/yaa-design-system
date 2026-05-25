import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Формы/Select',
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Cities: Story = {
  args: {
    options: [
      { value: 'moscow', label: 'Москва' },
      { value: 'spb', label: 'Санкт-Петербург' },
      { value: 'kazan', label: 'Казань' },
    ],
  },
};

export const Modes: Story = {
  args: {
    options: [
      { value: 'both', label: 'жанр + размер (рекомендуем)' },
      { value: 'graph', label: 'только жанр (LF/YM/VK консенсус)' },
      { value: 'signal', label: 'только размер аудитории' },
    ],
  },
};
