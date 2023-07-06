import { Meta, StoryFn } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockBaseTemplateProps } from './CatCard.mocks';

export default {
  title: 'templates/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof CatCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CatCard> = (args) => <CatCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as ICatCard;
