import { Meta, StoryObj } from '@storybook/react';
import ListItem from './listItem';
const meta: Meta<typeof ListItem> = {
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Primary: Story = {
  // args: {
  //   sampleTextProp: 'Sample text',
  // } as IListItem,
};
