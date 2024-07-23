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

function getLunar(value: Date) {
    if (lunisolar(value).solarTerm) {
        return lunisolar(value).solarTerm?.toString();
    } else {
        return lunisolar(value).format('lD') === '初一' ? lunisolar(value).format('lM(lL)') : lunisolar(value).format('lD')
    }
}

Primary.args = {
    value: dayjs(),
    // locale: 'en-US',
    dateInnerContent: (value: Date) => {
        return <div>
            <p style={{ background: 'transparent', height: '300px' }}>
                {
                    getLunar(value)
                }
            </p>
        </div>
    }
}

