import React from 'react'
import styles from './index.css'
import Layout from '../components/Layout'
import Aside from '../components/Aside'
import MenuContainer from '../components/containers/MenuContainer'

export default function index(props) {
    if(props.location.pathname === '/login') {
        //登录页
        return props.children;
    }else {
        return (
                <Layout
                    aside={<Aside/>}
                    header={<MenuContainer/>}
                    // aside='dddd'
                >
                    <div className={styles.main}>
                        {props.children}
                    </div>
                </Layout>
                
        )

    }
    
}