import React, { CSSProperties, ReactNode, useImperativeHandle, useState } from "react";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import cs from 'classnames';
import lunisolar from "lunisolar";
import './index.scss'
import MonthCalendar from "./MonthCalendar";
import Header from "./Header";
import { useControllableValue } from "ahooks";
import LocaleContext from "./LocaleContext";

export interface CalendarProps {
    value: Dayjs;
    style?: CSSProperties;
    curMonth: Dayjs;
    className?: string | string[];
    dateRender?: (currentDate: Dayjs) => ReactNode;
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
    locale?: string;//国际化
    onChange?: (date: Dayjs) => void;
    isLunar?: boolean;
    isFortune?: boolean;//是否显示运势
}

export interface CalendarRef {
    getDate: () => Date,
    setDate: (date: Date) => void
}

export default function Calendar(props: CalendarProps) {
    const { value, style, className, locale, onChange, isLunar, isFortune } = props;
    const [curValue, setCurValue] = useState<Dayjs>(value);
    const [curMonth, setCurMonth] = useState<Dayjs>(value);

    const classNames = cs("calendar", className);

    function changeDate(date: Dayjs) {
        setCurValue(date);
        setCurMonth(date);
        onChange?.(date);
    }


    function selectHandler(date: Dayjs) {
        changeDate(date);
    }

    function preMonthHandler() {
        setCurMonth(curMonth.subtract(1, 'month'))
    }

    function nextMonthHandler() {
        setCurMonth(curMonth.add(1, 'month'))
    }

    function todayHandler() {
        const date = dayjs(Date.now());
        changeDate(date);
    }

    function getLunar(value: Date) {
        if (lunisolar(value).solarTerm) {
            return lunisolar(value).solarTerm?.toString();
        } else {
            return lunisolar(value).format('lD') === '初一' ? lunisolar(value).format('lM(lL)') : lunisolar(value).format('lD')
        }
    }

    function dateInnerContent(value: Dayjs) {
        if (isLunar) {
            return <div>
                <p style={{ background: 'transparent', height: '300px' }}>
                    {
                        getLunar(value as unknown as Date)
                    }
                </p>
            </div>
        } else {
            return;
        }

    }

    return (
        <LocaleContext.Provider value={{
            locale: locale || navigator.language
        }}>
            <div className={classNames} style={style}>
                <Header
                    value={dayjs(curValue).toDate()}
                    curMonth={curMonth}
                    prevMonthHandler={preMonthHandler}
                    nextMonthHandler={nextMonthHandler}
                    todayHandler={todayHandler}
                    isLunar={isLunar as boolean}
                    isFortune={isFortune as boolean}
                />
                <MonthCalendar dateInnerContent={dateInnerContent} value={curValue} curMonth={curMonth} selectHandler={selectHandler} />
            </div>
        </LocaleContext.Provider>
    )
}