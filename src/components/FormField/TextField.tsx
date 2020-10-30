import * as React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { Variant } from '@/components';
import PropTypes from 'prop-types';

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
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
        valid
    },
    ref
): React.ReactElement => {
    const [value, setValue] = useState('');
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <div className={clsx(
            'cui-form-field-base',
            `cui-form-field-${variant}`,
            hasFocus && 'cui-focused',
            value && 'cui-has-value',
            label && 'cui-floating-label',
            valid === true ? 'cui-form-field-valid' : valid === false ? 'cui-form-field-invalid' : null
        )}>
            {label && (
                <label
                    className={clsx(
                        'cui-form-field-label'
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
                    'cui-form-field'
                )}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                    if (onChange) {
                        onChange(event);
                    }
                }}
            />
            {actions && (
                <div className="cui-input-actions">
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
    variant: PropTypes.string
}

export default TextField;
