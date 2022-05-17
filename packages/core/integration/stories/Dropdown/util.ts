export function isInViewport(element: Element): boolean {
    const { top, left, bottom, right } = element.getBoundingClientRect();

    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;

    return top >= 0 && left >= 0 && bottom <= height && right <= width;
}
