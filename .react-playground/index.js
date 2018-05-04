
        import React from 'react';
        import ReactDom from 'react-dom';
        import Playground from 'react-playground-kit';
        import * as module from 'f:/Training/tests/src/App.js';

        ReactDom.render(React.createElement(Playground, { module }), document.getElementById('app'));
    