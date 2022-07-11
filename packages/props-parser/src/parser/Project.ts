import { createProgram, JsxEmit, Program } from 'typescript';
import { join } from 'path';
import { SourceFile } from './SourceFile';

export class Project {
    private program: Program;
    private knownFiles: Record<string, SourceFile> = {};
    private rootFile: string;

    constructor(private projectFolder: string, rootFilePath: string) {
        this.rootFile = join(this.projectFolder, rootFilePath);

        this.program = createProgram([this.rootFile], {
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
        return this.getSourceFile(this.rootFile);
    }
}
