import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Grid } from '../Grid';
import { GridItem } from '../GridItem';
import { Radio, RadioGroup } from '../../Radio';
import { withWrapper } from '../../../helpers/Wrapper';
import { Pack, PackItem } from '../../Pack';
import { Stack, StackItem } from '../../Stack';

export default {
    title: 'Components/Grid',
    component: Grid,
    decorators: [withWrapper],
};
const gridItemStyle = {
    padding: '10px',
    color: 'black',
    borderWidth: '1px',
    borderStyle: 'dashed',
    borderColor: 'grey',
    textAlign: 'center' as 'center',
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

export const GridWithStack = () => {
    const style1 = {
        background: 'yellowgreen',
        padding: '20px',
        color: 'white',
    };

    const style2 = { background: 'green', padding: '20px', color: 'white' };

    return (
        <div style={containerStyle}>
            <Grid gutterSpacing={5}>
                <GridItem style={gridItemStyle} xs={12} sm={6} md={6}>
                    xs=12 sm=6 md=6
                </GridItem>
                <GridItem style={gridItemStyle} xs={12} sm={6} md={6}>
                    <Stack>
                        xs=12 sm=6 md=6
                        <StackItem style={style1}>StackItem 1</StackItem>
                        <StackItem style={style2}>StackItem 2</StackItem>
                    </Stack>
                </GridItem>
            </Grid>
        </div>
    );
};

LayoutWithSpacingBreakpointSM.parameters = {
    viewport: {
        defaultViewport: 'mobileLarge',
    },
};

// todo: discuss the real purpose of this, because it seems to be defeating the 12-column concept
// export const AutoLayoutWithSpacing = () => (
//     <div style={containerStyle}>
//         <Grid spacing={5}>
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

export const SpacingPlayground = () => {
    const [spacing, setSpacing] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedV = event?.target?.value;

        if (selectedV) {
            setSpacing(parseInt(selectedV, 10));
            setSelectedValue(selectedV);
        }
    };

    return (
        <>
            <h4>Set Spacing</h4>
            <RadioGroup
                name="spacing"
                onChange={handleChange}
                selectedValue={selectedValue}
            >
                <Radio value="1" label="1 x 4px" />
                <Radio value="2" label="2 x 4px" />
                <Radio value="3" label="3 x 4px" />
                <Radio value="4" label="4 x 4px" />
                <Radio value="5" label="5 x 4px" />
                <Radio value="6" label="6 x 4px" />
                <Radio value="7" label="7 x 4px" />
                <Radio value="8" label="8 x 4px" />
                <Radio value="9" label="9 x 4px" />
                <Radio value="10" label="10 x 4px" />
            </RadioGroup>
            <div style={containerStyle}>
                <Grid gutterSpacing={spacing}>
                    <GridItem style={gridItemStyle} xs={8} sm={4} md={2}>
                        xs=8 | sm=4 | md=2
                    </GridItem>
                    <GridItem style={gridItemStyle} xs={4} sm={4} md={2}>
                        xs=4 | sm=4 | md=2
                    </GridItem>
                    <GridItem style={gridItemStyle} xs={12} sm={4} md={2}>
                        xs=12 | sm=4 | md=2
                    </GridItem>
                    <GridItem style={gridItemStyle} xs={8} sm={4} md={2}>
                        xs=8 | sm=4 | md=2
                    </GridItem>
                    <GridItem style={gridItemStyle} xs={12} sm={4} md={2}>
                        xs=12 | sm=4 | md=2
                    </GridItem>
                    <GridItem style={gridItemStyle} xs={12} sm={4} md={2}>
                        xs=12 | sm=4 | md=2
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};
