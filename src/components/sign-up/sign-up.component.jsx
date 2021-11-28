import React, {Component} from 'react';

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import {CustomButton, GoogleButton} from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";

class SignUp extends Component {

    constructor(args){
        super(args);
        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
    }

    handleSubmit = async e => {

        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Пароли не совпадают");
            return;
        }
        
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});

            this.setState({
               displayName: '',
               email: '',
               password: '',
               confirmPassword: ''
            });
        } catch (e) {
            console.error(e);
        }
    };

    handleChange = e => {

        const {value, name} = e.target;

        this.setState({ [name]: value} );
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">У меня еще нет аккаунта</h2>
                <span>Зарегистрируйтесь используя ваш email и пароль</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />

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

                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />


                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignUp;