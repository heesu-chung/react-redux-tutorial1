import { connect } from "react-redux";
import Control from "../components/Control";

export default connect(null, function (dispatch) {
    return {
        //return 값으로 props 전달
        onClick: function (mode) {
            if (mode === "DELETE_PROCESS") {
                if (!window.confirm("Really?")) {
                    return;
                }
            }
            dispatch({ type: mode });
        },
    };
})(Control);
