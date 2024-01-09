import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';

import { 
    SignInUser,
    toggleClose,
    toggleOpen
 } from './../redux/actions/actions'

class SignInWith extends Component {

    render() {
    const responseGoogle = (res) => {
        console.warn("Response from google: ", res)
        let postData = {
            name: res.w3.ig,
            provider: 'google',
            email: res.w3.U3,
            provider_id: res.El,
            token: res.Zi.access_token,
            provider_pic: res.w3.Paa
        }
        console.log(postData)
        // build our user data
        this.props.SignInUser(postData)
        this.props.toggleClose()
    }

    const responseFacebook = (response) => {
        console.warn("Response from Facebook: ", response);
        const postData = {
            name: response.name,
            provider: 'facebook',
            email: response.email,
            provider_id: response.id,
            token: response.accessToken,
            provider_pic: response.picture.data.url
        };
        console.log(postData);
        // Build our user data
        this.props.SignInUser(postData);
        this.props.toggleClose();
    };

        return ( 
            <div>
                <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
                <button onClick={this.props.toggleClose} data-behavior="close-overlay" type="button" className="overlay-close"><i className="fa fa-times" aria-hidden="true"></i></button>
                <nav>
            <h2 className="grayed-heading center">Sign In Via Social Accounts:</h2>
            <ul className="omniauth-button-group">

                <li className="omniauth-button google">
                    <GoogleLogin className="button google"
                    clientId="985803993385-at96jj05f3fi1le6ifc4ivbsv88iq857.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                        <i className="fa fa-google"></i><span> SignIn with Google</span>
                    </GoogleLogin>
                </li>

                <li className="omniauth-button facebook">
                <FacebookLogin
                    appId="384210864100254"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    >
                </FacebookLogin>
                </li>
            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

export default connect(mapStateToProps, {
    toggleClose,
    toggleOpen,
    SignInUser
})(SignInWith);
