import React from "react";

export interface CalendarProps {
    value: Date
}

export const Calendar = (props: CalendarProps) => {
    return (
        <div>
            {props.value.toUTCString()}
        </div>
    )
}