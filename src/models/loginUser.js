// import { routerRedux } from 'dva/router'
import { routerRedux } from 'dva';
export default {
    state:null,//默认为null，表示没有任何用户登录
    subscriptions:{
        syncLocalstorage({dispatch}) {
            //同步本地存储
            var loginId = localStorage.getItem('loginId');
            if(loginId) {
                //登陆过
                dispatch({type:'setLoginUser',payload:loginId})
            }
        }
    },
    reducers:{
        setLoginUser(state,action) {
            return action.payload;//通过payload传递登录成功的账号
        },
    },
    effects:{
        *login({payload},{put}) {
            const {loginId,loginPwd} = payload;
            if(loginId === 'admin' && loginPwd === '123123') {
                yield put({type:'setLoginUser',payload:loginId})
                localStorage.setItem('loginId',loginId);
                //跳转页面
                // yield put(routerRedux.push('/'))
                return true;
            }else {
                // window.alert('登录失败')
                console.log('登录失败');
                return false;
            }
        },
        *loginOut(action,{put}) {
            localStorage.removeItem('loginId');
            yield put({type:'setLoginUser',payload:null})
        }

    }
}