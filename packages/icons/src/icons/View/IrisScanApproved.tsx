import React, { FunctionComponent } from 'react';
import {
    SVGIconPropsType,
    SVGIcon,
    SVGIconGroup,
    SVGIconPath,
} from '../../components/SVGIcon';

const IrisScanApprovedIconShape = (
    <SVGIconGroup>
        <SVGIconPath d="M10.2464 9.53333C10.279 9.50524 10.3021 9.46772 10.3126 9.42593C10.323 9.38415 10.3203 9.34015 10.3047 9.3C10.2464 9.16667 10.0881 9.16667 10.0048 9.16667C9.34587 9.16667 8.70172 8.97117 8.15382 8.6049C7.60592 8.23863 7.17889 7.71803 6.92672 7.10894C6.67455 6.49986 6.60857 5.82963 6.73712 5.18303C6.86568 4.53643 7.18299 3.94248 7.64894 3.47631C8.11489 3.01013 8.70855 2.69267 9.35484 2.56405C10.0011 2.43543 10.671 2.50144 11.2798 2.75373C11.8886 3.00603 12.409 3.43327 12.7751 3.98143C13.1411 4.5296 13.3365 5.17406 13.3365 5.83333C13.3366 6.54691 13.1025 7.24076 12.6702 7.80833C12.6462 7.84406 12.6334 7.88612 12.6334 7.92917C12.6334 7.97221 12.6462 8.01427 12.6702 8.05C12.6942 8.08601 12.7285 8.114 12.7686 8.13034C12.8087 8.14668 12.8527 8.15062 12.8951 8.14167C13.438 7.99349 13.9982 7.91783 14.561 7.91667C15.5873 7.91905 16.5993 8.15861 17.5179 8.61666C17.5518 8.63727 17.5907 8.64816 17.6303 8.64816C17.67 8.64816 17.7089 8.63727 17.7428 8.61666C18.361 8.13213 18.9454 7.60591 19.4919 7.04167C19.648 6.88673 19.772 6.70239 19.8566 6.49929C19.9411 6.29619 19.9847 6.07835 19.9847 5.85833C19.9847 5.63831 19.9411 5.42047 19.8566 5.21737C19.772 5.01427 19.648 4.82994 19.4919 4.675C17.3429 2.39167 13.7447 0 10.1298 0H9.87989C6.26497 0 2.66671 2.39167 0.492759 4.65C0.33662 4.80494 0.21269 4.98927 0.128116 5.19237C0.0435427 5.39547 0 5.61331 0 5.83333C0 6.05335 0.0435427 6.27119 0.128116 6.47429C0.21269 6.67739 0.33662 6.86173 0.492759 7.01667C2.40017 8.98333 5.38206 11.0583 8.50555 11.55C8.54852 11.5581 8.59297 11.5519 8.63209 11.5324C8.67121 11.5128 8.70283 11.4809 8.72211 11.4417C9.1112 10.7189 9.62758 10.0724 10.2464 9.53333ZM10.0048 7.08333C10.6948 7.08333 11.2542 6.52368 11.2542 5.83333C11.2542 5.14297 10.6948 4.58333 10.0048 4.58333C9.31474 4.58333 8.75537 5.14297 8.75537 5.83333C8.75537 6.52368 9.31474 7.08333 10.0048 7.08333ZM11.578 10.0795C12.4684 9.48434 13.5151 9.16666 14.5859 9.16666C16.0211 9.16886 17.397 9.74025 18.4118 10.7556C19.4267 11.7709 19.9978 13.1474 20 14.5833C20 15.6546 19.6824 16.7019 19.0875 17.5927C18.4926 18.4834 17.6471 19.1777 16.6578 19.5877C15.6685 19.9976 14.5799 20.1049 13.5297 19.8959C12.4795 19.6869 11.5148 19.171 10.7576 18.4135C10.0004 17.656 9.48481 16.6908 9.27591 15.6401C9.067 14.5893 9.17422 13.5002 9.584 12.5105C9.99377 11.5207 10.6877 10.6747 11.578 10.0795ZM15.0857 16.8583L17.5012 13.625C17.613 13.4474 17.6537 13.2342 17.6152 13.0279C17.5767 12.8216 17.4618 12.6374 17.2935 12.5122C17.1252 12.3869 16.9158 12.3298 16.7073 12.3523C16.4987 12.3748 16.3063 12.4751 16.1685 12.6333L14.0362 15.475C14.0185 15.4987 13.9961 15.5184 13.9702 15.5328C13.9444 15.5472 13.9157 15.5559 13.8863 15.5583C13.8566 15.5597 13.827 15.5544 13.7996 15.5429C13.7722 15.5313 13.7478 15.5138 13.728 15.4917L12.8118 14.5833C12.7371 14.4961 12.6452 14.4252 12.5419 14.3752C12.4386 14.3252 12.326 14.2971 12.2113 14.2927C12.0966 14.2882 11.9822 14.3076 11.8753 14.3495C11.7684 14.3914 11.6713 14.4549 11.5902 14.5361C11.509 14.6173 11.4455 14.7145 11.4036 14.8214C11.3617 14.9283 11.3424 15.0428 11.3468 15.1575C11.3513 15.2723 11.3794 15.3849 11.4293 15.4883C11.4793 15.5917 11.5502 15.6836 11.6374 15.7583L12.8867 17.0083C13.034 17.1568 13.2115 17.2718 13.4071 17.3456C13.6027 17.4194 13.8119 17.4502 14.0205 17.436C14.229 17.4217 14.4321 17.3628 14.6159 17.2631C14.7997 17.1635 14.9599 17.0254 15.0857 16.8583Z" />
    </SVGIconGroup>
);

export const IrisScanApprovedIcon: FunctionComponent<SVGIconPropsType> = props => {
    const { className, ...restProps } = props;
    return (
        <SVGIcon
            {...restProps}
            className={`IrisScanApprovedIcon ${className || ''}`}
        >
            {IrisScanApprovedIconShape}
        </SVGIcon>
    );
};