import React from 'react';

export interface FieldContextProps {
    changeFocus: (focus: boolean) => void;
    changeValue: (value: boolean) => void;
    stateIcon: React.ReactElement | undefined
}

export const FieldContext = React.createContext<FieldContextProps>({
    changeFocus: () => undefined,
    changeValue: () => undefined,
    stateIcon: undefined
});
