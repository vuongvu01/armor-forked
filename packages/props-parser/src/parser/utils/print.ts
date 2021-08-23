import {
    createPrinter,
    EmitHint,
    NewLineKind,
    Node,
    Statement,
} from 'typescript';

const printer = createPrinter({
    newLine: NewLineKind.LineFeed,
    removeComments: false,
});

export const print = (statement: Statement) =>
    printer.printNode(
        EmitHint.Unspecified,
        statement,
        // @ts-ignore
        '',
    );

export const printNode = (statement: Node) =>
    printer.printNode(
        EmitHint.Unspecified,
        statement,
        // @ts-ignore
        '',
    );
