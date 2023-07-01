import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ExternalLinkIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "./components_landingpage/Bee1.png";
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
import axios from "axios";

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const url = window.location.href.split("/")
  const token = url[url.length - 1];
  const navigate = useNavigate();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/resetPass",
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        setSubmitting(false);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
        setSubmitting(false);
      });
  };

  return (
    <Box>
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"90px"}>
        <Box
          m="auto"
          p={6}
          w={"30%"}
        >
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Reset your password
          </Heading>
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              password: Yup.string()
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
                  "Password must contain at least 6 characters, 1 symbol, and 1 uppercase letter"
                )
                .required("New Password is required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormControl id="password" mb={6}>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    as={Input}
                    placeholder="Enter your password"
                  />
                  <InputRightElement width="3rem">
                    <Button
                      h="1.5rem"
                      size="sm"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon boxSize={4} />
                      ) : (
                        <ViewIcon boxSize={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="password" component={Text} color="red" />
              </FormControl>
              <FormControl id="confirmPassword" mb={6}>
                <FormLabel>Confirm New Password</FormLabel>
                <InputGroup>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    as={Input}
                    placeholder="Enter your password"
                  />
                  <InputRightElement width="3rem">
                    <Button
                      size="sm"
                      h="1.5rem"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <ViewOffIcon boxSize={4} />
                      ) : (
                        <ViewIcon boxSize={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage name="confirmPassword" component={Text} color="red" />
              </FormControl>
              <Button
                type="submit"
                colorScheme="teal"
                mb={6}
                width="full"
              >
                Reset Password
              </Button>
            </Form>
          </Formik>
          <Text>
            Remember your password?{" "}
            <LinkChakra textColor={'teal'}>
              <Link to="/login">
                Log in here <ExternalLinkIcon mx="2px" />
              </Link>
            </LinkChakra>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
