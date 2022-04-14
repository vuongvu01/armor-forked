import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { HeaderNavigationMenuContentBodyRoot } from './style';
import { HeaderNavigationMenuContentBodyPropsType } from './type';
import { HeaderNavigationMenuContentBodyOptions } from '../HeaderNavigationMenuContentBodyOptions';
import { useHeaderNavigationMenuContentBodyClassName } from './hooks';
import {
    HEADER_NAVIGATION_MENU_CONTENT_BODY_CLASS_PREFIX,
    headerNavigationMenuContentBodyRoot,
} from './constants';

/**
 * # HeaderNavigationMenuContentBody
 *
 * ## [Documentation](https://armor.deliveryhero.com/251886272/p/111bcf-header-navigation/b/440e0c)
 *
 * @armor-docs-component
 */
export const HeaderNavigationMenuContentBody: FunctionComponent<
    HeaderNavigationMenuContentBodyPropsType
> = ({ className, options, selectedValue, onOptionSelect, ...restProps }) => {
    const classOverride = useHeaderNavigationMenuContentBodyClassName(
        HEADER_NAVIGATION_MENU_CONTENT_BODY_CLASS_PREFIX,
        className,
    );

    return (
        <HeaderNavigationMenuContentBodyRoot
            data-testid={headerNavigationMenuContentBodyRoot}
            {...restProps}
            className={classOverride.Root}
        >
            {options ? (
                <HeaderNavigationMenuContentBodyOptions
                    options={options}
                    selectedValue={selectedValue}
                    onOptionSelect={onOptionSelect}
                />
            ) : null}
        </HeaderNavigationMenuContentBodyRoot>
    );
};

HeaderNavigationMenuContentBody.defaultProps = {};

HeaderNavigationMenuContentBody.propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onOptionSelect: PropTypes.func,
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                label: PropTypes.string.isRequired,
            }).isRequired,
        ),
        PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
                    .isRequired,
                label: PropTypes.string.isRequired,
                options: PropTypes.arrayOf(
                    PropTypes.shape({
                        value: PropTypes.oneOfType([
                            PropTypes.number,
                            PropTypes.string,
                        ]).isRequired,
                        label: PropTypes.string.isRequired,
                    }).isRequired,
                ),
            }).isRequired,
        ),
    ]),
};
