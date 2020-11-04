import * as React from 'react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Variant } from '@/components';
import PropTypes from 'prop-types';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    actions?: React.ReactNode;
    label?: React.ReactNode;
    type?: string;
    valid?: boolean;
    variant?: Variant | string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
    {
        actions,
        label,
        onChange,
        type = 'text',
        variant = Variant.PRIMARY,
        valid,
        value: propValue,
        ...rest
    },
    ref
): React.ReactElement => {
    const [value, setValue] = useState('');
    const [hasFocus, setHasFocus] = useState(false);

    useEffect(() => {
        if (propValue) {
            setValue(propValue.toString());
        }
    }, [propValue]);

    return (
        <div
            className={clsx(
                'form-field-base',
                `form-field-${variant}`,
                hasFocus && 'focused',
                value && 'has-value',
                label && 'floating-label',
                valid === true ? 'form-field-valid' : valid === false ? 'form-field-invalid' : null
            )}
        >
            {label && (
                <label
                    className={clsx(
                        'form-field-label-floating'
                    )}
                >
                    {label}
                </label>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                className={clsx(
                    'form-field'
                )}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                    if (onChange) {
                        onChange(event);
                    }
                }}
                {...rest}
            />
            {actions && (
                <div className="form-field-actions">
                    {actions}
                </div>
            )}
        </div>
    );
});

TextField.displayName = 'TextField';
TextField.propTypes = {
    actions: PropTypes.node,
    label: PropTypes.node,
    type: PropTypes.oneOf(['password', 'text', 'reset']),
    onChange: PropTypes.func,
    valid: PropTypes.bool,
    value: PropTypes.string,
    variant: PropTypes.string
}

export default TextField;
