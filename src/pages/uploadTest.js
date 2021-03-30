import React,{useState} from 'react'
import Avatar from '../components/Avatar'

export default function uploadTest() {
    const [imgUrl, setImgUrl] = useState('')
    return (
        <div>
            <Avatar
                value={imgUrl}//图片地址
                onChange={newValue => {
                    setImgUrl(newValue)
                }}
            />
        </div>
    )
}
