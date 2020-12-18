declare module '@storybook/addon-actions';
declare module '@storybook/addon-knobs';

declare module '*.jpg' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}
