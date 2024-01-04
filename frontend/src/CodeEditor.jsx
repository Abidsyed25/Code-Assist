import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from "@codemirror/view";

const scrollbarThemeOption = EditorView.theme({
  "& .cm-scroller::-webkit-scrollbar": {
    width: "3px !important"
  },
  "& .cm-scroller::-webkit-scrollbar-track": {
    background: "#333"
  },
  "& .cm-scroller::-webkit-scrollbar-thumb": {
    background: "grey"
  },
  "& .cm-scroller::-webkit-scrollbar-thumb:hover": {
    background: "ivory"
  }
});

function CodeEditor({bool,value,setValue}) {

  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  
  return <CodeMirror value={value} height="400px" maxWidth='800px' theme={tokyoNight} extensions={[javascript({ jsx: true }),EditorView.lineWrapping,scrollbarThemeOption]} onChange={onChange} basicSetup={{

    foldGutter: false,
    allowMultipleSelections: false,
    indentOnInput: false,
    autocompletion:false,
    lineNumbers:bool,
    
    
  }} />;
}
export default CodeEditor;
