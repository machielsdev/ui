import * as React from 'react';
import { FieldContext, FieldContextProps } from '@/components/Field/FieldContext';
import { propTypes, TextFieldProps } from './TextField';
import { useContext, useEffect, useState } from 'react';
import FieldContainer from '@/components/Field/FieldContainer';

const TextFieldInput = React.forwardRef<HTMLInputElement, TextFieldProps>((
    {
        type,
        value,
        onChange,
        ...rest
    },
    ref
): React.ReactElement => {
    const fieldContext = useContext<FieldContextProps>(FieldContext);
    const [inputValue, setInputValue] = useState<string | ReadonlyArray<string> | number>('');

    useEffect(() => {
        setInputValue(value || '');
        fieldContext.changeValue(!!value);
    }, [value]);
    return (
        <FieldContext.Consumer>
            {({ changeValue, changeFocus, stateIcon }) => (
                <FieldContainer>
                    <input
                        ref={ref}
                        type={type}
                        value={inputValue}
                        onFocus={() => changeFocus(true)}
                        onBlur={() => changeFocus(false)}
                        className="form-field"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            if (onChange) {
                                onChange(event);
                            }
                            setInputValue(event.target.value);
                            changeValue(!!event.target.value);
                        }}
                        {...rest}
                    />
                    {stateIcon}
                </FieldContainer>
            )}
        </FieldContext.Consumer>
    )
});

TextFieldInput.displayName = 'TextFieldInput';
TextFieldInput.propTypes = propTypes;

export default TextFieldInput;
