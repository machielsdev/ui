import React from 'react';
import PropTypes from 'prop-types';
import { FieldBase, FieldBaseProps, propTypes as basePropTypes } from '../Field';
import TextFieldInput from './TextFieldInput';

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
    ...basePropTypes,
    type: PropTypes.oneOf(['password', 'text', 'reset'])
}

TextField.displayName = 'TextField';
TextField.propTypes = propTypes;

export default TextField;
