import { Box, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/core';
import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { VARIANT_COLOR } from '../../../constants/constants';
import Alert from '../../../layouts/Alert/Alert';
import { setAlert } from '../../../redux/alert/alertActions';
import { loginUser } from '../../../redux/auth/authActions';


interface LoginState {
  email: string,
  password: string
}

interface LoginFormProps {
  loginUser: (email:string, password:string) => void,
}

export const LoginForm: React.FC<LoginFormProps> = ({ loginUser }) => {

  const [values, setValues] = useState<LoginState>({
    email: '',
    password: ''
  })
  const { email, password } = values;

  const resetState = (): void => {
    setValues({
      email: '',
      password: ''
    })
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // setAlert("Passwords do not match", 'danger')
    loginUser(email, password);
    resetState();
  }

  return (
    <Box textAlign = "left" my = {8}>
      <Alert />
      <form onSubmit = {onLogin}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Email address</FormLabel>
          <Input name = "email" value = {email} onChange = {onChange} focusBorderColor = "teal.200" variant = "flushed" type = "email" placeholder = "Enter your email address" />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Password</FormLabel>
          <Input name = "password" value = {password} onChange = {onChange} focusBorderColor="teal.200" variant = "flushed" type = "password" placeholder = "Enter your password" />
        </FormControl>
        <Box color = {`${VARIANT_COLOR}.400`}>
          Don't have an account?
          <Text fontWeight = "bold">
            <Link to = "/register"> Register here</Link>
          </Text>
        </Box>
        <Button type = "submit" variant = "solid" variantColor = {VARIANT_COLOR} width = "full" mt = {5} borderRadius = {50} paddingY = {6}>SIGN IN</Button>
      </form>
    </Box>
  )
}



export default connect(null, { loginUser })(LoginForm);