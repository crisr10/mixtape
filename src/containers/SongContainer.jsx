import React, { Component } from "react";
import { SongAlbumArt } from "../components/SongAlbumArt";
import { SongColor } from "../components/SongColor";
import { SongEmotion } from "../components/SongEmotion";
import { SongNotes } from "../components/SongNotes";
import { SongTitle } from "../components/SongTitle";
import { SongSearch } from "../components/SongSearch";

const HELPERS = require("../utils/helpers");

class SongContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: this.props.key,
            trackId: this.props.trackId,
            song: {}
        };
    }

    componentWillMount() {
        HELPERS.getSongInfo()
            .then(function(song) {
                this.setState({
                    song: song
                });
            })
    }

    render() {
        return (
            <div>
                <SongAlbumArt
                    albumArtUrl={this.state.song.albumArtUrl}
                />
                <SongTitle
                    trackName={this.state.song.trackName}
                    artistName={this.state.song.artistName}
                    albumName={this.state.song.albumName}
                />
                <SongEmotion
                    emotion={this.state.song.emotion}
                />
                <SongColor
                    color={this.state.song.color}
                />
                <SongNotes
                    notes={this.state.song.notes}
                />
            </div>
        );
    }
}

export default SongContainer;