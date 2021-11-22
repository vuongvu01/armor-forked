import React from 'react';

import { Grid, GridItem } from '../../../src/components/Grid';

export default {
    title: 'Grid',
    component: Grid,
    // parameters: {
    //     viewport: {
    //         viewports: {
    //             mobileSmall: {
    //                 name: 'Small mobile',
    //                 styles: {
    //                     height: '896px',
    //                     width: '540px',
    //                 },
    //                 type: 'mobile',
    //             },
    //             mobileLarge: {
    //                 name: 'Large mobile',
    //                 styles: {
    //                     height: '1112px',
    //                     width: '720px',
    //                 },
    //                 type: 'mobile',
    //             },
    //         },
    //         defaultViewport: 'iphone6',
    //     },
    // },
};

const gridItemStyle = {
    padding: '10px',
    color: 'black',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'grey',
    'text-align': 'center',
};

const containerStyle = {
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'grey',
};

export const LayoutWithBreakpoints = () => (
    <Grid>
        <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
            xs=12 sm=8 md=4
        </GridItem>
        <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
            xs=12 sm=4 md=4
        </GridItem>
        <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
            xs=12 sm=4 md=4
        </GridItem>
    </Grid>
);

export const LayoutWithSpacingBreakpointXS = () => (
    <div style={containerStyle}>
        <Grid gutterSpacing={5}>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
                xs=12 sm=8 md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                xs=12 sm=4 md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                xs=12 sm=4 md=4
            </GridItem>
        </Grid>
    </div>
);

// TODO: (nmelnikov 2020-10-22): loki ignores viewport atm
LayoutWithSpacingBreakpointXS.parameters = {
    viewport: {
        defaultViewport: 'mobileSmall',
    },
};

export const LayoutWithSpacingBreakpointSM = () => (
    <div style={containerStyle}>
        <Grid gutterSpacing={5}>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
                xs=12 sm=8 md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                xs=12 sm=4 md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                xs=12 sm=4 md=4
            </GridItem>
        </Grid>
    </div>
);

// TODO: (nmelnikov 2020-10-22): loki ignores viewport atm
LayoutWithSpacingBreakpointSM.parameters = {
    viewport: {
        defaultViewport: 'mobileLarge',
    },
};

// todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
// export const AutoLayoutWithSpacing = () => (
//     <div style={containerStyle}>
//         <Grid gutterSpacing={5}>
//             <GridItem style={gridItemStyle} xs>
//                 xs
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 xs
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 xs
//             </GridItem>
//         </Grid>
//     </div>
// );

// todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
// export const ReverseDirection = () => (
//     <div style={containerStyle}>
//         <Grid gutterSpacing={5} direction="row-reverse">
//             <GridItem style={gridItemStyle} xs>
//                 Item 1
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 Item 2
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 Item 3
//             </GridItem>
//         </Grid>
//     </div>
// );

// todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
// export const ColumnDirection = () => (
//     <div style={containerStyle}>
//         <Grid gutterSpacing={5} direction="column">
//             <GridItem style={gridItemStyle} xs>
//                 Item 1
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 Item 2
//             </GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 Item 3
//             </GridItem>
//         </Grid>
//     </div>
// );

// todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
// export const SelectiveItemsAutoScale = () => (
//     <div style={containerStyle}>
//         <Grid gutterSpacing={5}>
//             <GridItem style={gridItemStyle} xs>
//                 Item 1 Auto-scaled
//             </GridItem>
//             <GridItem style={gridItemStyle}>Item 2</GridItem>
//             <GridItem style={gridItemStyle} xs>
//                 Item 3 Auto-scaled
//             </GridItem>
//         </Grid>
//     </div>
// );

export const LayoutWithSpacingHorizontal = () => (
    <div style={containerStyle}>
        <Grid gutterSpacingHorizontal={10}>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={6}>
                Spacing = 40px | xs=12 | sm=8 | md=6
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={6}>
                Spacing = 40px | xs=12 | sm=4 | md=6
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
                Spacing = 40px | xs=12 | sm=8 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
        </Grid>
    </div>
);

export const LayoutWithSpacingVertical = () => (
    <div style={containerStyle}>
        <Grid gutterSpacingVertical={10}>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={6}>
                Spacing = 40px | xs=12 | sm=8 | md=6
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={6}>
                Spacing = 40px | xs=12 | sm=4 | md=6
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={8} md={4}>
                Spacing = 40px | xs=12 | sm=8 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
            <GridItem style={gridItemStyle} xs={12} sm={4} md={4}>
                Spacing = 40px | xs=12 | sm=4 | md=4
            </GridItem>
        </Grid>
    </div>
);
