import React, { PropTypes, Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    routes: PropTypes.array
};

export default App;
