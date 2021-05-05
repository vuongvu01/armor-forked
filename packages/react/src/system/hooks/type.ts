export type MatchBreakpointFunctionType = (
    value: number,
    width: number,
) => boolean;

export type UseWindowUpdateCallbackArgumentType = {
    windowScrollTop: number;
    windowHeight: number;
};

export type UseWindowUpdateOptionsType = Partial<{
    reportWindowScrollTop: boolean;
    reportWindowHeight: boolean;
    enableInitialCall: boolean;
}>;
