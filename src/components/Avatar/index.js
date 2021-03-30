import React,{useState} from 'react'
import styles from './index.css'
import {Upload,Button,Spin} from 'antd'

/**
 * 得到头像上传区域的内容
 */
function getAvatarContent(imgUrl) {
    if(imgUrl) {
        // const url = `https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F984%2FceU7xYD3umwA.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619688472&t=65ddd333661e461cd49806eb0a56fb7d`
        const url = `http://49.235.59.159:3030${imgUrl}`
        return <img src={url} className={styles.avatarimg} alt=""/>
    }else {
        return <Button type="primary" >上传头像</Button>
    }
}
export default function index({value,onChange}) {
    //value表示图片地址
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Upload
            listType="picture-card"
            showUploadList={false}
            name="imgfile"
            action="/api/upload"
            accept=".jpg,.png,.gif,.bmp,.jiff"
            beforeUpload={() => {
                //发送服务器
                setIsLoading(true)
            }}
            onChange={data => {
                if(data.file.response) {
                    //服务器完成了响应
                    console.log(data.file.response)
                    onChange && onChange(data.file.response.data)
                    setIsLoading(false)
                }
            }}
        >
            <Spin spinning={isLoading}>
                <div className={styles.avatar}>
                    {getAvatarContent(value)}
                </div>
            </Spin>
            
            
        </Upload>
    )
}
