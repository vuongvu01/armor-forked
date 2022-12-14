import { extname } from 'path';
import config from './config';

const { messages } = config;

export function prefixWithAutoGeneratedMessage(input: string): string {
    return `
        ${messages.generatedFileWarning}

        ${input}
    `;
}

export function getIllustrationName(name: string): string {
    const extension = extname(name);
    const illustrationName = name.replace(extension, '');
    return illustrationName;
}
