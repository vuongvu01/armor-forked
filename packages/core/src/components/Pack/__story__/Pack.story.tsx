import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Pack } from '../Pack';
import { PackItem } from '../PackItem';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Components/Pack',
    component: Pack,
    decorators: [withWrapper],
    parameters: {},
};

const style1 = {
    background: 'yellowgreen',
    padding: '20px',
    color: 'white',
};

const style2 = { background: 'green', padding: '20px', color: 'white' };

const style3 = {
    background: 'darkseagreen',
    padding: '20px',
    color: 'white',
};

export const DefaultLayout = () => (
    <Pack>
        <PackItem>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 3</div>
        </PackItem>
    </Pack>
);

export const ReverseDirection = () => (
    <Pack reverse>
        <PackItem>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 3</div>
        </PackItem>
    </Pack>
);

export const FullWidthSpaceBetween = () => (
    <Pack justifyContent="space-between">
        <PackItem>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 3</div>
        </PackItem>
    </Pack>
);

export const FillAvailableSpace = () => (
    <Pack>
        <PackItem flexGrow={1}>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem flexGrow={1}>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem flexGrow={1}>
            <div style={style3}>Item 3</div>
        </PackItem>
    </Pack>
);

export const NestedPack = () => (
    <Pack>
        <PackItem flexGrow={1}>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem flexGrow={1}>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem flexGrow={1}>
            <div
                style={{
                    background: 'darkseagreen',
                    padding: '5px',
                    color: 'white',
                }}
            >
                <Pack>
                    <PackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'orange',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 1
                        </div>
                    </PackItem>
                    <PackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'orangered',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 2
                        </div>
                    </PackItem>
                    <PackItem flexGrow={1}>
                        <div
                            style={{
                                background: 'mediumvioletred',
                                padding: '15px',
                                color: 'white',
                            }}
                        >
                            Nested Item 3
                        </div>
                    </PackItem>
                </Pack>
            </div>
        </PackItem>
    </Pack>
);

export const GrowIndividualItem = () => (
    <Pack justifyContent="space-between">
        <PackItem>
            <div style={style1}>Item 1</div>
        </PackItem>
        <PackItem flexGrow={10}>
            <div style={style2}>Item 2</div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 3</div>
        </PackItem>
    </Pack>
);

export const AlignPackItem = () => (
    <Pack alignItems="flex-start">
        <PackItem>
            <div style={style1}>
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
            </div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 2</div>
        </PackItem>
        <PackItem flexGrow={10}>
            <div style={style2}>Item 3</div>
        </PackItem>
        <PackItem alignSelf="flex-end">
            <div style={style3}>Last one at the bottom (flex-end)</div>
        </PackItem>
    </Pack>
);

export const AlignAllAtCenter = () => (
    <Pack alignItems="center">
        <PackItem>
            <div style={style1}>
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
                Item 1 <br />
            </div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 2</div>
        </PackItem>
        <PackItem flexGrow={10}>
            <div style={style2}>Item 3</div>
        </PackItem>
        <PackItem>
            <div style={style3}>Item 4</div>
        </PackItem>
    </Pack>
);

export const WrapItems = () => {
    const oddItemStyle = {
        background: 'yellowgreen',
        padding: '20px 100px',
        color: 'white',
    };
    const evenItemStyle = {
        background: 'darkseagreen',
        padding: '20px 100px',
        color: 'white',
    };

    return (
        <Pack flexWrap="wrap">
            <PackItem>
                <div style={evenItemStyle}>Pack Item 0</div>
            </PackItem>
            <PackItem>
                <div style={oddItemStyle}>Pack Item 1</div>
            </PackItem>
            <PackItem>
                <div style={evenItemStyle}>Pack Item 2</div>
            </PackItem>
            <PackItem>
                <div style={oddItemStyle}>Pack Item 3</div>
            </PackItem>
            <PackItem>
                <div style={evenItemStyle}>Pack Item 4</div>
            </PackItem>
            <PackItem>
                <div style={oddItemStyle}>Pack Item 5</div>
            </PackItem>
            <PackItem>
                <div style={evenItemStyle}>Pack Item 6</div>
            </PackItem>
            <PackItem>
                <div style={oddItemStyle}>Pack Item 7</div>
            </PackItem>
            <PackItem>
                <div style={evenItemStyle}>Pack Item 8</div>
            </PackItem>
            <PackItem>
                <div style={oddItemStyle}>Pack Item 9</div>
            </PackItem>
        </Pack>
    );
};
