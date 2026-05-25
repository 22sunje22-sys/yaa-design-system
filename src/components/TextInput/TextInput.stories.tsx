import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Формы/TextInput',
  component: TextInput,
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = { args: { placeholder: 'Имя артиста (напр. баста)' } };
export const Filled: Story = { args: { defaultValue: 'macan' } };
