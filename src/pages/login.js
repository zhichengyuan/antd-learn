import React,{useRef} from 'react'
import {history} from 'umi'
// import LoginForm from '../components/LoginForm'
import LoginFormContainer from '../components/containers/LoginFormContainer'

function login() {

    return (
        <div>
            <LoginFormContainer/>
        </div>
    )
}

login.title = '登录页面'

export default login;