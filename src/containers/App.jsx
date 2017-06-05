import React, { PropTypes, Component } from "react";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>THIS IS WORKING</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    routes: PropTypes.array``
};

export default App;
