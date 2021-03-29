import React from 'react'
import { Form, Input, Button, Checkbox,Radio,Switch ,Select } from 'antd';
const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };
  const createOptions=() => {
    const options =[];
    for(var i = 1980 ;i<=2010;i++) {
      options.push(<Select.Option key={i} value={i}>{i}</Select.Option>)
    }
    return options
  };

export default function StudentForm( props) {
    console.log(props);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    
      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="学号"
            name="sNo"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="姓名"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
            initialValue={0}
          >
            <Radio.Group >
              <Radio.Button value={0}>男</Radio.Button>
              <Radio.Button value={1}>女</Radio.Button>
            </Radio.Group>
          </Form.Item>
    
          <Form.Item
            label="班长"
            name="isMonitor"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch checkedChildren="开启" unCheckedChildren="关闭" />
          </Form.Item>
          <Form.Item label="出生日期" name='brith'>
          <Select>
           {createOptions()}
          </Select>
        </Form.Item>
        <Form.Item
            label="手机号"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="住址"
            name="address"
           
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
           
          >
            <Input />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )
}
