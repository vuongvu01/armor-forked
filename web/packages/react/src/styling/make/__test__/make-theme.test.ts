/* eslint-disable import/no-extraneous-dependencies */

/**
 * https://github.com/sapegin/jest-cheat-sheet
 * https://testing-library.com/docs/react-testing-library/cheatsheet
 */

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { makeTheme } from '../make-theme';
import { legacyThemeVendorMonitor } from './mock';

describe('makeTheme()', () => {
    it('should produce hybrid theme', async () => {
        makeTheme(createMuiTheme(legacyThemeVendorMonitor));
    });

    it('should provide compatible hybrid theme', () => {
        const muiTheme = createMuiTheme(legacyThemeVendorMonitor);
        const hybridTheme = makeTheme(muiTheme);

        expect(hybridTheme.span(3)).toEqual(`${muiTheme.spacing(3)}px`);
        expect(hybridTheme.figure.borderRadius).toEqual(
            `${hybridTheme.shape.borderRadius}px`,
        );
        expect(hybridTheme.typography.pxToRem(14)).toEqual(
            muiTheme.typography.pxToRem(14),
        );

        expect(hybridTheme.breakpoints.up('sm')).toEqual(
            muiTheme.breakpoints.up('sm'),
        );

        // todo: finish this
        // expect(hybridTheme.breakpoints.down('sm')).toEqual(
        //     muiTheme.breakpoints.down('sm'),
        // );

        // console.log(hybridTheme.breakpoints.between('sm', 'md'));
        // console.log(muiTheme.breakpoints.between('sm', 'md'));
    });
});
