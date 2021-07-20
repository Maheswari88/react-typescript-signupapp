import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import { Button,Input,} from 'antd';

//creating mutation
const SIGNUP_MUTATION = gql`

  mutation signupMutation($email: String!,$password: String,$firstname: String!,$lastname: String!,$phonenumber: String!) {
  insert_employer_user(objects:
    {firstname: $firstname,
    lastname: $lastname,
    email: $email,
    password: $password,
    phonenumber: $phonenumber}) {
    returning {
      id
    }
  }
 }
`;



export default function SignUp(){
  const [signup] = useMutation(SIGNUP_MUTATION);

  const[formState,setFormState]=useState({
    firstName:'',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const onChangeFirstName=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormState({...formState,firstName: e.currentTarget.value, })
   };

   const onChangeLastName=(e: React.ChangeEvent<HTMLInputElement>)=>{
     setFormState({...formState,lastName: e.currentTarget.value })
    };

    const onChangeEmail=(e: React.ChangeEvent<HTMLInputElement>)=>{
     setFormState({...formState,email: e.currentTarget.value })
    };

    const onChangePassword=(e: React.ChangeEvent<HTMLInputElement>)=>{
     setFormState({...formState,password: e.currentTarget.value })
    };

    const onChangePhonenumber=(e: React.ChangeEvent<HTMLInputElement>)=>{
     setFormState({...formState,phoneNumber: e.currentTarget.value })
    };




    return(
       <form >
            <h2>Signup form</h2>

              <Input type="text" style={{ width: 500,marginBottom:'20px'}} placeholder="First name" value={formState.firstName}
                onChange={onChangeFirstName}
              />
            <div className="form-group">

              <Input type="text" style={{ width: 500,marginBottom:'20px'}} placeholder="Last name" value={formState.lastName}
               onChange={onChangeLastName}
              />
            </div>
            <div className="form-group">

              <Input type="text" style={{ width: 500,marginBottom:'20px'}} placeholder="email" value={formState.email}
              onChange={onChangeEmail}
              />
            </div>
            <div className="form-group">

              <Input type="password" style={{ width: 500,marginBottom:'20px'}} placeholder="Password" value={formState.password}
              onChange={onChangePassword}
              />
            </div>
            <div className="form-group">

              <Input type="text" style={{  width: 500,marginBottom:'20px'}} placeholder="Phonenumber" value={formState.phoneNumber}
               onChange={onChangePhonenumber}
              />
            </div>
            <Button type="primary" onClick={e=>{
        console.log(formState.firstName)
         e.preventDefault();
         signup({variables: {firstname: formState.firstName,lastname: formState.lastName,email: formState.email,phonenumber: formState.phoneNumber,password: formState.password, }});
       }}>Signup</Button>
       </form>
    );
}