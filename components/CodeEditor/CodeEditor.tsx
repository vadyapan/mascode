'use client';
import { FC, useEffect } from 'react';
import { CodeEditorProps } from '@/components/CodeEditor/CodeEditor.props';
import MonacoEditor, { loader } from '@monaco-editor/react';
import { Spinner } from '../Icons//Spinner/Spinner';
import styles from './CodeEditor.module.css';

export const CodeEditor: FC<CodeEditorProps> = ({
  codeChange,
  setCodeChange,
  userScheme,
}) => {
  const colorScheme = userScheme === 'light' ? 'vs' : 'vs-dark';
  const colorBackground = userScheme === 'light' ? '#ffffff' : '#161A25';

  useEffect(() => {
    loader.init().then((monaco) => {
      monaco.editor.defineTheme('myTheme', {
        base: colorScheme,
        inherit: true,
        rules: [],
        colors: {
          'editor.background': colorBackground,
          'editor.scrollbar': colorBackground,
          'editor.lineHighlightBackground': '#00000000',
          'editor.lineHighlightBorder': '#00000000',
          'editor.renderLineHighlight': 'none',
        },
      });
    });
  }, [colorScheme, colorBackground]);

  return (
    <MonacoEditor
      height="50vh"
      defaultValue={codeChange}
      defaultLanguage="javascript"
      theme="myTheme"
      className={styles.editor}
      onChange={(e) => setCodeChange(e || codeChange)}
      loading={<Spinner />}
      options={{
        wordWrap: 'on',
        folding: false,
        minimap: {
          enabled: false,
        },
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden',
          handleMouseWheel: false,
        },
        guides: {
          indentation: false,
        },
        overviewRulerBorder: false,
        overviewRulerLanes: 0,
        fontFamily: 'var(--font-fira)',
        fontSize: 15,
        lineNumbers: 'off',
        matchBrackets: 'never',
      }}
    />
  );
};
