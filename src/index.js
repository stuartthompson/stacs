import React from 'react';
import ReactDOM from 'react-dom';
import Site from './Site';
import * as serviceWorker from './serviceWorker';

/**
 * Renders the root of the website.
 */
ReactDOM.render(<Site />, document.getElementById('root'));

serviceWorker.unregister();