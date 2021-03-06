import {connect} from 'dva'
import LoginForm from '../LoginForm'
import {routerRedux} from 'dva'

const mapDispatchToProps = dispatch => ({
    async onLogin(loginId,loginPwd) {
        const result =  await dispatch({type:"loginUser/login",payload:{loginId,loginPwd}})
        console.log(result);
        if(result) {
            dispatch(routerRedux.push('/'))
        }else {
            window.alert('账号或密码错误')
        }
    }
})

export default connect(null,mapDispatchToProps)(LoginForm)