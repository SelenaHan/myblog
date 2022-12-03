import React from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlock(props) {
    return (
        <CopyBlock
            text={props.text}
            language={`jsx`}
            theme={dracula}
        />
    );
}
export default CodeBlock