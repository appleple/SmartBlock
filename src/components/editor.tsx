import * as React from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { useView } from '../utils/hooks';

const { useEffect } = React;

export type EditorProps = {
  onChange(state: EditorState, dispatch: typeof EditorView.prototype.dispatch): any;
  attributes?: any; //todo
  nodeViews?: any; // todo
  autoFocus?: boolean;
  options: any; // todo
  render?({
    editor,
    view
  }: {
    editor: React.ReactNode;
    view: EditorView;
  }): React.ReactNode;
  editorRef?: React.MutableRefObject<HTMLDivElement | null>;
};

export default function Editor (props: EditorProps) {
  const view = useView(props);

  useEffect(() => {
    if (props.editorRef.current) {
      props.editorRef.current.appendChild(view.dom);
    }
    if (props.autoFocus) {
      view.focus();
    }
  }, [props.autoFocus, props.editorRef, view]);

  const editor = <div ref={props.editorRef} />;
  return props.render({
    editor,
    view,
  });
};
