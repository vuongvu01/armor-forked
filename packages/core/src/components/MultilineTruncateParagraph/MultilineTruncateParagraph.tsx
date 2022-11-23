import React, { forwardRef, memo } from 'react';

import { useMultilineTruncateParagraphClassNames } from './hooks/useMultilineTruncateParagraphClassNames';
import { useMultilineTruncateParagraph } from './hooks/useMultilineTruncateParagraph';
import { MultilineTruncateParagraphRoot } from './style';
import { MultilineTruncateParagraphPropsType } from './type';
import { MULTILINETRUNCATEPARAGRAPH_CLASS_PREFIX } from './constants';
import { Typography } from '../Typography';

/**
 * # MultilineTruncateParagraph
 *
 * @internal
 */
export const MultilineTruncateParagraph = forwardRef<
    HTMLDivElement,
    MultilineTruncateParagraphPropsType
>(function MultilineTruncateParagraph(props, ref) {
    const { className, ...restProps } = props;

    const { rootProps, truncated, textRef, children, typographyProps } =
        useMultilineTruncateParagraph<HTMLDivElement>(restProps, ref);

    const classNames = useMultilineTruncateParagraphClassNames(
        MULTILINETRUNCATEPARAGRAPH_CLASS_PREFIX,
        className,
        truncated,
    );

    return (
        <MultilineTruncateParagraphRoot
            {...rootProps}
            className={classNames.Root}
        >
            {truncated && (
                <Typography
                    {...typographyProps}
                    ref={textRef}
                    className={classNames.TextContent}
                    data-testid="truncatedTextId"
                    margin={0}
                >
                    {children}
                </Typography>
            )}
            {!truncated && (
                <Typography
                    {...typographyProps}
                    className={classNames.TextContent}
                    margin={0}
                >
                    {children}
                </Typography>
            )}
        </MultilineTruncateParagraphRoot>
    );
});

MultilineTruncateParagraph.displayName = 'MultilineTruncateParagraph';

export const MemoizedMultilineTruncateParagraph = memo(
    MultilineTruncateParagraph,
);
