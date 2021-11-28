import React, {Component} from 'react';

import {signInWithGoogle} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
import {CustomButton, GoogleButton} from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";

class SignIn extends Component{

    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
      e.preventDefault();
      this.setState({email: '', password: ''});
    };


    handleChange = e => {

        const {value, name} = e.target;

        this.setState({ [name]: value} );
    };



    render() {
        return(
          <div className="sign-in">
              <h2>Авторизация</h2>

              <form onSubmit={this.handleSubmit}>
                  <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                  />

                  <FormInput
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      label="Password"
                      required
                  />

                  <div className="sign-in-buttons">
                      <CustomButton type="submit">
                          sign in
                      </CustomButton>
                      <GoogleButton onClick={
                          () => {
                              signInWithGoogle()
                                  //.then((r) =>  this.props.history.push("/"))
                                  .catch((r) => console.log(r));
                          }}>
                          sign in with google
                      </GoogleButton>
                  </div>
              </form>
          </div>
        );
    }

};

export default withRouter(SignIn);