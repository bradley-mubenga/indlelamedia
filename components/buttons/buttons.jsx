import React from 'react';
import { useRouter } from 'next/router';

export function BlueButton({text, route}) {
    return (
        <button id="BlueButton" href={route} className="m-3">{text}</button>
    )
}

export function GreenButton({text, route}) {
    return (
        <button id="GreenButton" href={route} className="m-3">{text}</button>
    )
}
