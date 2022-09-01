/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { EditIcon } from '@deliveryhero/armor-icons';
import styled, { ThemeProvider } from 'styled-components';
import { withStyles as withMaterialStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link } from 'react-router-dom';
import { makeTheme } from '@deliveryhero/armor-system';

import { ObjectLiteralType } from '../../../type';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Button } from '../Button';
import { Box } from '../../Box';
import { withWrapper } from '../../../helpers/Wrapper';

export default {
    title: 'Core/Button',
    component: Button,
    decorators: [withWrapper],
    parameters: {},
};

const groupStyle = {
    display: 'flex',
    alignItems: 'flex-end',
};

export const AllStates = () => (
    <>
        <GroupHelper styles={groupStyle}>
            <Button primary>Primary</Button>
            <Button primary>
                <EditIcon small marginRight={2} />
                Primary with icon
            </Button>
            <Button primary>
                Primary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button primary>
                <EditIcon small />
            </Button>
            <Button primary danger>
                Primary
            </Button>
            <Button primary small>
                Primary
            </Button>
            <Button small>
                <EditIcon small />
            </Button>
        </GroupHelper>
        <GroupHelper styles={groupStyle}>
            <Button disabled primary>
                Primary
            </Button>
            <Button disabled primary>
                <EditIcon small marginRight={2} />
                Primary with icon
            </Button>
            <Button disabled primary>
                Primary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button disabled primary>
                <EditIcon small />
            </Button>
            <Button disabled primary danger>
                Primary
            </Button>
            <Button disabled primary small>
                Primary
            </Button>
            <Button disabled primary small>
                <EditIcon small />
            </Button>
        </GroupHelper>
        <br />
        <br />
        <GroupHelper styles={groupStyle}>
            <Button secondary>Secondary</Button>
            <Button secondary>
                <EditIcon small marginRight={2} />
                Secondary with icon
            </Button>
            <Button secondary>
                Secondary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button secondary>
                <EditIcon small />
            </Button>
            <Button secondary danger>
                Secondary
            </Button>
            <Button secondary small>
                Secondary
            </Button>
            <Button secondary small>
                <EditIcon small />
            </Button>
        </GroupHelper>
        <GroupHelper styles={groupStyle}>
            <Button disabled secondary>
                Secondary
            </Button>
            <Button disabled secondary>
                <EditIcon small marginRight={2} />
                Secondary with icon
            </Button>
            <Button disabled secondary>
                Secondary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button disabled secondary>
                <EditIcon small />
            </Button>
            <Button disabled secondary small>
                Secondary
            </Button>
        </GroupHelper>
        <br />
        <br />
        <GroupHelper styles={groupStyle}>
            <Button tertiary>Tertiary</Button>
            <Button tertiary>
                <EditIcon small marginRight={2} />
                Tertiary with icon
            </Button>
            <Button tertiary>
                Tertiary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button tertiary>
                <EditIcon small />
            </Button>
            <Button tertiary danger>
                Tertiary
            </Button>
        </GroupHelper>
        <GroupHelper styles={groupStyle}>
            <Button disabled tertiary>
                Tertiary
            </Button>
            <Button disabled tertiary>
                <EditIcon small marginRight={2} />
                Tertiary with icon
            </Button>
            <Button disabled tertiary>
                Tertiary with icon
                <EditIcon small marginLeft={2} />
            </Button>
            <Button disabled tertiary>
                <EditIcon small />
            </Button>
            <Button disabled tertiary danger>
                Tertiary
            </Button>
        </GroupHelper>
    </>
);

export const AsLink = () => (
    <>
        <Button tag="a" href="https://www.google.com/" target="_blank">
            Open Google
        </Button>
        <Button disabled tag="a" href="https://www.google.com/" target="_blank">
            Disabled Open Google
        </Button>
    </>
);

