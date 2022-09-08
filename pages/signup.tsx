import { Button, Form, Input } from 'antd';
import React from 'react';
import Image from 'next/image';
import google_signup from '../static/google_signup.svg';
import fb_signup from '../static/fb_signup.svg';
import 'antd/dist/antd.css';

type Props = {
  fname: string;
  lname: string;
  mail_title: string;
  fname_placeholder: string;
  lname_placeholder: string;
  email_placeholder: string;
  formData: Validation;
  setFormData: (data: Validation) => void;
}

const SignUp: React.FC<Props> = ({
  fname,
  lname,
  mail_title,
  fname_placeholder,
  lname_placeholder,
  email_placeholder,
  formData,
  setFormData
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setFormData({...values});
    console.log('Success:', formData);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        name="signupform"
        labelCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="Forms__form"
        layout="vertical"
      >
        <Form.Item label={fname}>
          <Form.Item
            label="First name"
            noStyle
            name="firstname"
            rules={[{ required: true, message: 'Please input your first name!' },
              { min: 2, message: 'First name must be at least 2 characters'}
            ]}
          >

            <Input placeholder={fname_placeholder}/>
          </Form.Item>
        </Form.Item> 

        <Form.Item label={lname}>
          <Form.Item
            noStyle
            name="lastname"
            rules={[{ required: true, message: 'Please input your last name!' },
              { min: 2, message: 'Last name must be at least 2 characters'}
            ]}
          >

            <Input placeholder={lname_placeholder}/>
          </Form.Item>
        </Form.Item>

        <Form.Item label={mail_title}>
          <Form.Item
            noStyle
            name="email"
            rules={[{ required: true, message: 'Please input your email!' },
              { type: 'email', message: "Please enter a valid email"}
            ]}
          >

            <Input placeholder={email_placeholder}/>
          </Form.Item>
        </Form.Item>

        <Form.Item label="Password">
          <Form.Item
            noStyle
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }, 
              { min: 6, message: 'Password must be at least 6 characters'}
            ]}
          >

            <Input.Password />
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Form.Item noStyle>
            <Button 
              type="primary" 
              shape="round" 
              htmlType="submit" 
              value="large"
              style={{background: `#379AD8`}}
              className="Form-button" 
              block
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form.Item>
      </Form >

      <div className="Form__s-media-signup S-media">
        <span className="S-media__title">
          Or Sign Up with
        </span>
        
        <div className="S-media__auth-methods">
          <a href="">
            <Image 
              src={google_signup} 
              alt="google_signup" 
              className="SignUpLogo"
            />
          </a>

          <a href="">
            <Image 
              src={fb_signup} 
              alt="fb_signup" 
              className="SignUpLogo"
            />
          </a>
        </div>

        <div className="S-media__agreements">
          <a href="https://www.termsfeed.com/live/845fc59d-05ee-44b6-800d-d4aaa882659f;">
            {`Terms & conditions`}
          </a>
          {` / `}
          <a href="">
            Privacy policy
          </a>
        </div>
      </div>
    </>
  )
};

export default SignUp;
