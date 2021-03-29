import React, { useState,useEffect} from 'react';
import { AutoComplete } from 'antd';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});


export default function test() {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const onSearch = (searchText) => {
        console.log('1111111111')
        setOptions(
          !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
      };
    
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    
    const onChange = (data) => {
        console.log(data);
        setValue(data);
    };

    return (
        <div>
            <AutoComplete
                options={options}
                style={{
                width: 200,
                }}
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={onChange}
                placeholder="input here"
            />
        </div>
    )
}
