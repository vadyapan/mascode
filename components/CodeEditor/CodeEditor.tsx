'use client';
import { FC } from 'react';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';
import { javascript } from '@codemirror/lang-javascript';
import styles from './CodeEditor.module.css';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { CodeEditorProps } from '@/components/CodeEditor/CodeEditor.props';

const customTheme = EditorView.theme({
  '.cm-scroller': {
    fontSize: '15px',
    fontFamily: 'var(--font-jetbrains)',
    minHeight: '40vh',
  },
  '.cm-gutters': {
    height: '40vh',
  },
  '&.cm-focused': {
    outline: 'none',
  },
});

export const CodeEditor: FC<CodeEditorProps> = ({
  codeChange,
  setCodeChange,
  userScheme,
}: CodeEditorProps): JSX.Element => {
  return (
    <CodeMirror
      value={codeChange}
      theme={userScheme === 'light' ? githubLight : githubDark}
      extensions={[javascript(), customTheme]}
      className={styles.codeMirror}
      onChange={(e) => setCodeChange(e)}
    />
  );
};
