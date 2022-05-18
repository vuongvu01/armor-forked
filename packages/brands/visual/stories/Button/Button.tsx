import React from 'react';
import { Button } from '@deliveryhero/armor';

export default {
    title: 'Button',
    component: Button,
};

export const Basic = () => <Button primary>Hello</Button>;

export const Small = () => <Button small>Hello</Button>;

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
