import React from 'react'
import styles from './index.css'
import { Row, Col,Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export default function Menu(props) {
    return (
        <Row className={styles.header} justify="space-between">
            <Col>
                <h1>欢迎使用学生管理系统</h1>
            </Col>
            <Col>
                <span>欢迎你</span>
                <span>{props.loginId}</span>
                <Button onClick={() => {
                    props.onLoginOut && props.onLoginOut();
                }} 
                type="primary" 
                shape="circle">
                    <LogoutOutlined />
                </Button>
                {/* <button onClick={() => {
                    props.onLoginOut && props.onLoginOut();
                }}>退出登录</button> */}
            </Col>
        </Row>
    )
    // return (
    //     <div className={styles.menu}>
    //         <h1 className={styles.title}>欢迎使用学生管理系统</h1>
    //         <div className={styles.loginInfo}>
    //             <span>欢迎你</span>
    //             <span>{props.loginId}</span>
    //             <button onClick={() => {
    //                 props.onLoginOut && props.onLoginOut();
    //             }}>退出登录</button>
    //         </div>
    //     </div>
    // )
}
