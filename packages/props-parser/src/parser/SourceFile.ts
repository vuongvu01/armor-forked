import {
    isExportDeclaration,
    isImportDeclaration,
    isTypeAliasDeclaration,
    NodeArray,
    SourceFile as TSSourceFile,
    TypeNode,
} from 'typescript';
import { isAsteriskExportDeclaration } from './utils/is';

type SourceFileReferenceType = {
    module: string;
    absolutePath: string;
};

type SourceFileImportedSymbolsListType = Record<
    string,
    SourceFileReferenceType
>;

type SourceFileTypeAliasListType = Record<string, TypeNode>;

type AsteriskReExportsListType = SourceFileReferenceType[];

export class SourceFile {
    private importedSymbolList?: SourceFileImportedSymbolsListType;
    private reExportedSymbolList?: SourceFileImportedSymbolsListType;
    private typeAliasList?: SourceFileTypeAliasListType;
    private asteriskReExportsList?: AsteriskReExportsListType;

    constructor(private sourceFile: TSSourceFile) {}

    public get absolutePath() {
        return this.sourceFile.fileName;
    }

    public get nodes() {
        return (this.sourceFile.statements as unknown) as NodeArray<TypeNode>;
    }

    public isLocalTypeName(name: string) {
        return name in this.typeAliases;
    }

    public isExtraneousTypeName(name: string) {
        return this.isImportedTypeName(name) || this.isReExportedTypeName(name);
    }

    public isImportedTypeName(name: string) {
        return name in this.importedSymbols;
    }

    public isReExportedTypeName(name: string) {
        return name in this.reExportedSymbols;
    }

    public getTypeNameSourceFileAbsolutePath(name: string) {
        if (this.isImportedTypeName(name)) {
            return this.importedSymbols[name].absolutePath;
        }
        if (this.isReExportedTypeName(name)) {
            return this.reExportedSymbols[name].absolutePath;
        }

        return null;
    }

    public get importedSymbols() {
        if (!this.importedSymbolList) {
            const result: SourceFileImportedSymbolsListType = {};

            this.nodes.forEach(node => {
                if (isImportDeclaration(node)) {
                    const specifiers =
                        // @ts-ignore
                        node.importClause?.namedBindings?.elements;
                    // @ts-ignore
                    const module = node.moduleSpecifier.text;

                    if (specifiers) {
                        specifiers.forEach((specifier: TypeNode) => {
                            // @ts-ignore
                            const specifierName = specifier.name.escapedText;

                            result[specifierName] = {
                                module,
                                // @ts-ignore
                                absolutePath: this.sourceFile.resolvedModules.get(
                                    module,
                                ).resolvedFileName,
                            };
                        });
                    }
                }
            });

            this.importedSymbolList = result;
        }

        return this.importedSymbolList;
    }

    public get reExportedSymbols() {
        if (!this.reExportedSymbolList) {
            const result: SourceFileImportedSymbolsListType = {};

            this.nodes.forEach(node => {
                if (isExportDeclaration(node)) {
                    const specifiers =
                        // @ts-ignore
                        node.exportClause?.elements;
                    // @ts-ignore
                    const module = node.moduleSpecifier.text;

                    if (specifiers) {
                        specifiers.forEach((specifier: TypeNode) => {
                            // @ts-ignore
                            const specifierName = specifier.name.escapedText;

                            result[specifierName] = {
                                module,
                                // @ts-ignore
                                absolutePath: this.getResolvedModuleAbsolutePath(
                                    module,
                                ),
                            };
                        });
                    }
                }
            });

            this.reExportedSymbolList = result;
        }

        return this.reExportedSymbolList;
    }

    public getTypeAlias(name: string) {
        return this.typeAliases[name] || null;
    }

    public get typeAliases() {
        if (!this.typeAliasList) {
            const result: SourceFileTypeAliasListType = {};

            this.nodes.forEach(node => {
                if (isTypeAliasDeclaration(node)) {
                    // @ts-ignore
                    const aliasName = node.name.escapedText;
                    // @ts-ignore
                    result[aliasName] = node.type;
                }
            });

            this.typeAliasList = result;
        }

        return this.typeAliasList;
    }

    public get asteriskReExports() {
        if (!this.asteriskReExportsList) {
            const result: AsteriskReExportsListType = [];

            this.nodes.forEach(node => {
                if (isAsteriskExportDeclaration(node)) {
                    // @ts-ignore
                    const module = node.moduleSpecifier.text;
                    // @ts-ignore
                    result.push({
                        module,
                        // @ts-ignore
                        absolutePath: this.getResolvedModuleAbsolutePath(
                            module,
                        ),
                    });
                }
            });

            this.asteriskReExportsList = result;
        }

        return this.asteriskReExportsList;
    }

    public getResolvedModuleAbsolutePath(moduleName: string) {
        // @ts-ignore
        return this.sourceFile.resolvedModules.get(moduleName).resolvedFileName;
    }

    public get TSSourceFile() {
        return this.sourceFile;
    }
}
