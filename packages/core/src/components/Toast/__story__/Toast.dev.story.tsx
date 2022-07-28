/* eslint-disable no-console,import/no-unresolved */

import React, { useState } from 'react';
import { withWrapper } from '../../../helpers/Wrapper';
import { GroupHelper } from '../../../helpers/GroupHelper';
import { Button } from '../../Button';

import { Toast, useToast } from '..';

export default {
    title: 'Components/Toast',
    component: Toast,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const { makeToast } = useToast();

    const makeBasicToast = () => makeToast({ message: 'This is awesome!' });

    return (
        <GroupHelper gap={2}>
            <p>With no configuration</p>
            <Button onClick={makeBasicToast}>Show Toast</Button>
        </GroupHelper>
    );
};

export const AllLevels = () => {
    const { makeToast } = useToast();

    const makeLevelToast = (level: 'error' | 'warning' | 'info' | 'success') =>
        makeToast({
            level,
            message: 'This is awesome!',
        });

    return (
        <>
            <GroupHelper gap={2}>
                <p>Success</p>
                <Button onClick={() => makeLevelToast('success')}>
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Info</p>
                <Button onClick={() => makeLevelToast('info')}>
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Warning</p>
                <Button onClick={() => makeLevelToast('warning')}>
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Error</p>
                <Button onClick={() => makeLevelToast('error')}>
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const AllPositions = () => {
    const { makeToast: makeToastTopRight } = useToast({ position: 'topRight' });
    const { makeToast: makeToastTopLeft } = useToast({ position: 'topLeft' });
    const { makeToast: makeToastBottomRight } = useToast({
        position: 'bottomRight',
    });
    const { makeToast: makeToastBottomLeft } = useToast({
        position: 'bottomLeft',
    });

    return (
        <>
            <GroupHelper gap={2}>
                <p>Top Right</p>
                <Button
                    onClick={() =>
                        makeToastTopRight({
                            level: 'success',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Top Left</p>
                <Button
                    onClick={() =>
                        makeToastTopLeft({
                            level: 'info',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Bottom Right</p>
                <Button
                    onClick={() =>
                        makeToastBottomRight({
                            level: 'warning',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Bottom Left</p>
                <Button
                    onClick={() =>
                        makeToastBottomLeft({
                            level: 'error',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const AutoCloseAndProgressBar = () => {
    const { makeToast } = useToast();
    const { makeToast: makeToastDisablePauseOnHover } = useToast({
        pauseOnHover: false,
        position: 'topLeft',
    });

    return (
        <>
            <GroupHelper gap={2}>
                <p>Default</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This toast is default',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Disable Auto Close</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This toast will not close automatically',
                            autoClose: false,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Auto Close And Disable Progress Bar</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message:
                                'This toast has auto close but no progress bar',
                            autoClose: true,
                            showProgressBar: false,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Custom Auto Close Time</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This toast will disappear after 10s',
                            autoClose: true,
                            autoCloseTime: 10000,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Disable Pause Auto Close On Hover</p>
                <Button
                    onClick={() =>
                        makeToastDisablePauseOnHover({
                            level: 'success',
                            message: 'This toast will not be paused on hover',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const CustomPositions = () => {
    const { makeToast: makeToastGap } = useToast({ gap: '20px' });

    const { makeToast: makeToastMargin } = useToast({
        position: 'topLeft',
        marginTop: '100px',
        marginLeft: '100px',
    });

    return (
        <>
            <GroupHelper gap={2}>
                <p>With Custom Gap Between Toasts</p>
                <Button
                    onClick={() =>
                        makeToastGap({
                            level: 'info',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>With Custom Margins</p>
                <Button
                    onClick={() =>
                        makeToastMargin({
                            level: 'info',
                            message: 'This toast is awesome!',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const CustomMessages = () => {
    const { makeToast } = useToast();

    return (
        <>
            <GroupHelper gap={2}>
                <p>Long Toast</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message:
                                'This is a very long toast, please wait for it to be shown. This is a very long toast, please wait for it to be shown. This is a very long toast, please wait for it to be shown.',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Short Toast</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'Short',
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Hide Close Button</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This is a Toast',
                            disableCloseButton: true,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Hide Icon</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This is a Toast',
                            disableIcon: true,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Toast With Action</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This is a Toast',
                            disableCloseButton: true,
                            action: {
                                label: 'Click',
                                onClick: () => console.log('Action Clicked!'),
                            },
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const MultipleInstances = () => {
    const { makeToast } = useToast();
    const { makeToast: makeToast2 } = useToast();

    return (
        <>
            <GroupHelper gap={2}>
                <p>Long Toast</p>
                <Button
                    onClick={() =>
                        makeToast({
                            level: 'success',
                            message: 'This is from the first useToast instance',
                        })
                    }
                >
                    Show 1st Toast
                </Button>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Short Toast</p>
                <Button
                    onClick={() =>
                        makeToast2({
                            level: 'error',
                            message:
                                'This is from the second useToast instance',
                        })
                    }
                >
                    Show 2nd Toast
                </Button>
            </GroupHelper>
        </>
    );
};

export const Playground = () => {
    const { makeToast: makeToastTopRight } = useToast({ position: 'topRight' });
    const { makeToast: makeToastTopLeft } = useToast({ position: 'topLeft' });
    const { makeToast: makeToastBottomRight } = useToast({
        position: 'bottomRight',
    });
    const { makeToast: makeToastBottomLeft } = useToast({
        position: 'bottomLeft',
    });

    const [level, setLevel] = useState<
        'error' | 'warning' | 'info' | 'success'
    >('info');
    const [message, setMessage] = useState('This is a Toast');
    const [position, setPosition] = useState('topRight');
    const [autoClose, setAutoClose] = useState(true);
    const [showProgressBar, setShowProgressBar] = useState(true);
    const [autoCloseTime, setAutoCloseTime] = useState(5000);
    const [disableCloseButton, setDisableCloseButton] = useState(false);
    const [disableIcon, setDisableIcon] = useState(false);
    const [action, setAction] = useState(false);
    const [pauseOnHover, setPauseOnHover] = useState(true);

    const makeToast =
        // @ts-ignore
        {
            topRight: makeToastTopRight,
            topLeft: makeToastTopLeft,
            bottomRight: makeToastBottomRight,
            bottomLeft: makeToastBottomLeft,
        }[position] || makeToastTopRight;

    return (
        <>
            <GroupHelper gap={2}>
                <p>Message</p>
                <textarea
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Level</p>
                <form
                    onChange={(event) => {
                        // @ts-ignore
                        setLevel(event.target.value);
                    }}
                >
                    <input
                        type="radio"
                        id="info"
                        name="level"
                        value="info"
                        defaultChecked
                    />{' '}
                    <label htmlFor="info">Info</label>{' '}
                    <input
                        type="radio"
                        id="success"
                        name="level"
                        value="success"
                    />{' '}
                    <label htmlFor="success">Success</label>{' '}
                    <input
                        type="radio"
                        id="warning"
                        name="level"
                        value="warning"
                    />{' '}
                    <label htmlFor="warning">Warning</label>{' '}
                    <input type="radio" id="error" name="level" value="error" />{' '}
                    <label htmlFor="error">Error</label>
                </form>
            </GroupHelper>
            <GroupHelper gap={2}>
                <p>Position</p>
                <form
                    onChange={(event) => {
                        // @ts-ignore
                        setPosition(event.target.value);
                    }}
                >
                    <input
                        type="radio"
                        id="topRight"
                        name="pos"
                        value="topRight"
                        defaultChecked
                    />{' '}
                    <label htmlFor="topRight">Top Right</label>{' '}
                    <input
                        type="radio"
                        id="topLeft"
                        name="pos"
                        value="topLeft"
                    />{' '}
                    <label htmlFor="topLeft">Top Left</label>{' '}
                    <input
                        type="radio"
                        id="bottomRight"
                        name="pos"
                        value="bottomRight"
                    />{' '}
                    <label htmlFor="bottomRight">Bottom Right</label>{' '}
                    <input
                        type="radio"
                        id="bottomLeft"
                        name="pos"
                        value="bottomLeft"
                    />{' '}
                    <label htmlFor="bottomLeft">Bottom Left</label>
                </form>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={autoClose}
                        onChange={(e) => setAutoClose(e.target.checked)}
                    />{' '}
                    Auto Close
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={showProgressBar}
                        onChange={(e) => setShowProgressBar(e.target.checked)}
                    />{' '}
                    Show Progress Bar (must enable auto close)
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    Auto Close Time (ms){' '}
                    <input
                        type="number"
                        value={autoCloseTime}
                        onChange={(e) =>
                            setAutoCloseTime(parseInt(e.target.value, 10))
                        }
                    />
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={disableCloseButton}
                        onChange={(e) =>
                            setDisableCloseButton(e.target.checked)
                        }
                    />{' '}
                    Disable Close Button
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={disableIcon}
                        onChange={(e) => setDisableIcon(e.target.checked)}
                    />{' '}
                    Disable Icon
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={action}
                        onChange={(e) => setAction(e.target.checked)}
                    />{' '}
                    With Sample Action
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <label>
                    <input
                        type="checkbox"
                        checked={pauseOnHover}
                        onChange={(e) => setPauseOnHover(e.target.checked)}
                    />{' '}
                    Pause On Hover
                </label>
            </GroupHelper>
            <GroupHelper gap={2}>
                <Button
                    onClick={() =>
                        makeToast({
                            level,
                            message,
                            autoClose,
                            showProgressBar,
                            autoCloseTime,
                            disableCloseButton,
                            disableIcon,
                            pauseOnHover,
                            action: action
                                ? {
                                      label: 'Click',
                                      onClick: () =>
                                          console.log('Action clicked!'),
                                  }
                                : undefined,
                        })
                    }
                >
                    Show Toast
                </Button>
            </GroupHelper>
        </>
    );
};
