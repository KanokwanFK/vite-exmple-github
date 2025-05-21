import { Card } from "antd";
import styles from "./styles/Register.module.css"
import {Button,Form,Input,Select,Radio} from 'antd';
//import { useDispatch } from "react-redux";
  
function Register (){
   // const [form] = Form.useForm();
    //const variant = Form.useWatch('variant', form);
    
    const {Option} = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
           <Option value="66">+66</Option>
            <Option value="99">+99</Option>
          </Select>
        </Form.Item>
      );

    //   const dispatch = useDispatch();

    return(
        <div className={styles.Bp}>
            <div className={styles.sm}>
                {/*<img src="https://i.pinimg.com/originals/e6/29/49/e6294964e26db35f05e41e25e689b19d.gif" alt="alone" ></img>*/}
            </div>
            <div>

            
            <div className={styles.icon}>
                 <h1 className={styles.h1}>Registration</h1>
                 <div>
                    <img  src="https://cdn-icons-png.freepik.com/256/1357/1357478.png" alt="alone" width={50}  />
                 </div>
            </div>

            <div className={styles.rg}>
                
                <Card>
                    {/* <div className="w-full items-center flex flex-col h-screen gap-2" /> */}
                    <Form.Item label="Full Name" name="Full Name">
                        <Input placeholder="Please enter your" />
                    </Form.Item>
                </Card>
                <Card>
                <Form.Item
                    label="Position you are applying for"
                    name="Position you are applying for"
                    rules={[{  message: 'Please input!' }]}
                >
                    <Select />
                </Form.Item>
                </Card>

                <Card>
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
                </Card>

                <Card>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ message: 'Please input your phone number!' }]}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                </Card>

                <Card>
                    <Form.Item label="Country" name="Country">
                        <Input placeholder="Please enter your" />
                    </Form.Item>
                </Card>

                <Card>
                    <Form.Item label="City" name="City">
                        <Input placeholder="Please enter your" />
                    </Form.Item>
                </Card>

                <Card>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Please enter your"/>
                    </Form.Item>
                </Card>

                <Card>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password  placeholder="Please enter your"/>
                    </Form.Item>
                </Card>

            </div>
            <Card >
                <h1>Gender</h1>
                <div className={styles.gd}>
                    <Radio name="Male">Male</Radio>
                    <Radio name="Female">Female</Radio>
                    <Radio name="Other">Other</Radio>
                    <Radio name="Prefer not to say">Prefer not to say</Radio>
                </div>
            </Card>

            <Card className={styles.button}>
                <Button  type="primary" htmlType="submit" >
                    Next Step
                </Button>
            </Card>

        </div>

        </div>
    )
}

export default Register;