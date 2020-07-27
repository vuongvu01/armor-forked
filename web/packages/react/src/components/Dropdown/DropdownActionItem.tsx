import React, { FunctionComponent } from 'react';

import { DropdownActionItemPropsType } from './type';
import {
    DropdownActionContainer,
    DropdownActionContent,
    DropdownAction,
} from './style';

const DropdownActionItem: FunctionComponent<DropdownActionItemPropsType> = ({
    onClick,
    className,
    isFocused,
    isOptionListShown,
    theme,
}) => (
    <DropdownActionContainer onClick={onClick}>
        <DropdownActionContent isFocused={isFocused}>
            <DropdownAction
                className={className}
                isOptionListShown={isOptionListShown}
                theme={theme}
            />
        </DropdownActionContent>
    </DropdownActionContainer>
);

export default DropdownActionItem;
