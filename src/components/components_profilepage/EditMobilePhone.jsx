import {
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
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const PhoneSchema = Yup.object().shape({
  currentPhone: Yup.string().required("Phone is Required"),
  newPhone: Yup.string().required("Phone is Required"),
});

export default function EditMobilePhone({ isOpen, onClose }) {
  const navigate = useNavigate();
  function profilePage() {
    navigate("/profilePage");
  }
  const toast = new useToast();
  const phoneChange = async (values) => {
    const token = localStorage.getItem("token");
    const { currentPhone, newPhone } = values;
    try {
      const respon = await axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/changePhone",
        {
          currentPhone: currentPhone,
          newPhone: newPhone,
          FE_URL: "http://localhost:3000",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ini respon change phone", respon);
      toast({
        title: "Phone change",
        description: "Please check your email to verification phone change",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      profilePage();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "your phone is not change",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      currentPhone: "",
      newPhone: "",
    },
    validationSchema: PhoneSchema,
    onSubmit: (values) => {
      phoneChange(values);
      onClose();
    },
  });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Mobile Phone</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <form onSubmit={formik.handleSubmit}>
                <FormControl
                  isInvalid={
                    formik.touched.currentPhone && formik.errors.currentPhone
                  }
                >
                  <Input
                    required
                    placeholder="Current phone number"
                    id="currentPhone"
                    name="currentPhone"
                    type="number"
                    value={formik.values.currentPhone}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.currentPhone &&
                    formik.errors.currentPhone && (
                      <FormErrorMessage>
                        {formik.errors.currentPhone}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.newPhone && formik.errors.newPhone}
                >
                  <Input
                    required
                    placeholder="New phone number"
                    mt={"20px"}
                    id="newPhone"
                    name="newPhone"
                    type="number"
                    value={formik.values.newPhone}
                    onChange={formik.handleChange}
                  ></Input>
                  {formik.touched.newPhone && formik.errors.newPhone && (
                    <FormErrorMessage>
                      {formik.errors.newPhone}
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