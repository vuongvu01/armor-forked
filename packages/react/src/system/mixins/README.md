Declaration in theme:

~~~jsx
const theme = make({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            ...
        },
    },
});
~~~

Use-cases for media:

1. In CSS with second argument
~~~jsx
export const ButtonRoot = styled.button<{
    theme: ThemeType;
    styles: StylesFunctionButtonType;
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
}>`
    ${({ theme }) => css`
        margin: 1rem;
        ${theme.breakpoints.up('sm', 'margin: 2rem;')}; // plain string
        ${theme.breakpoints.up('md', css` margin: 2rem; `)}; // css template
        padding: 1rem;
    `}
`;
~~~

2. In CSS as rule generator
~~~jsx
export const ButtonRoot = styled.button<{
    theme: ThemeType;
    styles: StylesFunctionButtonType;
    primary?: boolean;
    secondary?: boolean;
    link?: boolean;
}>`
    ${({ theme }) => css`
        margin: 1rem;
        ${theme.breakpoints.up('sm'}} {
            margin: 2rem;
        }
        padding: 1rem;
    `}
`;
~~~

2. useMediaQuery
~~~jsx
const match = useBreakpointUp('md');
~~~
