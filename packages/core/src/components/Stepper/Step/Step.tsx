import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TickThickIcon } from '@deliveryhero/armor-icons';
import { useTheme } from '@deliveryhero/armor-system';

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
} from './style';

/**
 * @armor-docs-component
 */
export const Step = forwardRef<HTMLDivElement, StepPropsType>(function Step(
    { title, description, className, ...restProps },
    ref,
) {
    const theme = useTheme().armor;
    const {
        variant,
        rootProps,
        stepperButtonProps,
        stepperLineProps,
        stepperPieceProps,
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
            theme={theme}
            className={classOverride.Root}
        >
            <StepButton
                theme={theme}
                className={classOverride.Button}
                {...stepperButtonProps}
            >
                <StepperPieceRoot theme={theme} className={classOverride.Piece}>
                    <StepperPieceWrapper
                        {...stepperPieceProps}
                        theme={theme}
                        className={classOverride.Wrapper}
                    >
                        {StepperPieceVariant.complete === variant ? (
                            <TickThickIcon
                                className={classOverride.Icon}
                                height=".75em"
                                color="primary.07"
                            />
                        ) : (
                            <StepperPieceNumber
                                className={classOverride.Number}
                            >
                                {stepperPieceProps.index}
                            </StepperPieceNumber>
                        )}
                    </StepperPieceWrapper>
                    <StepperLine
                        {...stepperLineProps}
                        theme={theme}
                        className={classOverride.Line}
                    />
                </StepperPieceRoot>
                <div className={classOverride.Content}>
                    <Typography
                        className={classOverride.Title}
                        paragraph
                        small
                        margin={0}
                    >
                        {title}
                    </Typography>
                    <Typography
                        className={classOverride.Description}
                        label
                        small
                        color="neutral.05"
                    >
                        {description}
                    </Typography>
                </div>
            </StepButton>
        </StepRoot>
    );
});

Step.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number,
};

Step.defaultProps = {
    index: 0,
};
