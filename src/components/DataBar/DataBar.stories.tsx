import type { Meta, StoryObj } from '@storybook/react';
import { DataBar } from './DataBar';

const meta: Meta<typeof DataBar> = {
  title: 'Данные/DataBar',
  component: DataBar,
};
export default meta;
type Story = StoryObj<typeof DataBar>;

export const Peers: Story = {
  render: () => (
    <div>
      <DataBar label="каспийский груз" fill={1} value="33 000" />
      <DataBar label="guf" fill={0.42} value="3 250" />
      <DataBar label="l'one" fill={0.18} value="950" />
    </div>
  ),
};
