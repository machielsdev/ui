import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon, Variant } from '@/components';
import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import { FieldContext } from './FieldContext';

interface FieldBaseProps {
    actions?: React.ReactNode;
    className?: string;
    label?: React.ReactNode;
    valid?: boolean;
    variant?: Variant | string;
    value?: string | ReadonlyArray<string> | number;
}

export const getStateIcon = (valid: boolean | undefined): ReactElement | undefined => {
    if (valid === undefined) {
        return undefined;
    }

    return (
        <div
            className={clsx(
                'field-state-icon',
            )}
        >
            <Icon
                icon={valid ? 'checkmark-circle-2' : 'close-circle'}
            />
        </div>
    );
}

const FieldBaseProps = ({
    actions,
    className,
    children,
    label,
    variant = Variant.PRIMARY,
    valid
}: React.PropsWithChildren<FieldBaseProps>,
): React.ReactElement => {
    const [hasValue, setHasValue] = useState<boolean>(false);
    const [hasFocus, setHasFocus] = useState<boolean>(false);

    return (
        <div
            className={clsx(
                'form-field-base',
                `form-field-${variant}`,
                hasFocus && 'focused',
                hasValue && 'has-value',
                label && 'floating-label',
                valid === true ? 'form-field-valid' : valid === false ? 'form-field-invalid' : null,
                className
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
            <FieldContext.Provider value={{
                changeValue: (value: boolean) => setHasValue(value),
                changeFocus: (focus: boolean) => setHasFocus(focus),
                stateIcon: getStateIcon(valid)
            }}>
                {children}
            </FieldContext.Provider>
            {actions && (
                <div className="form-field-actions">
                    {actions}
                </div>
            )}
        </div>
    );
};

export const propTypes = {
    actions: PropTypes.node,
    children: PropTypes.node,
    label: PropTypes.node,
    onChange: PropTypes.func,
    valid: PropTypes.bool,
    value: PropTypes.string,
    variant: PropTypes.string,
}

FieldBaseProps.displayName = 'FieldBase';
FieldBaseProps.propTypes = propTypes;

export default FieldBaseProps;
