import React, { Component } from 'react';
import marked from 'marked';

function Output({text}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
    );
}

export default Output;