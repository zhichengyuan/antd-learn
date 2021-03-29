import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function layout(props) {
    return (
        <>
            <Layout>
                <Header className={styles.header}>
                    {props.header}
                </Header>
                <Layout className={styles.main}>
                    <Sider>
                        {props.aside}
                    </Sider>
                    <Content className={styles.heightAuto}>
                        {props.children}
                    </Content>
                </Layout>
                {/* <Footer>Footer</Footer>s */}
            </Layout>
        </>
    )
}
layout.Proptypes = {
    header:PropTypes.node,
    aside:PropTypes.node,
    children:PropTypes.node
}
