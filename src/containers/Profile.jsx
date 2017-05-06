import React, { Component } from "react";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "",
        };
    }

    render() {
        return (
            <div>
                <h1>USER PROFILE</h1>
            </div>
        );
    }
}

export default Profile;