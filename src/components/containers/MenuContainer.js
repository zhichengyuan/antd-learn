import {connect} from 'dva'
import Menu from '../Menu'
import {routerRedux} from 'dva'

const mapStateToProps = state => ({
    loginId:state.loginUser
})

const mapDispatchToProps = dispatch => ({
    async onLogin(loginId,loginPwd) {
        const result =  await dispatch({type:"loginUser/login",payload:{loginId,loginPwd}})
        console.log(result);
        if(result) {
            dispatch(routerRedux.push('/'))
        }else {
            window.alert('账号或密码错误')
        }
    },
    onLoginOut() {
        dispatch({type:'loginUser/loginOut'});
        dispatch(routerRedux.push('/login'))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Menu)