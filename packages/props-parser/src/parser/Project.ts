import { createProgram, JsxEmit, Program } from 'typescript';
import { join } from 'path';
import { SourceFile } from './SourceFile';

export class Project {
    private program: Program;
    private knownFiles: Record<string, SourceFile> = {};

    constructor(private projectFolder: string) {
        const rootFile = join(
            projectFolder,
            'packages/react/src/components/index.ts',
        );

        this.program = createProgram([rootFile], {
            allowJs: true,
            jsx: JsxEmit.React,
        });
    }

    public getSourceFile(fileName: string) {
        if (!(fileName in this.knownFiles)) {
            const file = this.program.getSourceFile(fileName);
            if (file) {
                this.knownFiles[fileName] = new SourceFile(file);
            }
        }

        return this.knownFiles[fileName];
    }

    public getRootSourceFile() {
        const rootFile = join(
            this.projectFolder,
            'packages/react/src/components/index.ts',
        );

        return this.getSourceFile(rootFile);
    }
}
