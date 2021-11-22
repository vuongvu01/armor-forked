import React, { FunctionComponent } from 'react';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { OptionListFooterContainer } from './style';
import { OptionListFooterPropsType } from './type';
import { OPTION_LIST_FOOTER_CLASS_PREFIX } from './constants';
import { useOptionListFooterClassName } from './hooks/useOptionListFooterClassName';
import { Button } from '../Button';
import { useOptionListFooter } from './hooks/useOptionListFooter';

/**
 * @internal
 */
export const OptionListFooter: FunctionComponent<OptionListFooterPropsType> = ({
    className,
    ...props
}) => {
    const theme = useComponentTheme(OPTION_LIST_FOOTER_CLASS_PREFIX);

    const classOverride = useOptionListFooterClassName(
        OPTION_LIST_FOOTER_CLASS_PREFIX,
        className,
    );

    const {
        rootProps,
        footerContent,
        footerCancelButtonProps,
        footerConfirmButtonProps,
    } = useOptionListFooter(props);

    return (
        <OptionListFooterContainer
            {...rootProps}
            theme={theme}
            className={classOverride.Root}
        >
            {footerContent || (
                <>
                    <Button
                        tertiary
                        paddingX={1}
                        {...footerCancelButtonProps}
                        className={classOverride.CancelButton}
                    >
                        Cancel
                    </Button>
                    <Button
                        {...footerConfirmButtonProps}
                        className={classOverride.ConfirmButton}
                    >
                        Confirm
                    </Button>
                </>
            )}
        </OptionListFooterContainer>
    );
};
