import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useStepperClassNames, useStepper } from './hooks';
import { StepperPropsType } from './type';
import { STEPPER_CLASS_PREFIX, stepperRoot } from './constants';
import { StepperContext } from './StepperContext';
import { StepperRoot } from './style';

/**
 * # Stepper
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/760eb3-stepper/b/66d64c)
 *
 * ## Examples
 *
 * ***
 *
 * ```
 * import { useState } from 'react';
 * import { Stepper, Step } from '@deliveryhero/armor';
 *
 * const [step, setStep] = useState(2);
 * const onSomething = (index: any) => {
 *     setStep(index);
 * };
 *
 * <Stepper
 *     marginBottom={8}
 *     onActiveIndexChange={onSomething}
 *     activeIndex={step}
 * >
 *     <Step title="Summary" description="Your order details" />
 *     <Step
 *         title="Delivery"
 *         description="Where should we deliver this?"
 *     />
 *     <Step
 *         title="Payment"
 *         description="Pay with credit card or Crypto"
 *     />
 *     <Step
 *         title="Review"
 *         description="Make sure everything in order"
 *     />
 * </Stepper>
 * <div style={{ marginLeft: 240 }}>
 *     <button onClick={() => setStep(step > 0 ? step - 1 : step)}>
 *         prev
 *     </button>
 *     <button onClick={() => setStep(step + 1)}>next</button>
 * </div>
 * ```
 * ***
 *
 * @armor-docs-component
 */
export const Stepper = forwardRef<HTMLDivElement, StepperPropsType>(
    function Stepper({ className, ...restProps }, ref) {
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
    /**
      If set, the activity log (readOnly) view is active
    */
    readOnly: PropTypes.bool,
};

Stepper.defaultProps = {
    vertical: false,
    minimal: false,
    activeIndex: 0,
    readOnly: false,
};

export const MemoizedStepper = memo(Stepper);
