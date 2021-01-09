import { Box, FormControl, FormLabel, Input, Text, Button } from '@chakra-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VARIANT_COLOR } from '../../../constants/constants';
import Alert from '../../../layouts/Alert/Alert';
import { setAlert } from '../../../redux/alert/alertActions';
import { registerUser } from '../../../redux/auth/authActions';
import useForm from '../../../hooks/useForm';

const initialValues = {
  username: "",
  email: "",
  password: "",
  password2: ""
}


interface RegisterFormProps {
  setAlert: (msg: string, alertType: string, timeOut?: number) => void,
  registerUser: (username:string, email:string, password:string) => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ setAlert, registerUser }) => {
  
  
  const [values, setValues, handleChange] = useForm(initialValues);
  const { username, email, password, password2 } = values;

  const resetState = (): void => {
    //Clear Form State
    setValues(initialValues)
  }


  const onRegister = async(e: React.FormEvent) => {
    e.preventDefault();
    if(password !== password2) {
      setAlert("Passwords do not match", 'danger')
    } else {
      console.log('REGISTER SUCCESS');

      registerUser(username, email, password);
    }
    resetState();
  }

  return (
    <Box textAlign = "left" my = {8}>
      <Alert />
      <form onSubmit = {onRegister}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Your username</FormLabel>
          <Input name = "username" value = {username} onChange = {handleChange} focusBorderColor = "teal.200" variant = "flushed"  type = "text" placeholder = "Enter your username" isRequired />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Email address</FormLabel>
          <Input name = "email" value = {email} onChange = {handleChange} focusBorderColor = "teal.200" variant = "flushed" type = "email" placeholder = "Enter your email address" isRequired />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Password</FormLabel>
          <Input name = "password" value = {password} onChange = {handleChange} focusBorderColor="teal.200" variant = "flushed" type = "password" placeholder = "Enter your password" isRequired />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Password</FormLabel>
          <Input name = "password2" value = {password2} onChange = {handleChange} focusBorderColor="teal.200" variant = "flushed" type = "password" placeholder = "Enter your password" isRequired />
        </FormControl>
        <Box color = {`${VARIANT_COLOR}.400`}>
        Already have an account?
          <Text fontWeight = "bold">
            <Link to = "/login"> Login here</Link>
          </Text>
        </Box>
        <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} width = "full" mt = {5} borderRadius = {50} paddingY = {6}>SIGN UP</Button>
      </form>
    </Box>
  )
}

export default connect(null, { setAlert, registerUser })(RegisterForm);