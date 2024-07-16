import * as React from 'react';
import { Dispatch, Extension, ExtensionProps } from '../types';
import { EditorState } from 'prosemirror-state';
export default class Emphasis extends Extension {
    constructor(props?: ExtensionProps);
    get name(): string;
    get group(): string;
    get showMenu(): boolean;
    get schema(): import("../types").ExtensionSchema | {
        group: string;
        parseDOM: {
            tag: string;
            priority: string;
            style: string;
        }[];
        toDOM: () => (string | {
            class: string;
            style: string;
        })[];
    };
    get icon(): React.JSX.Element;
    active(state: EditorState): boolean;
    onClick(state: EditorState, dispatch: Dispatch): void;
}
