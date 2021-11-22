import React, { FC } from 'react';
import { FooterRoot, FooterInfo, FooterNoWrap } from './style';

export const Footer: FC = () => {
    return (
        <FooterRoot>
            <FooterInfo>
                <FooterNoWrap>
                    &copy; then &mdash; now ({new Date().getFullYear()})
                </FooterNoWrap>
            </FooterInfo>
        </FooterRoot>
    );
};
