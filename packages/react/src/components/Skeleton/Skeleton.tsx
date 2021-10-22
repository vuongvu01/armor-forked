import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useSkeletonClassNames } from './hooks/useSkeletonClassNames';
import { useSkeleton } from './hooks/useSkeleton';
import { SkeletonRoot } from './style';
import { SkeletonPropsType } from './type';
import { SKELETON_CLASS_PREFIX } from './constants';
import { useComponentTheme } from '../../utils/hooks';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonPropsType>(
    function Skeleton({ className, children, ...props }, ref) {
        const theme = useComponentTheme(SKELETON_CLASS_PREFIX);
        const classNames = useSkeletonClassNames(
            SKELETON_CLASS_PREFIX,
            className,
        );

        const { rootProps } = useSkeleton<HTMLDivElement>(props, ref);

        return (
            <SkeletonRoot
                {...rootProps}
                theme={theme}
                className={classNames.Root}
            >
                {children}
            </SkeletonRoot>
        );
    },
);

Skeleton.defaultProps = {
    // exampleProperty: true,
};

Skeleton.propTypes = {
    // exampleProperty: PropTypes.bool,
};
