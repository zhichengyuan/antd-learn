import React,{useState,useEffect} from 'react'
import { Form,Spin, Input, Button,message, Checkbox,Radio,Switch ,Select } from 'antd';
import {addStudent,updateStudent,getStudentBySNo} from '../../services/student'
import {withRouter} from 'umi'
import Avatar from '../../components/Avatar'

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

  

function StudentForm( props) {
    // console.log(props);
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIntvalues()
    })
    //初始化数据
    const setIntvalues =() => {
      // console.log('props',props.updataMovie);
         
          if(props.sNo) {
            setIsLoading(true)
            getStudent(props.sNo)
            setIsLoading(false)
          }else {
            form.setFieldsValue({
              name:'',
              sNo:'',
              sex:0,
              isMonitor:false,
              birth:'',
              phone:'',
              address:'',
              email:'1798788388@qq.com',
            });
            // setUser()
            setIsLoading(false)
          }
          
          // console.log('props',props.updataMovie);
      }

    //根据学号获取学生
    async function getStudent(sNo) {
      
      const stu = await getStudentBySNo(sNo);
      console.log('学生',stu)
      form.setFieldsValue(stu);
      
    }

    //添加学生
    async function add1(stuObj) {
      const resp = await addStudent(stuObj);
      console.log(resp);
      if(resp.status === 'success') {
        message.success('添加学生成功',1).then(() => {
          props.history.push('/student');
          setIsLoading(false)
        });
        
      }else {
        message.error(resp.msg,2).then(() => {
          // props.history.push('/student');
          setIsLoading(false)
        });
      }
      
    }
  
    //更新学生
    async function upadtate(stuObj) {
      console.log(stuObj);
      const resp = await updateStudent(stuObj);
      if(resp.status === 'success') {
        message.success('修改学生成功',1).then(() => {
          props.history.push('/student');
          setIsLoading(false)
        });
        
      }else {
        message.error(resp.msg,2).then(() => {
          // props.history.push('/student');
          setIsLoading(false)
        });
      }
    }
    //提交
    const  onFinish = async (values) => {
        // const res = addStudent(values);
        // console.log(res);
        setIsLoading(true)
        if(props.sNo) {
          //修改学生
          upadtate(values)
        }else{
          //添加学生
          add1(values);
        }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    
      return (
        <Spin tip="提交中，请稍后...." spinning={isLoading}>
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
        >
          <Form.Item
            label="头像"
            name="avatar"
            rules={[
              {
                required: true,
                message: '请上传头像',
              },
            ]}
          >
            <Avatar/>
          </Form.Item>
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
            <Input 
            disabled={props.sNo !== undefined? true:false}/>
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
            <Input />
          </Form.Item>
          <Form.Item
            label="性别"
            name="sex"
          >
            <Radio.Group >
              <Radio.Button value={0}>男</Radio.Button>
              <Radio.Button value={1}>女</Radio.Button>
            </Radio.Group>
          </Form.Item>
    
          {/* <Form.Item
            label="班长"
            name="isMonitor"
            valuePropName="checked"
          >
            <Switch checkedChildren="开启" unCheckedChildren="关闭" />
          </Form.Item> */}
          <Form.Item label="出生日期" name='birth'
            rules={[
              {
                required: true,
                message: '请选择出生日期!',
              },
            ]}
          >
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
                message: '请填写手机号',
              },
              {
                pattern:/1\d{10}/,message:'请填写正确的手机号！'
              }
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="住址"
            name="address"
            rules={[
              {
                required: true,
                message: '请填写正确的住址!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              {
                required: true,
                message: '请填写邮箱!',
              },
              {
                pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:'邮箱格式不正确！'
              }
            ]}
          >
            <Input />
          </Form.Item>
    
          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Spin>
      )
}

export default withRouter(StudentForm)
