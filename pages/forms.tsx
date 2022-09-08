import { Tabs } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import SignUp from './signup';

type Props = {
  formData: Validation;
  setFormData: (data: Validation) => void;
}

const Forms: React.FC<Props> = ({ formData, setFormData }) => {

  const items = [
    { label: 'Individual', key: 'item-1', 
      children:           
        <SignUp 
          fname={`First name`} 
          lname={`Last name`}
          mail_title={`Email`}
          fname_placeholder={`Jacob`}
          lname_placeholder={`McKinney`}
          email_placeholder={`youremail@mail.com`}
          formData={formData}
          setFormData={setFormData}
        /> 
    }, 
    { label: 'Organization', key: 'item-2', 
      children: 
        <SignUp 
          fname={`Your company name`} 
          lname={`Company address`}
          mail_title={`Company email`}
          fname_placeholder={`KeyToTech`}
          lname_placeholder={`290 Bremner Blvd, Toronto`}
          email_placeholder={`companyemail@mail.com`}
          formData={formData}
          setFormData={setFormData}
        /> 
    },
    { label: 'Temple', key: 'item-3', 
      children: 
        <SignUp 
          fname={`Temple name`} 
          lname={`Temple address`}
          mail_title={`Temple уmail`}
          fname_placeholder={`Rosenberg Synagogue`}
          lname_placeholder={`29 Shchekavitska Street, Kyiv`}
          email_placeholder={`templemail@mail.com`}
          formData={formData}
          setFormData={setFormData}
        />
    },
  ];
  

  return (
    <div className="Forms">
      <h1 className="Forms__title">Sign Up as</h1>
      
      <Tabs
        defaultActiveKey="1" 
        items={items}
        className="Forms__nav" 
        centered
      />
    </div>
  );
};


export default Forms;
