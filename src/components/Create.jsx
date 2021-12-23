import React, { Component } from "react";

export default class Create extends Component {
    render() {
        return (
            <form
                action=""
                onSubmit={function (e) {
                    //debugger;
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value // name이 desc인 값을 가져옴
                    );
                }.bind(this)}
            >
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea
                        type="text"
                        name="desc"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="description"
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="" />
                </p>
            </form>
        );
    }
}
