import React from 'react'

export default function HandleTitle(props) {
    console.log(props)
    return (
        <div>
            <h1>渲染标题</h1>
            {props.children}
        </div>
    )
}
