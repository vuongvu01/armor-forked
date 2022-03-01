import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useComponentTheme } from '@deliveryhero/armor-system';

import { useSkeletonClassNames } from './hooks/useSkeletonClassNames';
import { useSkeleton } from './hooks/useSkeleton';
import { SkeletonRoot } from './style';
import { SkeletonPropsType } from './type';
import { SKELETON_CLASS_PREFIX } from './constants';
import { ImageFileIcon } from './images/ImageFileIcon';

export const Skeleton = forwardRef<HTMLDivElement, SkeletonPropsType>(
    function Skeleton({ className, ...props }, ref) {
        const theme = useComponentTheme(SKELETON_CLASS_PREFIX);
        const classNames = useSkeletonClassNames(
            SKELETON_CLASS_PREFIX,
            className,
        );

        const { imagePlaceholder, enableImage, rootProps } =
            useSkeleton<HTMLDivElement>(props, ref);

        return (
            <>
                <SkeletonRoot
                    {...rootProps}
                    theme={theme}
                    className={classNames.Root}
                >
                    {imagePlaceholder && enableImage && <ImageFileIcon />}
                </SkeletonRoot>
            </>
        );
    },
);

Skeleton.defaultProps = {
    animated: true,
};

Skeleton.propTypes = {
    animated: PropTypes.bool,
};
