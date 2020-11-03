import * as React from 'react';
import { Variant } from '@/components';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface SelectFieldProps extends React.HTMLAttributes<HTMLSelectElement> {
    actions?: React.ReactNode;
    label?: React.ReactNode;
    valid?: boolean;
    variant?: Variant | string;
}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>((
    {
        actions,
        children,
        label,
        onChange,
        variant = Variant.PRIMARY,
        valid
    },
    ref
): React.ReactElement => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const [hasFocus, setHasFocus] = useState(false);

    useEffect((): void => {
        if (value === undefined) {
            React.Children.forEach<React.ReactNode>(children, (child: React.ReactNode) => {
                if (React.isValidElement(child) && child.type === 'option' && child.props.selected) {
                    setValue(child.props.value);
                }
            })
        }
    }, []);

    return (
        <div className={clsx(
            'form-field-base toggles',
            `form-field-${variant}`,
            hasFocus && 'focused',
            value && 'has-value',
            label && 'floating-label',
            valid === true ? 'form-field-valid' : valid === false ? 'form-field-invalid' : null
        )}>
            {label && (
                <label
                    className={clsx(
                        'form-field-label'
                    )}
                >
                    {label}
                </label>
            )}
            <select
                ref={ref}
                value={value}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                className={clsx(
                    'form-field'
                )}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setValue(event.target.value);
                    if (onChange) {
                        onChange(event);
                    }
                }}
            >
                {children}
            </select>
            {actions && (
                <div className="input-actions">
                    {actions}
                </div>
            )}
        </div>
    );
});

SelectField.displayName = 'SelectField';
SelectField.propTypes = {
    actions: PropTypes.node,
    children: PropTypes.node,
    label: PropTypes.node,
    onChange: PropTypes.func,
    valid: PropTypes.bool,
    variant: PropTypes.string
}

export default SelectField;
