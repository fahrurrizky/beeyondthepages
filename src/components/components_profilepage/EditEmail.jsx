import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ChangeEmailSchema = Yup.object().shape({
  currentEmail: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  newEmail: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

export default function EditEmail({ isOpen, onClose }) {
  const toast = useToast();
  const navigate = useNavigate();
  function profilePage() {
    navigate("/profilePage");
  }
  const emailChange = async (values) => {
    const token = localStorage.getItem("token");
    const { currentEmail, newEmail } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeEmail",
        {
          currentEmail: currentEmail,
          newEmail: newEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(respon);
      toast({
        title: "Email change",
        description: "Please check your email and login again",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      profilePage();
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      currentEmail: "",
      newEmail: "",
    },
    validationSchema: ChangeEmailSchema,
    onSubmit: (values) => {
      emailChange(values);
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Email</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  isInvalid={
                    formik.touched.currentEmail && formik.errors.currentEmail
                  }
                >
                  <Input
                    required
                    placeholder="Current Email"
                    id="currentEmail"
                    name="currentEmail"
                    type="email"
                    value={formik.values.currentEmail}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.currentEmail &&
                    formik.errors.currentEmail && (
                      <FormErrorMessage>
                        {formik.errors.currentEmail}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.newEmail && formik.errors.newEmail}
                >
                  <Input
                    required
                    placeholder="New Email"
                    mt={"20px"}
                    id="newEmail"
                    name="newEmail"
                    type="email"
                    value={formik.values.newEmail}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.newEmail && formik.errors.newEmail && (
                    <FormErrorMessage>
                      {formik.errors.newEmail}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <ModalFooter>
                  <Button
                    onClick={onClose}
                    variant={'ghost'}
                    mr={3} 
                  >
                    Cancel
                  </Button>
                  <Button
                    ml={"20px"}
                    type="submit"
                    colorScheme="teal"
                  >
                    Change
                  </Button>
                </ModalFooter>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}