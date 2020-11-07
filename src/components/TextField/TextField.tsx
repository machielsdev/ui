import React from 'react';
import PropTypes from 'prop-types';
import FieldBase from '@/components/Field/FieldBase';
import FieldBaseProps from '@/components/Field/FieldBase';
import TextFieldInput from '@/components/TextField/TextFieldInput';

export type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & FieldBaseProps;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
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
    >
        <TextFieldInput ref={ref} {...rest} />
    </FieldBase>
));

export const propTypes = {
    ...FieldBase.propTypes,
    type: PropTypes.oneOf(['password', 'text', 'reset']),
    onChange: PropTypes.func
}

TextField.displayName = 'TextField';
TextField.propTypes = propTypes;

export default TextField;
