import { css } from 'styled-components';
import { color } from '@deliveryhero/armor-system';
import { IconButtonPropsType } from '@deliveryhero/armor';

export const getIconButtonOverride = ({ disabled }: IconButtonPropsType) => {
    return disabled
        ? null
        : css`
              &:hover {
                  background-color: ${color('neutral.03')};
              }
          `;
};
