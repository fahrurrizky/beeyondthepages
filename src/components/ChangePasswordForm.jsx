import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
  useToast,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const PasswordChangeForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is required"),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/,
        "Password must contain at least 6 characters, 1 symbol, and 1 uppercase letter"
      )
      .required("New Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { currentPassword, password, confirmPassword } = values;
      const token = localStorage.getItem("token");

      const data = {
        currentPassword,
        password,
        confirmPassword,
      };

      const config = {
        method: "patch",
        maxBodyLength: Infinity,
        url: "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      try {
        const response = await axios(config);
        console.log(response.data);
        navigate("/profilePage");
        setIsPasswordChanged(true);
        toast({
          title: "Password changed successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error changing password",
          description: error.response.data,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        console.log(error);
      }
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <Box bg={"rgba(255, 255, 255, 0.7)"} w={"full"} h={"full"} pt={"90px"}>
        <Box m="auto" mt={'50px'} p={6} w={"30%"}>
          <Heading as="h2" size="lg" mb={6} textAlign={"center"}>
            Change your password
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <FormControl id="currentPassword" mb={6}>
              <FormLabel>Current Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="currentPassword"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              {formik.touched.currentPassword && formik.errors.currentPassword && (
                <Text color="red">{formik.errors.currentPassword}</Text>
              )}
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>New Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              {formik.touched.password && formik.errors.password && (
                <Text color="red">{formik.errors.password}</Text>
              )}
            </FormControl>
            <FormControl id="confirmPassword" mb={6}>
              <FormLabel>Confirm New Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <Text color="red">{formik.errors.confirmPassword}</Text>
              )}
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              mb={6}
              width="full"
            >
              Change Password
            </Button>
          </form>
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

export default PasswordChangeForm;
