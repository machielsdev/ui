import * as React from 'react';
import { SelectFieldProps } from '@/components/SelectField/SelectField';
import { Children, isValidElement, ReactNode, useContext, useEffect, useState } from 'react';
import { FieldContext, FieldContextProps } from '@/components/Field/FieldContext';
import clsx from 'clsx';
import { propTypes } from '@/components/TextField/TextField';

const determineInitialValue = (children: React.ReactNode): string => {
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
        if (!inputValue) {
            const initialValue = value || defaultValue || determineInitialValue(children);
            console.log(initialValue);
            fieldContext.changeValue(!!initialValue);
            setInputValue(initialValue.toString());
        }
    }, [value, defaultValue]);

    return (
        <FieldContext.Consumer>
            {({ changeValue, changeFocus, stateIcon }) => (
                <div className="form-field-container toggles">
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
                </div>
            )}
        </FieldContext.Consumer>
    );
});

SelectFieldInput.displayName = 'SelectFieldInput';
SelectFieldInput.propTypes = propTypes;

export default SelectFieldInput;
