'use client';
import { FC, useEffect } from 'react';
import { CodeEditorProps } from '@/components/CodeEditor/CodeEditor.props';
import MonacoEditor, { loader } from '@monaco-editor/react';
import { Spinner } from '@/components/Spinner/Spinner';
import { editor } from 'monaco-editor';
import styles from './CodeEditor.module.css';
import { ColorScheme } from '@/types/interfaces';

export const CodeEditor: FC<CodeEditorProps> = ({
  userCode,
  setUserCode,
  userScheme,
  editorFontSize,
}) => {
  const colorScheme = userScheme === ColorScheme.LIGHT ? 'vs' : 'vs-dark';
  const colorBackground = userScheme === ColorScheme.LIGHT ? '#ffffff' : '#161A25';

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

  const handleCode = (editor: editor.IStandaloneCodeEditor): void => {
    editor.onDidChangeModelContent(() => {
      const newValue = editor.getValue();
      setUserCode(newValue);
    });
  };


  return (
    <MonacoEditor
      height="50vh"
      defaultValue={userCode}
      defaultLanguage="javascript"
      theme="myTheme"
      className={styles.editor}
      onMount={handleCode}
      loading={<Spinner />}
      options={{
        wordWrap: 'on',
        minimap: {
          enabled: false,
        },
        scrollbar: {
          horizontal: 'hidden',
        },
        guides: {
          indentation: false,
        },
        overviewRulerBorder: false,
        lineNumbersMinChars: 2,
        overviewRulerLanes: 0,
        fontSize: editorFontSize,
        fontFamily: 'var(--font-fira)',
        matchBrackets: 'never',
      }}
    />
  );
};
