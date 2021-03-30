import React from 'react'
import StudentForm from '../../components/StudentForm'
function Detail(props) {
    return (
        <div>
            
            <StudentForm sNo={props.match.params.id}/>
        </div>
    )
}
Detail.wrappers = ['@/routes/PrivateRouter'];
export default Detail;