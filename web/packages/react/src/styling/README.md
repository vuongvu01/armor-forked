Now:

~~~js
export const ActionButton = withStyles({
    root: {
        letterSpacing: "0.5px",
        borderRadius: "2px",
    },
})(({ ref, ...props }: ButtonProps) => <Button innerRef={ref} color="primary" {...props} />);
~~~

Should be:

~~~js
export const ActionButton = withStylesAndAttributes<PropsButtonType>({
    root: () => css`letter-spacing: 0.5px; border-radius: 2px;`,
}, {
    root: {
        primary,
    }
})(Button);
~~~
