import React, { Component } from "react";

class SongSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: []
        };
    }

    componentDidMount() {
        $("#searchInput").autocomplete({
            source: this.state.source
        })
    }

    songSearch(e) {
        HELPERS.searchSong(e.target.value)
            .then(function(results) {
                if (results) {
                    console.log(results);
                    this.setState({
                        source: results
                    });
                }
            })
    }

    render() {
        return (
            <div>
                <label>
                    Search
                    <input
                        id="searchInput"
                        onChange={this.songSearch}
                        type="text"
                    />
                </label>
            </div>
        );
    }
}

export default SongSearch;