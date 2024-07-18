import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from "./Calendar";

export default {
    title: '通用/Calendar 日历',
    component: Calendar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args: any) => <Calendar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    value: new Date(),
}