import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  Flex,
  Text,
  Button,
  Divider,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import photo from "../components_landingpage/pp.jpeg";
import { FaUserEdit } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Cart from "../components_landingpage/BlogSection";
import BloggingFeature from "../ArticleDetailPage";
import EditMobilePhone from "./EditMobilePhone";
import EditName from "./EditName";
import EditUserName from "./EditUserName";
import EditEmail from "./EditEmail";
import EditBio from "./EditBio";
import EditAddress from "./EditAddress";
import EditPhotoModal from "./EditChangePhoto";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";



export default function ProfilePage() {

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload= () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        const { username: fetchedUsername, avatar: fetchedAvatar, email: fetchEmail, phone: fetchPhone } =
          response.data;
        setUsername(fetchedUsername);
        setAvatar(fetchedAvatar);
        setEmail(fetchEmail);
        setPhone(fetchPhone)
      
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [currentMobile, setCurrentMobile] = useState("(098) 765-4331");

  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [currentName, setCurrentName] = useState("Johnatan Smith");

  const [isUserNameModalOpen, setIsUserNameModalOpen] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("Johnatan Smith");

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("example@example.com");

  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [currentBio, setCurrentBio] = useState("I'm a web developer");

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState("123 Main St");

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("photo");

  const handleSaveMobile = (newMobile) => {
    setCurrentMobile(newMobile);
    // Perform any other necessary actions with the new mobile number
  };
  
  const openMobileModal = () => {
    setIsMobileModalOpen(true);
  };

  const closeMobileModal = () => {
    setIsMobileModalOpen(false);
  };

  const handleSaveName = (newName) => {
    setCurrentName(newName);
    // Perform any other necessary actions with the new name
  };

  const openNameModal = () => {
    setIsNameModalOpen(true);
  };

  const closeNameModal = () => {
    setIsNameModalOpen(false);
  };

  const handleSaveUserName = (newUserName) => {
    setCurrentUserName(newUserName);
    // Perform any other necessary actions with the new user name
  };

  const openUserNameModal = () => {
    setIsUserNameModalOpen(true);
  };

  const closeUserNameModal = () => {
    setIsUserNameModalOpen(false);
  };

  const handleSaveEmail = (newEmail) => {
    setCurrentEmail(newEmail);
    // Perform any other necessary actions with the new email
  };

  const openEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const closeEmailModal = () => {
    setIsEmailModalOpen(false);
  };

  const handleSaveBio = (newBio) => {
    setCurrentBio(newBio);
    // Perform any other necessary actions with the new bio
  };
  const openBioModal = () => {
    setIsBioModalOpen(true);
  };

  const closeBioModal = () => {
    setIsBioModalOpen(false);
  };

  const handleSaveAddress = (newAddress) => {
    setCurrentAddress(newAddress);
    // Perform any other necessary actions with the new address
  };

  const openAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleSavePhoto = (newPhoto) => {
    setCurrentPhoto(newPhoto);
    // Perform any other necessary actions with the new mobile number
  };
  
  const openPhotoModal = () => {
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setIsPhotoModalOpen(false);
  };

  return (
    <Box bg="white" pt={100}>
      <Flex px={"10"} alignItems={"s"} gap={8}>
        <Box w="50%" boxShadow="dark-lg" rounded={"lg"}>
          <Card mb={4} boxShadow="none">
            <CardBody textAlign="center">
              <center>
                <Image
                  src={uploadedImage || (photo)}
                  alt="avatar"
                  borderRadius="full"
                  boxSize="160px"
                  mb={2}
                />
              </center>
              <Button colorScheme="teal" mb={"2"} onClick={openPhotoModal}>
                Change Photo Profile
                <EditPhotoModal 
                isOpen={isPhotoModalOpen}
                onClose={closePhotoModal}
                currentPhoto={currentPhoto}
                onSave={handleSavePhoto}
                onImageUpload={handleImageUpload}
                />
              </Button>
              <Text color="gray.500" mb={1}>
                Full Stack Developer
              </Text>
              <Text color="gray.500">Timoho D.I.Y</Text>
            </CardBody>
          </Card>
        </Box>

        <Box w="50%" boxShadow="dark-lg" rounded={"lg"}>
          <Card boxShadow="none">
            <CardBody>
              <Flex>
                <Box w="30%">
                  <Text>Full Name</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{currentName}</Text>
                </Box>
                <Button variant={"ghost"}>
                  <FaUserEdit size={"20"} onClick={openNameModal} />
                  <EditName
                    isOpen={isNameModalOpen}
                    onClose={closeNameModal}
                    currentName={currentName}
                    onSave={handleSaveName}
                  />
                </Button>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>User Name</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{username}</Text>
                </Box>
                <Button variant={"ghost"}>
                  <FaUserEdit size={"20"} onClick={openUserNameModal} />
                  <EditUserName
                    isOpen={isUserNameModalOpen}
                    onClose={closeUserNameModal}
                    currentUserName={currentUserName}
                    onSave={handleSaveUserName}
                  />
                </Button>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Email</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{email}</Text>
                </Box>
                <Button variant={"ghost"}>
                  <FaUserEdit size={"20"} onClick={openEmailModal} />
                  <EditEmail
                    isOpen={isEmailModalOpen}
                    onClose={closeEmailModal}
                    currentEmail={currentEmail}
                    onSave={handleSaveEmail}
                  />
                </Button>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Bio</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{currentBio}</Text>
                </Box>
                <Button variant={"ghost"} onClick={openBioModal}>
                  <FaUserEdit size={"20"} />
                  <EditBio
                    isOpen={isBioModalOpen}
                    onClose={closeBioModal}
                    currentBio={currentBio}
                    onSave={handleSaveBio}
                  />
                </Button>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Mobile</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{phone}</Text>
                </Box>
                <Button variant={"ghost"}>
                  <FaUserEdit size={"20"} onClick={openMobileModal} />
                  <EditMobilePhone
                    isOpen={isMobileModalOpen}
                    onClose={closeMobileModal}
                    currentMobile={currentMobile}
                    onSave={handleSaveMobile}
                  />
                </Button>
              </Flex>
              <Divider my={3} />
              <Flex>
                <Box w="30%">
                  <Text>Address</Text>
                </Box>
                <Box w="70%">
                  <Text color="gray.500">{currentAddress}</Text>
                </Box>
                <Button variant={"ghost"}>
                  <FaUserEdit size={"20"} onClick={openAddressModal} />
                  <EditAddress
                    isOpen={isAddressModalOpen}
                    onClose={closeAddressModal}
                    currentAddress={currentAddress}
                    onSave={handleSaveAddress}
                  />
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Box>
      </Flex>

      <Box mt={"30px"} px={"50px"} minW={"900px"}>
        <Tabs variant="enclosed">
          <TabList
            fontFamily={"initial"}
            borderColor={"balck"}
            justifyContent="center"
          > 
            <Tab>Your Writing</Tab>
            <Tab>For You</Tab>
            <Tab>Library</Tab>
            <Tab>Favorite</Tab>
            <Tab>Write Article</Tab>
            <Tab>Reading List</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Cart />
            </TabPanel>
            <TabPanel>
              <Cart />
            </TabPanel>
            <TabPanel>
              <Cart />
            </TabPanel>
            <TabPanel>
              <Cart />
            </TabPanel>
            <TabPanel>
              <BloggingFeature />
            </TabPanel>
            <TabPanel>
              <Cart />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
