// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent, useMemo } from 'react';
import styled from 'styled-components';
import {
    HeaderNavigationMenuContent,
    HeaderNavigationMenuContentBody,
    HeaderNavigationMenuContentHeader,
} from '@deliveryhero/armor';
import { HeaderNavigationMenuContentPropsType } from './type';

const menuContentBodyOptions = [
    {
        value: 'arara',
        label: 'Arara',
        url: '/dashboard/arara/',
    },
    {
        value: 'rooster',
        label: 'Rooster',
        url: '/dashboard/rooster/',
    },
    {
        // https://github.com/deliveryhero/logistics-dynamic-pricing-dashboard#environment-urls
        value: 'dps',
        label: 'Dynamic Pricing Service',
        url: '', // todo
    },
    {
        value: 'porygon',
        label: 'Delivery Area Service',
        url: '/dashboard/deliveryareas/',
    },
    {
        // https://github.com/deliveryhero/logistics-tweety-dashboard
        value: 'tweety',
        label: 'Tweety',
        url: '/dashboard/tweety/',
    },
    {
        value: 'tes',
        label: 'Time Estimation Service',
        url: '/',
    },
    {
        value: 'hurrier',
        label: 'Hurrier',
        url: '/',
    },
    {
        value: 'cod',
        label: 'Cash collection',
        url: '/dashboard/cash-collection/',
    },
    {
        value: 'ice',
        label: 'Issue Customization Engine',
        url: '/dashboard/ice/',
    },
];

const Drawing = styled.div`
    background-image: url(data:image/png;base64,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);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    height: 42px;
    width: 42px;
`;

const onOptionSelect = (item: any) => {
    if (window && item.url) {
        window.location.assign(item.url);
    }
};

export const HeaderNavigationMenuContentLogistics: FunctionComponent<HeaderNavigationMenuContentPropsType> = ({
    displayedApplicationCodes,
    ...restProps
}) => {
    const items = useMemo(() => {
        if (!displayedApplicationCodes) {
            return menuContentBodyOptions;
        }

        return menuContentBodyOptions.filter(application => {
            return displayedApplicationCodes.find(code =>
                code.includes(application.value),
            );
        });
    }, [menuContentBodyOptions, displayedApplicationCodes]);

    return (
        <HeaderNavigationMenuContent {...restProps}>
            <HeaderNavigationMenuContentHeader
                title="Logistics"
                image={<Drawing />}
            />
            <HeaderNavigationMenuContentBody
                options={items}
                onOptionSelect={onOptionSelect}
            />
        </HeaderNavigationMenuContent>
    );
};

/** prop-types are required here for run-time checks */
HeaderNavigationMenuContentLogistics.propTypes = {};
