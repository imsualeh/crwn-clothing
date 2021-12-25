import React from "react";

import FormInput from "../form-input/form-input-component";

import CustomButton from "../custom-button/custom-button.component";

import  { auth, creatUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confrimPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); 

        const { displayName , email, password, confrimPassword} = this.state;

        if(password !== confrimPassword){
            alert("Passwrod do not match");
            return;
        }
        try{

            const { user} = await auth.createUserWithEmailAndPassword(email, password);

         await creatUserProfileDocument(user, {displayName});

         this.setState({

            displayName : '',
            email : '',
            password : '',
            confrimPassword : ''

             });
            }
        catch(error){

            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        };

    render(){
  const { displayName , email, password, confrimPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span>Sign up with email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput 
                        type='text'
                        name = 'displayName'
                        value = { displayName }
                        onChange = {this.handleChange}
                        label='Display Name'
                        required

                    />
                    <FormInput 
                        type='email'
                        name = 'email'
                        value = { email }
                        onChange = {this.handleChange}
                        label='Email'
                        required

                    />
                    <FormInput 
                        type='password'
                        name = 'password'
                        value = { password }
                        onChange = {this.handleChange}
                        label='Password'
                        required

                    />
                    <FormInput 
                        type='password'
                        name = 'confrimPassword'
                        value = { confrimPassword }
                        onChange = {this.handleChange}
                        label='Confirm Password'
                        required


                    />
                        <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}


export default SignUp;
