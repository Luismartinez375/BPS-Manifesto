import { Meta, StoryObj } from '@storybook/react';
import ListItem, { IlistItem } from './listItem';
import { mocklistItemProps } from './listItem.mocks';
const meta: Meta<typeof ListItem> = {
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Primary: Story = {
  args: {
    ...mocklistItemProps.base,
  } as IlistItem,
  render: () => <ListItem sampleTextProp=""></ListItem>,
};
