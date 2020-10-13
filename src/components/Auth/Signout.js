import React, { Component, Fragment } from 'react'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class SignOut extends React.Component {
    state = {
        loadings: [],
      };
      enterLoading = index => {
          
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = true;
         
    
          return {
            loadings: newLoadings,
          };
        });
      setTimeout(() => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = false;
  
          return {
            loadings: newLoadings,
          };
        });
      }, 6000);
    };


getSignOut(){
    localStorage.clear()
    this.props.history.push('/login')
}

    render(){
        const { loadings } = this.state;
        return(
            <Fragment>
            <Button
            style={{
                float:"right",
                margin: "10px",
                color:"#13c2c2",
                borderRadius: "8px",
                zIndex: 1
         }}
            // type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.getSignOut()            
            }
          >
          Sign Out
          </Button>
            </Fragment>
        )
    }
}

export default SignOut