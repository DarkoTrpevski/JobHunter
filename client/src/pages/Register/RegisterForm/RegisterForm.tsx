import { Box, FormControl, FormLabel, Input, Text, Button } from '@chakra-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { VARIANT_COLOR } from '../../../constants/constants';

interface RegisterFormProps {}

interface RegisterState {
  username: string,
  email: string,
  password: string
}

export const RegisterForm: React.FC<RegisterFormProps> = () => {
  
  const resetState = (): void => {
    setValues({
      username: '',
      email: '',
      password: ''
    })
  }

  const [values, setValues] = useState<RegisterState>({
    username: '',
    email: '',
    password: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const{ name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inside RegisterForm, the values are: ', values);
    resetState();
  }

  return (
    <Box textAlign = "left" my = {8}>
      <form onSubmit = {onRegister}>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Your username</FormLabel>
          <Input name = "username" value = {values.username} onChange = {onChange} focusBorderColor = "teal.200" variant = "flushed"  type = "text" placeholder = "Enter your username" />
        </FormControl>
        <FormControl>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Email address</FormLabel>
          <Input name = "email" value = {values.email} onChange = {onChange} focusBorderColor = "teal.200" variant = "flushed" type = "email" placeholder = "Enter your email address" />
        </FormControl>
        <FormControl mt = {4}>
          <FormLabel color = {`${VARIANT_COLOR}.400`}>Password</FormLabel>
          <Input name = "password" value = {values.password} onChange = {onChange} focusBorderColor="teal.200" variant = "flushed" type = "password" placeholder = "Enter your password" />
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
export default RegisterForm;