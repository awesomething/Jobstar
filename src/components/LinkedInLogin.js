import React, { Component } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';

class LinkedInPage extends Component {
    state = {
        code: '',
        errorMessage: '',
    };


    handleSuccess = (data) => {
        this.setState({
            code: data.code,
            errorMessage: '',
        });
    }

    handleFailure = (error) => {
        this.setState({
            code: '',
            errorMessage: error.errorMessage,
        });
    }

    render() {
       // const { code, errorMessage } = this.state;
        return (
            <div>
                <LinkedIn
                    clientId="770z1ckah38i54"
                    onFailure={this.handleFailure}
                    onSuccess={this.handleSuccess}
                    redirectUri="https://pairapp.io/referral/signup.php?aff=Pairapp"
                    renderElement={({ onClick, disabled }) => (
                        <button style={{ backgroundColor:'#2867B2',fontSize :'16px',color:"white",padding:"5px"}} onClick={onClick} disabled={disabled}>Get Referral Link</button>
                    )}
                >
                    {/* <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} /> */}
                </LinkedIn>
            </div>
        );
    }
}

export default LinkedInPage;