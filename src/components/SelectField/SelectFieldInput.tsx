import * as React from 'react';
import { Children, isValidElement, ReactNode, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { SelectFieldProps } from './SelectField';
import { FieldContainer, FieldContext, FieldContextProps, propTypes } from '../Field';

const determineInitialValue = (children: ReactNode): string => {
    let value = '';
    Children.forEach<ReactNode>(children, (child: ReactNode) => {
        if (
            isValidElement(child)
            && child.type === 'option'
            && (!value || child.props.selected)
        ) {
            value = child.props.value || 'initial';
        }
    });

    return value;
}

const SelectFieldInput = React.forwardRef<HTMLSelectElement, SelectFieldProps>((
    {
        children,
        defaultValue,
        value,
        onChange,
        ...rest
    },
    ref
): React.ReactElement => {
    const fieldContext = useContext<FieldContextProps>(FieldContext);
    const [inputValue, setInputValue] = useState<string | ReadonlyArray<string> | number>('');

    useEffect(() => {
        const initialValue = value || defaultValue || determineInitialValue(children);
        fieldContext.changeValue(!!initialValue);
        setInputValue(initialValue.toString());
    }, [value, defaultValue]);

    return (
        <FieldContext.Consumer>
            {({ changeValue, changeFocus, stateIcon }) => (
                <FieldContainer toggles>
                    <select
                        ref={ref}
                        value={inputValue}
                        onFocus={() => changeFocus(true)}
                        onBlur={() => changeFocus(false)}
                        className={clsx(
                            'form-field form-field-select'
                        )}
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            if (onChange) {
                                onChange(event);
                            }
                            setInputValue(event.target.value);
                            changeValue(!!event.target.value);
                        }}
                        {...rest}
                    >
                        {children}
                    </select>
                    {stateIcon}
                </FieldContainer>
            )}
        </FieldContext.Consumer>
    );
});

SelectFieldInput.displayName = 'SelectFieldInput';
SelectFieldInput.propTypes = propTypes;

export default SelectFieldInput;
