import React, { Component } from "react";

export default class Nav extends Component {
    render() {
        //debugger; // 지시어 - 실행 멈추고 디버깅 모드 된다
        let tags = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let d = this.props.data[i];
            tags.push(
                <li key={d.id}>
                    <a
                        href="#"
                        data-id={d.id}
                        onClick={function (e) {
                            this.props.onClick(Number(e.target.dataset.id));
                            // 인자로 어떤 아이디 글이 클릭되었는지
                            // 객체의 타겟의 아이디값
                        }.bind(this)}
                    >
                        {d.title}
                    </a>
                </li>
            );
        }
        return (
            <nav>
                <ol>
                    {tags}

                    {/* <li>
                        <a href="html.html">HTML</a>
                    </li>
                    <li>
                        <a href="css.html">CSS</a>
                    </li>
                    <li>
                        <a href="javascript.html">JavaScript</a>
                    </li> */}
                </ol>
            </nav>
        );
    }
}
