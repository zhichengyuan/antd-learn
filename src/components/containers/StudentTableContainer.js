import {connect} from 'dva'
import StudentTable from '../StudentTable'

const mapStateToProps = state => ({
    stus:state.students.result.datas,
    loading:state.loading.effects['students/fetchStudents']
})


export default connect(mapStateToProps)(StudentTable)