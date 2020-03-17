import React, { FunctionComponent } from 'react';
import { useTheme } from '../../themes';

import { DialogRoot, ButtonPanel, CloseButton, ButtonYes } from './style';
import { PropsDialog } from './type';

import { Button } from '../Button';
import {
    useAttributesOverrideDialog,
    useStylesOverrideDialog,
    useClassNames,
} from './utils';

const classPrefix = 'Dialog';

export const Dialog: FunctionComponent<PropsDialog> = ({
    className,
    classNames,
    children,
    styles,
    attributes,
    ...restProps
}) => {
    const theme = useTheme();
    const {
        classNameRoot,
        classNameCloseButton,
        classNameButtonPanel,
        classNameButtonYes,
        classNameButtonNo,
    } = useClassNames(classPrefix, className, classNames);
    const stylesSafe = useStylesOverrideDialog(styles);
    const attributesSafe = useAttributesOverrideDialog(attributes);

    return (
        <DialogRoot
            {...restProps}
            theme={theme}
            className={classNameRoot}
            styles={stylesSafe.root}
        >
            <CloseButton
                theme={theme}
                className={classNameCloseButton}
                styles={stylesSafe.closeButton}
            />
            {children}
            <ButtonPanel
                theme={theme}
                className={classNameButtonPanel}
                styles={stylesSafe.buttonPanel}
            >
                <ButtonYes
                    primary
                    {...attributesSafe.buttonYes}
                    theme={theme}
                    className={classNameButtonYes}
                    styles={stylesSafe.buttonYes}
                >
                    Yes
                </ButtonYes>
                <Button
                    {...attributesSafe.buttonNo}
                    theme={theme}
                    className={classNameButtonNo}
                    styles={stylesSafe.buttonNo}
                >
                    No
                </Button>
            </ButtonPanel>
        </DialogRoot>
    );
};
