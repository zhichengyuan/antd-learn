import {searchStudents} from '../services/student'
export default {
    state :{
        condition:{//搜索条件
            page:1,
            limit:10,
            key:'',
            sex:-1
        },
        result:{
            total:0,//总数据量
            datas:[]//学生数据
        }
    },
    subscriptions:{
        initStudents({dispatch}) {
            dispatch({
                type:'fetchStudents'
            })
        }
    },
    reducers:{
        setCondition(state,{payload}) {
            return {
                ...state,
                condition:{
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state,{payload}) {
            return {
                ...state,
                result:payload
            }
        }
    },
    effects:{
        /**
         * 根据当前的条件，搜索学生
         */
        *fetchStudents(action,{put,select,call}) {
            //拿到当前的搜索条件 
            const condition = yield select(state => state.students.condition);
            const result = yield call(searchStudents,condition);
            yield put({
                type:'setResult',
                payload:{
                    total:result.cont,
                    datas:result.datas
                }
            })
        }
    }
}