// eslint-disable-next-line no-use-before-define
import React, { FunctionComponent, useMemo } from 'react';
import { RestaurantIllustration } from '@deliveryhero/armor-illustrations';
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

const onOptionSelect = (item: any) => {
    if (window && item.url) {
        window.location.assign(item.url);
    }
};

export const HeaderNavigationMenuContentLogistics: FunctionComponent<React.PropsWithChildren<HeaderNavigationMenuContentPropsType>> = ({ displayedApplicationCodes, ...restProps }) => {
    const items = useMemo(() => {
        if (!displayedApplicationCodes) {
            return menuContentBodyOptions;
        }

        return menuContentBodyOptions.filter((application) => {
            return displayedApplicationCodes.find((code) =>
                code.includes(application.value),
            );
        });
    }, [menuContentBodyOptions, displayedApplicationCodes]);

    return (
        <HeaderNavigationMenuContent {...restProps}>
            <HeaderNavigationMenuContentHeader
                label="Logistics"
                image={<RestaurantIllustration height="42px" width="42px" />}
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
