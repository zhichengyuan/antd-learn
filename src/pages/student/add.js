import React from 'react'
import StudentForm from '../../components/StudentForm'

function add() {
    return (
        <div>
            <h1>添加学生页</h1>
            <StudentForm/>
        </div>
    )
}

add.wrappers = ['@/routes/PrivateRouter'];
export default add;