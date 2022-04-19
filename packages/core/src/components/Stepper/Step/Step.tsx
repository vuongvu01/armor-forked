import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TickThickIcon } from '@deliveryhero/armor-icons';

import { Pack, PackItem } from '../../Pack';
import { StepPropsType, StepperPieceVariant } from './type';
import { useStepClassNames, useStep } from './hooks';
import { STEP_CLASS_PREFIX, stepRoot } from '../constants';
import { Typography } from '../../Typography';
import {
    StepRoot,
    StepButton,
    StepperPieceRoot,
    StepperPieceWrapper,
    StepperLine,
    StepperPieceNumber,
    StepContent,
} from './style';

/**
 * # Step
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
export const Step = forwardRef<HTMLDivElement, StepPropsType>(function Step(
    { className, ...restProps },
    ref,
) {
    const {
        variant,
        rootProps,
        stepperButtonProps,
        stepperLineProps,
        stepperPieceProps,
        icon,
        isIconShown,
        title,
        description,
        extraInfo,
        isExtraInfoShown,
        vertical,
    } = useStep(restProps, ref);

    const classOverride = useStepClassNames(
        STEP_CLASS_PREFIX,
        className,
        variant,
    );

    return (
        <StepRoot
            data-testid={stepRoot}
            {...rootProps}
            className={classOverride.Root}
        >
            <StepButton
                className={classOverride.Button}
                {...stepperButtonProps}
            >
                <StepperPieceRoot className={classOverride.Piece}>
                    <StepperPieceWrapper
                        {...stepperPieceProps}
                        className={classOverride.Wrapper}
                    >
                        {isIconShown && icon}
                        {!isIconShown &&
                            (StepperPieceVariant.complete === variant ? (
                                <TickThickIcon
                                    className={classOverride.Icon}
                                    color="primary.07"
                                />
                            ) : (
                                <StepperPieceNumber
                                    className={classOverride.Number}
                                >
                                    {stepperPieceProps.index}
                                </StepperPieceNumber>
                            ))}
                    </StepperPieceWrapper>
                    <StepperLine
                        {...stepperLineProps}
                        className={classOverride.Line}
                    />
                </StepperPieceRoot>
                <StepContent className={classOverride.Content}>
                    <Pack
                        alignItems="center"
                        justifyContent={vertical ? 'space-between' : 'center'}
                    >
                        <PackItem flexGrow={1} flexShrink={1}>
                            <Typography
                                className={classOverride.Title}
                                paragraph
                                medium
                                margin={0}
                            >
                                {title}
                            </Typography>
                        </PackItem>
                        {isExtraInfoShown && (
                            <PackItem
                                alignSelf="flex-start"
                                flexShrink={0}
                                marginLeft={2}
                                marginTop={0.5}
                            >
                                <Typography
                                    className={classOverride.ExtraInfo}
                                    paragraph
                                    small
                                    margin={0}
                                    color="neutral.05"
                                >
                                    {extraInfo}
                                </Typography>
                            </PackItem>
                        )}
                    </Pack>
                    <Typography
                        className={classOverride.Description}
                        paragraph
                        small
                        margin={0}
                        color="neutral.05"
                    >
                        {description}
                    </Typography>
                </StepContent>
            </StepButton>
        </StepRoot>
    );
});

Step.propTypes = {
    /** The step's title */
    title: PropTypes.string,
    /** The step's description */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    index: PropTypes.number,
    /** The step's extra info (only capable in vertical mode) */
    extraInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /** If there is a warning in the step */
    warning: PropTypes.bool,
    /** If there is a error in the step */
    error: PropTypes.bool,
    /** If there is a success in the step */
    success: PropTypes.bool,
    /** If there is a info in the step */
    info: PropTypes.bool,
    /** Set icon for each step instead of the default number */
    icon: PropTypes.element,
};

Step.defaultProps = {
    index: 0,
};
