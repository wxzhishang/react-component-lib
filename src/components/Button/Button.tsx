import React from "react";

export interface ButtonProps {
    label: string
}

export const Button = (props: ButtonProps) => {
    return (
        <button>{props.label}</button>
    )
}