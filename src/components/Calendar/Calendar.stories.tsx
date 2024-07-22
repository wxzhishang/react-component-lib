import React, { forwardRef, useRef } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
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

Primary.args = {
    value: dayjs('2024-07-22'),
    locale: 'en-US',
    dateInnerContent: (value: Dayjs) => {
        return <div>
            <p style={{ background: 'transparent', height: '300px', color: 'yellowgreen' }}>{value.format('YYYY/MM/DD')}</p>
        </div>
    }
}

