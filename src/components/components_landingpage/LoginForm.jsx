import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../components_landingpage/Bee1.png";
import {useNavigate} from 'react-router-dom'

import { loginSuccess } from "../../redux/AuthReduser";
import {useSelector, useDispatch} from "react-redux";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Link as LinkChakra,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      // bgImage={
      //   "https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      // }
      // bgPosition="center"
      // bgRepeat="no-repeat"
      // h="800px"
    >
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"120px"}>
        {/* <center>
          <a href="/">
            <img src={logo} alt="Logo" width="300px" />
          </a>
        </center> */}
        <Box
          m="auto"
          // borderWidth="3px"
          // borderRadius="md"
          // borderColor={"black"}
          p={6}
          w={"30%"}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Log in to your account
          </Heading>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                  "Password must contain at least 6 characters, 1 symbol, and 1 uppercase letter"
                )
                .required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => { 
              axios
                .post(
                  "https://minpro-blog.purwadhikabootcamp.com/api/auth/login",
                  {
                    email: values.email,
                    password: values.password,
                  }
                )
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                  dispatch(loginSuccess(response.data.token))

                  // alert(response.data.message)
                  navigate('/')
                  setSubmitting(false);
                })
                .catch(function (error) {
                  console.log(error);
                  setSubmitting(false);
                });
            }}
          >
            <Form>
              <FormControl id="email" mb={3}>
                <FormLabel>Email</FormLabel>
                <Field
                  type="email"
                  name="email"
                  as={Input}
                  placeholder="Enter your email address"
                  // borderColor={"black"}
                />
                <ErrorMessage name="email" component={Text} color="red" />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    as={Input}
                    placeholder="Enter your password"
                    // borderColor={"black"}
                  />
                  <InputRightElement width="3rem">
                    <Button
                      // variant="link"
                      // colorScheme="black"
                      h="1.5rem"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon  />
                      ) : (
                        <ViewIcon  />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="password" component={Text} color="red" />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                mb={6}
                width="full"
                // variant={"outline"}
                // borderColor={"black"}
              >
                Log in
              </Button>
            </Form>
          </Formik>
          <Text>
            Forgot your password?{" "}
            <LinkChakra textColor={'teal'}>
            <Link to="/forgotpasword" Color={"teal"}>
              Reset Password <ExternalLinkIcon mx="2px" />
            </Link>
            </LinkChakra>
          </Text>
          <Text>
            Don't have an account?{" "}
            <LinkChakra textColor={'teal'}>
            <Link to="/register" >
              Sign up here <ExternalLinkIcon mx="2px" />
            </Link>
            </LinkChakra>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
