import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useStepperClassNames, useStepper } from './hooks';
import { useTheme } from '../../styling';
import { StepperPropsType } from './type';
import { STEPPER_CLASS_PREFIX, stepperRoot } from './constants';
import { StepperContext } from './StepperContext';
import { StepperRoot } from './style';

/**
 * @armor-docs-component
 */
export const Stepper = forwardRef<HTMLDivElement, StepperPropsType>(
    function Stepper({ className, ...restProps }, ref) {
        const theme = useTheme().armor;
        const { contextValue, rootProps } = useStepper(restProps, ref);
        const classNameRoot = useStepperClassNames(
            STEPPER_CLASS_PREFIX,
            className,
            restProps.vertical,
            restProps.minimal,
        );

        return (
            <StepperContext.Provider value={contextValue}>
                <StepperRoot
                    data-testid={stepperRoot}
                    {...rootProps}
                    theme={theme}
                    className={classNameRoot}
                />
            </StepperContext.Provider>
        );
    },
);

Stepper.propTypes = {
    vertical: PropTypes.bool,
    minimal: PropTypes.bool,
    activeIndex: PropTypes.number,
    onActiveIndexChange: PropTypes.func,
    className: PropTypes.string,
};

Stepper.defaultProps = {
    vertical: false,
    minimal: false,
    activeIndex: 0,
};
