import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function BlueButton({text, route}) {
    return (
        <Link href={route}>{text}</Link>
    )
}

export function GreenButton({text, route}) {
    return (
        <Link href={route}>{text}</Link>
    )
}
