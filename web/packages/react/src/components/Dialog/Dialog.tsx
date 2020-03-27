import React, { FunctionComponent } from 'react';
import { useTheme } from '../../styling';
import { useObject } from '../../utils/hooks';

import { DialogRoot, ButtonPanel, CloseButton, ButtonYes } from './style';
import { PropsDialogType } from './type';

import { Button } from '../Button';
import { useStylesOverrideDialog, useClassNames } from './utils';

const classPrefix = 'Dialog';

export const Dialog: FunctionComponent<PropsDialogType> = ({
    className,
    classNames,
    children,
    styles,
    attributes,
    theme,
    ...restProps
}) => {
    const themeActual = useTheme(theme);
    const {
        classNameRoot,
        classNameCloseButton,
        classNameButtonPanel,
        classNameButtonYes,
        classNameButtonNo,
    } = useClassNames(classPrefix, className, classNames);
    const stylesSafe = useStylesOverrideDialog(styles);
    const attributesSafe = useObject(attributes);

    return (
        <DialogRoot
            {...restProps}
            theme={themeActual}
            className={classNameRoot}
            styles={stylesSafe.root}
        >
            <CloseButton
                theme={themeActual}
                className={classNameCloseButton}
                styles={stylesSafe.closeButton}
            />
            {children}
            <ButtonPanel
                theme={themeActual}
                className={classNameButtonPanel}
                styles={stylesSafe.buttonPanel}
            >
                <ButtonYes
                    primary
                    {...attributesSafe.buttonYes}
                    theme={themeActual}
                    className={classNameButtonYes}
                    styles={stylesSafe.buttonYes}
                >
                    Yes
                </ButtonYes>
                <Button
                    {...attributesSafe.buttonNo}
                    theme={themeActual}
                    className={classNameButtonNo}
                    styles={stylesSafe.buttonNo}
                >
                    No
                </Button>
            </ButtonPanel>
        </DialogRoot>
    );
};
