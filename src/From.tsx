import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import style from "./styles/From.module.css"

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const Froms = () => (
    <div className={style.body}>
       <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
      <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{  message: 'Please input your username!' }]}
        >
        <Input placeholder="Username"/>
      </Form.Item>

      <Form.Item
            name="email"
            label="Email"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input placeholder="Email"/>
        </Form.Item>
  
        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{  message: 'Please input your password!' }]}
        >
         <Input.Password placeholder="Password"/>
        </Form.Item>
  
        {/* <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
  
        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
        </Form.Item>

    </Form> 
    
    </div>
    
  );

export default Froms;