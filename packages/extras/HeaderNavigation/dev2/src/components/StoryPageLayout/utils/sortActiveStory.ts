/* eslint-disable no-nested-ternary */

export const checkLinkActive = (url: string) => window.location.search === url;

export const checkComponentActive = ({ stories }) => stories.length > 0;

export const sortActiveStory = (storyA, storyB) =>
    checkComponentActive(storyB) ? 1 : checkComponentActive(storyA) ? -1 : 0;
