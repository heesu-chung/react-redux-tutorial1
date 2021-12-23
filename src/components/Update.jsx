import React, { Component } from "react";

export default class Update extends Component {
    state = {
        id: this.props.id,
        title: this.props.title,
        desc: this.props.desc,
    };
    onChangeHandler(e) {
        this.setState({
            //onChange가 발생한 지점이 title이 된다
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <form
                action=""
                onSubmit={function (e) {
                    //debugger;
                    e.preventDefault();
                    this.props.onSubmit(
                        Number(e.target.id.value),
                        e.target.title.value,
                        e.target.desc.value // name이 desc인 값을 가져옴
                    );
                }.bind(this)}
            >
                <input type="hidden" name="id" value={this.state.id} />
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.title}
                    />
                </p>
                <p>
                    <textarea
                        type="text"
                        name="desc"
                        onChange={this.onChangeHandler.bind(this)}
                        placeholder="description"
                        value={this.state.desc}
                    ></textarea>
                </p>
                <p>
                    <input
                        type="submit"
                        onChange={this.onChangeHandler.bind(this)}
                        value=""
                    />
                </p>
            </form>
        );
    }
}
