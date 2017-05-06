import React, { Component } from "react";

class SongAlbumArt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "",
        };
    }

    render() {
        return (
            <div>
                <img src={this.state.url}/>
            </div>
        );
    }
}

export default SongAlbumArt;