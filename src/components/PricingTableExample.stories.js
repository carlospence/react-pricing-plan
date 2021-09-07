import React from 'react';

import PricingTableExample from './PricingTableExample';

export default {
  title: 'Example/PricingTableExample',
  component: PricingTableExample,
  argTypes: {
  },
};

const Template = (args) => <PricingTableExample  {...args} />;

export const Default = Template.bind({});
Default.args = {
//   label: 'My Pricing Table',
};