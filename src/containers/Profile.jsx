import React, { Component } from "react";
import { SongContainer } from "./SongContainer";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trackIds: []
        };
    }

    componentWillMount() {
        HELPERS.getSongIds()
            .then(function(ids) {
                this.setState({
                    trackIds: ids
                });
            })
    }

    buildSongs() {
        return this.state.trackIds.map((id, i) => {
            return <SongContainer
                key={i}
                trackId={id}
            />;
        });
    }

    render() {
        return (
            <div>
                <h1>USER PROFILE</h1>
                {/*{this.buildSongs()}*/}
            </div>
        );
    }
}

export default Profile;