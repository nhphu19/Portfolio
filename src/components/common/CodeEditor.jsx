import React from 'react';
// import { Controlled as CodeMirror } from 'react-codemirror2';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/mode/css/css';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

function CodeEditor({ value, onChange, language }) {
    return (
        <div className="code-editor">
            <Editor
                value={value}
                onValueChange={(code) => onChange(code)}
                highlight={(code) => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                }}
            />
        </div>
    );
}

export default CodeEditor;
