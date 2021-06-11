export const createElement = (win: Window, html: string) => {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild!;
};
