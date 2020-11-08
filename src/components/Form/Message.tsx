import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

interface FormMessageProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    valid?: boolean;
}

const FormMessage = React.forwardRef<HTMLDivElement, FormMessageProps>((
    {
        children,
        className,
        valid
    },
    ref
): React.ReactElement => (
    <div
        ref={ref}
        className={clsx(
            'form-message',
            valid === true ? 'form-message-valid' : valid === false ? 'form-message-invalid' : null,
            className
        )}
    >
        {children}
    </div>
));

FormMessage.displayName = 'FormMessage';
FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    valid: PropTypes.bool
}

export default FormMessage;
