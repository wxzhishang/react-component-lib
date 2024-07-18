import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
    title: '通用/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;



export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
    label: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Button 2',
};
