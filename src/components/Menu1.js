import React from 'react'
import {NavLink,history} from 'umi'

export default function Menu() {
    return (
        <div>
            <NavLink to='/'>首页</NavLink>
            <button onClick={() => {
                history.push('/a')
            }}>a页面</button>
            <NavLink to='/b'>b页</NavLink>
            <button onClick={() => {
                history.push('/sub')
            }}>sub页面</button>
            <button onClick={() => {
                history.push('/sub/sdsdsd/ididid')
            }}>跳转可选参数的页面</button>
            <NavLink to='/counter'>计数器</NavLink>
        </div>
    )
}
