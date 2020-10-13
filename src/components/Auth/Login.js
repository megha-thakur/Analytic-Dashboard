// import React, { useCallback, useContext } from "react";
// import { Input } from 'antd';

// import { withRouter, Redirect } from "react-router";
// import app from "../../firebase";
// import { AuthContext } from "./auth";

// const Login = ({ history }) => {
//   const handleLogin = useCallback(
//     async event => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await app
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );

//   const { currentUser } = useContext(AuthContext);

//   if (currentUser) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <div>
//       <h1>Log in</h1>
//       <Input placeholder="Basic usage" />,
//       <form onSubmit={handleLogin}>
//         <label>
//           Email
//           <input name="email" type="email" placeholder="Email" />
//         </label>
//         <label>
//           Password
//           <input name="password" type="password" placeholder="Password" />
//         </label>
//         <button type="submit">Log in</button>
//       </form>
//     </div>
//   );
// };

// export default withRouter(Login);






import React, { Component } from 'react'
// import axios from 'axios';

import { Form, Input, Button, Checkbox } from 'antd';
const ROOT = process.env.REACT_APP_URL;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



const Login = ({ history }) => {
  // const onFinish = (values) => {
  //   fetch(`${ROOT}auth/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       phone: values.phoneNumber,
  //       password: values.password
  //     }),
  //   })
  //   .then(response => {
  //     const res = response.json()
  //     if (response.status === 200 && !!res.token && !!res.user) {
  //       localStorage.setItem('token', res.token)
  //       localStorage.setItem('user', res.user)
  //       history.push('/')
  //     }
  //     else {
  //       alert('Incorrect Credentials :(')
  //     }
  //   })
  // }


  const onFinish = (values) => {
    fetch(`${ROOT}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: values.phoneNumber,
        password: values.password
      }),
    })
    .then(responce => {
      if (responce.status === 200) {
        return responce.json()
      }
      else {
        // alert message
      }
    })
    .then(res => {
      debugger
      localStorage.setItem('token', res?.token)
      localStorage.setItem('user', res?.user)
      history.push('/')
    })
  }


    // axios.post(`${ROOT}auth/login`,
      // {
      //   phone: values.phoneNumber,
      //   password: values.password,
  //     },
  //   ).then(response => {
  //     if (response.data.token) {
  //       debugger
  //     }
  //   })


  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
        <Form
        style={{marginTop:"10%"}}
      {...layout}
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={{}} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

  );
};

export default Login