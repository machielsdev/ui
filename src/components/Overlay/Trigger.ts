import Proptypes from 'prop-types';

export enum Trigger {
    CLICK = 'click',
    HOVER = 'hover'
}

export const triggerPropTypes = Proptypes.oneOf(['click', 'hover'])
