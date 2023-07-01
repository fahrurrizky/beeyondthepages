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
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUsername } from "../../redux/AuthReduser";

const ChangeUsernameSchema = Yup.object().shape({
  currentUsername: Yup.string().required("Username is required"),
  newUsername: Yup.string()
    .matches(
      /^.*(?=.{6,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Username must contain at least characters, one uppercase, one number and one special case character"
    )
    .required("Username is required"),
});

export default function EditUserName({ isOpen, onClose }) {
  const { user } = useSelector((state) => state.authreducer);
  const navigate = useNavigate();
  function profilePage() {
    navigate("/profilePage");
  }
  const dispatch = useDispatch();
  const toast = useToast();

  const change = async (values, newValues) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const { currentUsername, newUsername } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changeUsername",
        {
          currentUsername: currentUsername,
          newUsername: newUsername,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ini respon changeusername", respon);
      toast({
        title: "Username change",
        description: "Please check your email to verification username change",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      profilePage();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "your password is not change",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      currentUsername: "",
      newUsername: "",
    },
    validationSchema: ChangeUsernameSchema,
    onSubmit: (values) => {
      change(values);
      onClose();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  isInvalid={
                    formik.touched.currentUsername &&
                    formik.errors.currentUsername
                  }
                >
                  <Input
                    required
                    placeholder="Current Username"
                    id="currentUsername"
                    name="currentUsername"
                    type="currentUsername"
                    value={formik.values.currentUsername}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.currentUsername &&
                    formik.errors.currentUsername && (
                      <FormErrorMessage>
                        {formik.errors.currentUsername}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.newUsername && formik.errors.newUsername
                  }
                >
                  <Input
                    required
                    placeholder="New Username"
                    mt={"20px"}
                    id="newUsername"
                    name="newUsername"
                    type="newUsername"
                    value={formik.values.newUsername}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.newUsername && formik.errors.newUsername && (
                    <FormErrorMessage>
                      {formik.errors.newUsername}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <ModalFooter>
                  <Button
                    onClick={onClose}
                    variant={'ghost'}
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