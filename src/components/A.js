import React from 'react'
import { withRouter } from "umi";

function A(props) {
    console.log('高阶组件的封装',props)
    return (
        <div>
            {props.location.pathname}
        </div>
    )
}

export default withRouter(A);
