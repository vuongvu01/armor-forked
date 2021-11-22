import React from 'react';
import {
    EmptyState,
    Button,
    Link,
    Stack,
    StackItem,
} from '@deliveryhero/armor';

export default {
    title: 'EmptyState',
    component: EmptyState,
};

export const DefaultLayout = () => {
    return <EmptyState />;
};

export const VerticalCentered = () => {
    return <EmptyState preset="middle" />;
};

export const TitleChangedPosition = () => {
    return <EmptyState titlePosition="middle" />;
};

export const WithoutImage = () => {
    return (
        <EmptyState
            enableImage={false}
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const WthoutPrimaryAction = () => {
    return <EmptyState actions={<Link> Support link here </Link>} />;
};

export const WithoutSecondaryAction = () => {
    return <EmptyState actions={<Button secondary> Action </Button>} />;
};

export const VerticalMultipleActions = () => {
    return (
        <EmptyState
            actions={
                <Stack>
                    <StackItem>
                        <Button marginBottom={2}>Action1</Button>
                    </StackItem>
                    <StackItem>
                        <Button marginBottom={2}>Action2</Button>
                    </StackItem>
                    <StackItem>
                        <Link marginBottom={2}>Support Link here1</Link>
                    </StackItem>
                    <StackItem>
                        <Link>Support Link here2</Link>
                    </StackItem>
                </Stack>
            }
        />
    );
};

export const HorizontalMultipleActions = () => {
    return (
        <EmptyState
            actions={
                <Stack>
                    <StackItem>
                        <Button secondary marginBottom={2} marginRight={10}>
                            Action1
                        </Button>
                        <Link>Support link here</Link>
                    </StackItem>
                    <StackItem>
                        <Button secondary marginBottom={2} marginRight={10}>
                            Action2
                        </Button>
                        <Link>Support link here2</Link>
                    </StackItem>
                </Stack>
            }
        />
    );
};

export const HorizontalLayout = () => {
    return (
        <EmptyState
            layout="horizontal"
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const WithIndicatorIcon = () => {
    return (
        <EmptyState
            enableIndicator={true}
            actions={
                <>
                    <Button secondary>Action</Button>
                </>
            }
        />
    );
};

export const WithoutTitle = () => {
    return (
        <EmptyState
            enableTitle={false}
            actions={
                <Stack>
                    <StackItem>
                        <Button secondary marginBottom={2} marginRight={10}>
                            Action1
                        </Button>
                    </StackItem>
                    <StackItem>
                        <Link>Support link here</Link>
                    </StackItem>
                </Stack>
            }
        />
    );
};

export const WithoutDescription = () => {
    return (
        <EmptyState
            enableDescription={false}
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const DescriptionChangedPosition = () => {
    return (
        <EmptyState
            preset="middle"
            descriptionPosition="right"
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const ActionsChangedPosition = () => {
    return (
        <EmptyState
            imagePosition="right"
            actionsPosition="left"
            preset="middle"
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const SmallVertical = () => {
    return (
        <EmptyState
            small={true}
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const SmallHorizontal = () => {
    return (
        <EmptyState
            layout="horizontal"
            small={true}
            actions={
                <>
                    <Button secondary marginBottom={2} marginRight={10}>
                        Action1
                    </Button>
                    <Link marginTop={2}>Support link here</Link>
                </>
            }
        />
    );
};

export const AllPresets = () => {
    return (
        <>
            <EmptyState title="Left" />
            <EmptyState title="Middle" preset="middle" />
            <EmptyState title="Right" preset="right" />
            <EmptyState
                titlePosition="middle"
                title="MiddleTitle"
                imagePosition="right"
            />
            <EmptyState imagePosition="middle" />
            <EmptyState
                descriptionPosition="middle"
                description="Centered description"
            />
        </>
    );
};
