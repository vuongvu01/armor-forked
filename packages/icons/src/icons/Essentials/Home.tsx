import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const HomeIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M11.7351 4.59279L4.04353 10.8261C3.91629 10.9284 3.7694 11.0049 3.61146 11.0511C3.45352 11.0973 3.28772 11.1123 3.12376 11.0952C2.9598 11.0781 2.80099 11.0293 2.65662 10.9516C2.51225 10.8739 2.38524 10.7689 2.28302 10.6428C2.07212 10.3847 1.97287 10.0565 2.00639 9.72807C2.03991 9.39966 2.20355 9.09698 2.46249 8.88445L10.154 2.64279C10.6748 2.22712 11.327 2 12 2C12.673 2 13.3252 2.22712 13.846 2.64279L21.5375 8.88445C21.7964 9.09698 21.9601 9.39966 21.9936 9.72807C22.0271 10.0565 21.9279 10.3847 21.717 10.6428C21.6148 10.7689 21.4877 10.8739 21.3434 10.9516C21.199 11.0293 21.0402 11.0781 20.8762 11.0952C20.7123 11.1123 20.5465 11.0973 20.3885 11.0511C20.2306 11.0049 20.0837 10.9284 19.9565 10.8261L12.2649 4.59279C12.1909 4.5317 12.097 4.49818 12 4.49818C11.903 4.49818 11.8091 4.5317 11.7351 4.59279ZM20.8282 14.5011V20.3345C20.8296 20.7543 20.6684 21.1592 20.3769 21.4682C20.0854 21.7772 19.6849 21.9675 19.2557 22.0011H14.6579C14.4312 22.0011 14.2139 21.9133 14.0536 21.757C13.8933 21.6008 13.8033 21.3888 13.8033 21.1678V16.5845C13.8033 16.3634 13.7132 16.1515 13.553 15.9952C13.3927 15.8389 13.1753 15.7511 12.9487 15.7511H11.2394C11.0128 15.7511 10.7954 15.8389 10.6351 15.9952C10.4749 16.1515 10.3848 16.3634 10.3848 16.5845V21.1678C10.3848 21.3888 10.2948 21.6008 10.1345 21.757C9.97424 21.9133 9.75686 22.0011 9.53021 22.0011H4.96656C4.51324 22.0011 4.07849 21.8255 3.75795 21.513C3.4374 21.2004 3.25732 20.7765 3.25732 20.3345V14.5011C3.26385 14.2506 3.32251 14.0039 3.42975 13.7762C3.537 13.5484 3.69058 13.3443 3.88119 13.1761L10.9745 7.34279C11.2735 7.09717 11.6518 6.96246 12.0428 6.96246C12.4337 6.96246 12.8121 7.09717 13.111 7.34279L20.2044 13.1761C20.395 13.3443 20.5486 13.5484 20.6558 13.7762C20.763 14.0039 20.8217 14.2506 20.8282 14.5011Z" />
    </SVGIconGroup>
);

export const HomeIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`HomeIcon ${className || ''}`}
        >
            {HomeIconShape}
        </SVGIcon>
    );
};
