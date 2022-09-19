import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';

import { useTextInputActionClassNames } from './hooks/useTextInputActionClassNames';
import { TextInputActionRoot } from './style';
import { TextInputActionPropsType } from './type';
import { TEXT_INPUT_ACTION_CLASS_PREFIX } from './constants';
import { ButtonPropsType } from '../../Button/type';

export const TextInputAction: FC<
    React.PropsWithChildren<TextInputActionPropsType>
> = ({ className, tag: Tag = 'div', children, ...restProps }) => {
    const classNameComponents = useTextInputActionClassNames(
        TEXT_INPUT_ACTION_CLASS_PREFIX,
        className,
    );

    return (
        <TextInputActionRoot
            {...restProps}
            tabIndex={0}
            className={classNameComponents.Root}
        >
            {(forwardedProps: ButtonPropsType) => (
                <Tag {...forwardedProps}>{children}</Tag>
            )}
        </TextInputActionRoot>
    );
};

TextInputAction.defaultProps = {
    tag: 'div',
};

TextInputAction.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
};

export const MemoizedTextInputAction = memo(TextInputAction);
