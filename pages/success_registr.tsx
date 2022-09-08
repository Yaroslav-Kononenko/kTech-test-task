import 'antd/dist/antd.css';
import { Button } from 'antd';
import React from 'react';

type Props = {
  firstname?: string;
  setFormData: (data: Validation) => void;
}

const Success_registr: React.FC<Props> = ({firstname, setFormData}) => {
  return (
    <div className="Success_registr">
      <h2>
        {firstname && (
        `${firstname}, your registration was successfull !!!`
        )}
      </h2>

      <Button 
        type="primary" 
        shape="round" 
        htmlType="submit" 
        value="large"
        style={{background: `#379AD8`}}
        className="Form-button"
        onClick={() => setFormData(undefined)} 
        block
      >
        Return to SignIn Form
      </Button>
    </div>
  )
}

export default Success_registr;
