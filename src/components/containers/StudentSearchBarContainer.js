import {connect} from 'dva'
import StudentSearchBar from '../StudentSearchBar'

const mapStateToProps = state => ({
    defaultValue:{
        key:state.students.condition.key,
        sex:state.students.condition.sex
    }
})
const mapDispatchToProps = dispatch => ({
    onSearch(newCondition){
        console.log(newCondition);
        // //重新设置条件
        dispatch({
            type:'students/setCondition',
            payload:{
                ...newCondition,
                page:1
            }
        })
        //重新查询
        // dispatch({
        //     type:'students/fetchStudents',
        // })
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(StudentSearchBar)