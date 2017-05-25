import React, { Component } from "react";
import { HuePicker } from "react-color";

class SongColor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "FFF",
        };
    }

    updateColor(color) {
        this.setState({
            color: color.hex
        })
    }

    render() {
        return (
            <div>
                <HuePicker
                    color={this.state.color}
                    onChangeComplete={this.updateColor}
                />
            </div>
        );
    }
}

export default SongColor;