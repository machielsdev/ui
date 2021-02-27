import * as React from 'react';
import { FieldBase, FieldBaseProps, propTypes as basePropTypes } from '../Field';
import SelectFieldInput from './SelectFieldInput';

export type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & FieldBaseProps;

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>((
    {
        actions,
        label,
        valid,
        variant,
        ...rest
    },
    ref
): React.ReactElement => (
    <FieldBase
        actions={actions}
        label={label}
        variant={variant}
        valid={valid}
        className="form-field-base-toggles"
    >
        <SelectFieldInput ref={ref} {...rest} />
    </FieldBase>
));

export const propTypes = basePropTypes;

SelectField.displayName = 'SelectField';
SelectField.propTypes = propTypes;

export default SelectField;
