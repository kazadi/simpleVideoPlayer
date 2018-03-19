import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './secret';
import SearchBar from './components/search_bar';

// Create a new component.
// This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this components generated HTML and render in DOM
ReactDOM.render(<App />, document.querySelector('.container'));