import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from "./containers/Create";
import UpdateContainer from "./containers/Update";
import { connect } from "react-redux";
import React, { Component } from "react";
class App extends React.Component {
    render() {
        let article = null;
        if (this.props.mode === "READ") {
            article = <ReadContainer />;
        } else if (this.props.mode === "CREATE") {
            article = <CreateContainer />;
        } else if (this.props.mode === "WELCOME") {
            article = <ReadContainer />;
        } else if (this.props.mode === "UPDATE") {
            article = <UpdateContainer />;
        }
        return (
            <div className="App">
                <Header />
                <NavContainer />
                <ControlContainer />
                {article}
            </div>
        );
    }
}

export default connect(function (state) {
    return {
        mode: state.mode,
    };
})(App);
