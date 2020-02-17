import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import  {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'


class SignUp extends React.Component
{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!=confirmPassword){
            alert('password does not match');
        return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(err)
        {
            console.log(err.message);
        }

    }
    handleChange=event=>{
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }
    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                 <h2> I do not have a account</h2>
                <span>Sign up with your email and password</span>
                    
                    
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                   
                    <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
                    <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='password'
            required
          />
           <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='confirm password'
            required
          />
           <CustomButton type='submit'>SIGN UP</CustomButton>
                    </form>
            </div>
        )
    }
}

export default SignUp;