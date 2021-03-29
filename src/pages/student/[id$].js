import React from 'react'

function Detail(props) {
    return (
        <div>
            <h1>修改学生页</h1>
            <h1>学生学号：{props.match.params.id}</h1>
        </div>
    )
}
Detail.wrappers = ['@/routes/PrivateRouter'];
export default Detail;