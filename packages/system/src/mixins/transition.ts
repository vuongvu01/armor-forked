import { durationNormal } from '../tokens';

export const transition = (
    transitions: Record<string, boolean | number>,
) => (): string => {
    return `transition: ${Object.keys(transitions)
        .map(property => {
            const transitionOption = transitions[property];
            let duration = `${durationNormal}ms`;
            if (typeof transitionOption === 'number') {
                duration = `${transitionOption}s`;
            }

            // todo: support different options here, like timing and duration
            return `${property} ${duration} ease`;
        })
        .join(',')};`;
};
