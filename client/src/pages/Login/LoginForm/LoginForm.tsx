import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/core';
import { Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VARIANT_COLOR } from '../../../constants/constants';


interface LoginState {
  email: string,
  password: string
}

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {

  const resetState = (): void => {
    setValues({
      email: '',
      password: ''
    })
  }

  const [values, setValues] = useState<LoginState>({
    email: '',
    password: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const{ name, value } = e.target;
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inside LoginForm, the values are: ', values);
    resetState();
  }

  return (
    <Box textAlign = "left" my = {8}>
      <form onSubmit = {onLogin}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Email address</FormLabel>
          <Input name = "email" value = {values.email} onChange = {onChange} focusBorderColor = "teal.200" variant = "flushed" type = "email" placeholder = "Enter your email address" />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Password</FormLabel>
          <Input name = "password" value = {values.password} onChange = {onChange} focusBorderColor="teal.200" variant = "flushed" type = "password" placeholder = "Enter your password" />
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
export default LoginForm;