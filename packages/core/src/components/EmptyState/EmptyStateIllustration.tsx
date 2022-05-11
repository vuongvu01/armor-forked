import React, { memo } from 'react';
import { EmptyStateIllustrationSVG } from './style';

export const EmptyStateIllustration = memo(({ small }: { small?: boolean }) => {
    return (
        <EmptyStateIllustrationSVG
            small={small}
            viewBox="0 0 160 160"
            version="1.1"
        >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Illustration">
                    <polygon
                        id="shadow"
                        fill="#F4F4F4"
                        points="80 83 160 118.916497 80 160 0 118.916497"
                    ></polygon>
                    <polygon
                        id="Path"
                        fill="#A3A3A3"
                        points="80 77.0556309 80 139 160 98.1112619 160 36"
                    ></polygon>
                    <polygon
                        id="Path"
                        fill="#878787"
                        points="80 139 80 77.0556309 40.0835073 56.5278155 0 36 0 98.1112619"
                    ></polygon>
                    <polygon
                        id="Path"
                        fill="#DBDBDB"
                        points="80 0 160 35.9164969 80 77 0 35.9164969"
                    ></polygon>
                </g>
            </g>
        </EmptyStateIllustrationSVG>
    );
});

EmptyStateIllustration.displayName = 'EmptyStateIllustration';
