import { connect,routerRedux } from 'dva'

function PrivateRouter(props) {
    if(props.loginId) {
        //一登录
        return props.children
    }else {
        //未登录
        props.onNotLogin && props.onNotLogin();
        return null
    }
}
const mapStateToProps = state => ({
    loginId:state.loginUser
})
const mapDispatchToProps = dispatch => ({
    onNotLogin() {
        dispatch(routerRedux.push('/login'))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(PrivateRouter)
