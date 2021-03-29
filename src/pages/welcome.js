import React from 'react'
import {history} from 'umi'

function Welcome() {
    const loginId = localStorage.getItem('loginId')
    return (
        <div>
            h1 欢迎你，{loginId}
            <p>
                <button onClick={() => {
                    localStorage.removeItem("loginId")
                    history.push('/login')
                }}>注销</button>
            </p>
        </div>
    )
}
Welcome.title = '欢迎页'
Welcome.wrappers = ['@/routes/PrivateRouter']
export default Welcome;
