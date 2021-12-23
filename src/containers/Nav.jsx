import { connect } from "react-redux";
import Nav from "../components/Nav";

export default connect(
    function (state) {
        return { data: state.contents };
    },
    function (dispatch) {
        return {
            onClick: function (id) {
                dispatch({ type: "READ", id: id });
            },
        };
    }
)(Nav); // Wrapping

// Nav에는 2개의 props가 필요할 듯
// - li 표현해줄 목록
// - click했을 때 상위 컴포넌트로 전달할 - redux에게 dispatch 할 props 으미