export const Comparison = () => (
    // <div style={{ display: 'flex' }}>
    <div>
        <Button primary tag="button" small>
            No Icon
        </Button>
        <Button marginLeft={2} primary tag="button" small>
            With MUI icon <EditIcon small marginLeft={2} />
        </Button>
        <Button marginLeft={2} primary tag="button" small>
            With MUI icon <EditIcon small marginLeft={2} fontSize={20} />
        </Button>
        <Button marginLeft={2} tag="button" small>
            <EditIcon small />
        </Button>
        <Button marginLeft={2} tag="button" small>
            <EditIcon small />
        </Button>
        <Button marginLeft={2} small>
            Edit <EditIcon small marginLeft={2} />
        </Button>
        <Button marginLeft={2} small>
            <EditIcon small marginRight={2} />
        </Button>
        <Button marginLeft={2} small>
            <EditIcon small marginRight={2} />
            Save
        </Button>
        <Button marginLeft={2} small>
            Save <EditIcon small marginLeft={2} />
        </Button>
        <Button marginLeft={2} small>
            Add
            <EditIcon small marginLeft={2} />
        </Button>
        <Button marginLeft={2} small>
            Remove <EditIcon small marginLeft={2} />
        </Button>
    </div>
);

export const InText = () => (
    <>
        Feel free to{' '}
        <Button small>
            eat <EditIcon small marginLeft={2} />
        </Button>{' '}
        <Button small>
            eat <EditIcon small marginLeft={2} />
        </Button>{' '}
        that tasty pie and{' '}
        <Button small>
            <EditIcon marginRight={2} /> drink <EditIcon small marginLeft={2} />
        </Button>{' '}
        some tea.
    </>
);

export const IconAndText = () => (
    <Button primary tag="button" wide small>
        <EditIcon small marginRight={2} />
        Create workflow
    </Button>
);

const customTheme = makeTheme({
    armor: {
        components: {
            Button: {
                Root: {
                    base: {
                        fontWeight: 'bold',
                    },
                    primary: {
                        borderColor: 'red',
                        '&:hover': {
                            borderColor: 'yellow',
                        },
                    },
                },
            },
        },
    },
});

export const WithCustomTheme = () => (
    <ThemeProvider theme={customTheme}>
        <Button primary tag="button" wide small>
            <EditIcon small marginRight={2} />
            With custom theme
        </Button>
    </ThemeProvider>
);

export const WithCustomThemeAsLink = () => (
    <ThemeProvider theme={customTheme}>
        <BrowserRouter>
            <Button primary wide small tag={Link} to="/homepage">
                <EditIcon small marginRight={2} />
                With custom theme
            </Button>
        </BrowserRouter>
    </ThemeProvider>
);

export const AsRouterLink = () => (
    <BrowserRouter>
        <Button tag={Link} to="/homepage">
            No route to host!
        </Button>
    </BrowserRouter>
);

export const WithClassName = () => (
    <BrowserRouter>
        <Button className="custom-button">I am custom</Button>
        <style
            dangerouslySetInnerHTML={{
                __html: `.custom-button { border: 1px solid red; };`,
            }}
        />
    </BrowserRouter>
);

const CustomButtonWrapper = ({ classes }: { classes: ObjectLiteralType }) => (
    <Button className={classes.customButton}>I am custom</Button>
);

const CustomButtonMUI = withMaterialStyles({
    customButton: {
        border: '1px solid red',
    },
})(CustomButtonWrapper);

export const WithMUIStyles = () => <CustomButtonMUI />;

export const WithCustomAttributes = () => (
    <Button marginLeft={2}>With custom attributes</Button>
);

const BlockWithBorder = styled(Box)`
    border-right: 1px solid white;
    align-self: stretch;
    display: flex;
    align-items: center;
`;

export const WithCustomSide = () => (
    <Button marginLeft={2} paddingLeft={0} paddingY={0}>
        <BlockWithBorder marginRight={2} paddingRight={2} paddingLeft={3}>
            With
        </BlockWithBorder>
        <Box paddingY={3}>custom side</Box>
    </Button>
);

export const LikeDisabled = () => (
    <>
        <div>
            <Button primary>Normal</Button>
            <Button disabled primary>
                Disabled
            </Button>
            <Button likeDisabled primary>
                Like disabled
            </Button>
        </div>
        <div>
            <Button secondary>Normal</Button>
            <Button disabled secondary>
                Disabled
            </Button>
            <Button likeDisabled secondary>
                Like disabled
            </Button>
        </div>
        <div>
            <Button tertiary>Normal</Button>
            <Button disabled tertiary>
                Disabled
            </Button>
            <Button likeDisabled tertiary>
                Like disabled
            </Button>
        </div>
    </>
);
