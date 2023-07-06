import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  render: () => <Navbar />,
};
