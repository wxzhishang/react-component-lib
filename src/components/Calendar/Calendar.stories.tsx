import React, { forwardRef, useRef } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import lunisolar from 'lunisolar';
import type { Dayjs } from 'dayjs';
import dayjs, { locale } from "dayjs";
import Calendar, { CalendarRef } from "./Calendar";


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
export const En = Template.bind({});
export const Lunar = Template.bind({});
export const Fortune = Template.bind({});
export const Complete = Template.bind({});



Primary.args = {
    value: dayjs(),
}

En.args = {
    value: dayjs(),
    locale: 'en-US',
}

Lunar.args = {
    value: dayjs(),
    isLunar: true
}

Fortune.args = {
    value: dayjs(),
    isFortune: true
}

Complete.args = {
    value: dayjs(),
    // locale: 'en-US',
    isLunar: true,
    isFortune: true,
}

