import React from 'react'
import StudentForm from '../../components/StudentForm'

function add() {
    return (
        <div>
            
            <StudentForm/>
        </div>
    )
}

add.wrappers = ['@/routes/PrivateRouter'];
export default add;