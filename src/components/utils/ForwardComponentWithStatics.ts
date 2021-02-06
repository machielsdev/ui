import React from 'react';

export type StaticsMap = Record<string, React.ReactNode>;

export type ForwardComponentWithStatics<T, P, U extends StaticsMap> =
    React.ForwardRefExoticComponent<React.PropsWithoutRef<P>
    & React.RefAttributes<T>>
    & U;
