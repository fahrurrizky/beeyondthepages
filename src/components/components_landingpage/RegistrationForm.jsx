import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .test("is-number", "Phone number must be a number", (value) =>
        /^[0-9]+$/.test(value)
      )
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Form submission
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/",
        values
      );
      console.log(response.data);
      // Perform registration logic here

    } catch (error) {
      console.error(error);
      // Handle the error and set field errors if necessary
      if (error.response && error.response.data) {
        const { data } = error.response;
        if (data.errors && typeof data.errors === "object") {
          Object.keys(data.errors).forEach((field) => {
            setFieldError(field, data.errors[field]);
          });
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
    >
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"90px"}>
        <Heading as="h3" size="lg" textAlign="center" mt="6">
          Register an Account
        </Heading>
        <Box maxW={"md"} mx={"auto"} mt="8" px="4">
          <Formik
            initialValues={{
              username: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <Stack spacing="4">
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.username && form.touched.username}
                      >
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="Enter your username"
                        />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="Enter your email address"
                        />
                        <FormErrorMessage>
                          {form.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.phone && form.touched.phone}
                      >
                        <FormLabel htmlFor="phone">Phone</FormLabel>
                        <Input
                          {...field}
                          id="phone"
                          placeholder="Enter your phone number"
                        />
                        <FormErrorMessage>
                          {form.errors.phone}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.password && form.touched.password}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                          />
                          <InputRightElement width="3rem">
                            <Button
                              h="1.5rem"
                              size="sm"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <ViewOffIcon />
                              ) : (
                                <ViewIcon />
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.confirmPassword &&
                          form.touched.confirmPassword
                        }
                      >
                        <FormLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FormLabel>
                        <InputGroup>
                          <Input
                            {...field}
                            id="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                          />
                          <InputRightElement width="3rem">
                            <Button
                              h="1.5rem"
                              size="sm"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? (
                                <ViewOffIcon />
                              ) : (
                                <ViewIcon />
                              )}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt="4"
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                    width="full"
                  >
                    Register
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Text mt="4" textAlign="center">
            Already have an account?{" "}
            <LinkChakra textColor={'teal'}>
            <Link to="/login">
              Login here <ExternalLinkIcon mx="2px" />
            </Link>
            </LinkChakra>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
