import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import API_KEY from './secret';


// Create a new component.
// This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
            // ES5 this.setState({ videos: videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this components generated HTML and render in DOM
ReactDOM.render(<App />, document.querySelector('.container'));