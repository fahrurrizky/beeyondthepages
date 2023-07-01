// import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import photo from "./pp.jpeg";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Stack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link as LinkChakra,
  MenuDivider,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
  // useColorModeValue,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";
import logo from "./Bee2.png";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NotificationModal from "./NotificationModal"



const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const openNotificationModal = () => {
    setIsNotificationModalOpen(true);
  };
  
  const closeNotificationModal = () => {
    setIsNotificationModalOpen(false);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  return (
    <Box>
      <Flex
        // py={1}
        px={"10"}
        align="center"
        position="fixed"
        w={"100%"}
        zIndex={"20"}
        bgColor="white"
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Flex>
          <a href="/">
            <img src={logo} alt="Logo" width="250px" />
          </a>
          <Flex ml={5} px={"200"}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex ml={"5"}>
          <Flex>
            {/* Search */}
            <Button variant={"unstyled"} mr={"-2.5"}>
              <BsSearch onClick={onOpen} size={"22"} />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'full'} blockScrollOnMount={false}>
              <ModalOverlay />
              <ModalContent bg="rgba(0, 0, 0, 0.6)" opacity={0.8} py={'300px'} onClick={onClose}>
                <ModalHeader textColor={'white'} px={'300px'}>Search</ModalHeader>
                <ModalCloseButton color="white" size={'2xl'} mt={'372px'} mr={'250px'}/>
                <ModalBody px={'300px'}>
                  <Input
                    placeholder="Search......."
                    borderColor={useColorModeValue("white", "white")}
                    borderRadius="5px"
                    size={"md"}
                    textColor={'white'}
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
            {/* Notifcation */}
            <Button variant="ghost" mr={3} >
              <IoNotificationsOutline size={25}onClick={openNotificationModal} />
              <NotificationModal
                isOpen={isNotificationModalOpen}
                onClose={closeNotificationModal}
              />
            </Button>
            {/* Menu Profile */}
            <Menu isLazy>
              <MenuButton as={Button} size="sm" p={0} rounded="full" mt={"1"}>
                <Avatar size="sm" src={[photo]} />
              </MenuButton>
              <MenuList
                zIndex={5}
                border="2px solid"
                borderColor={useColorModeValue("gray.700", "gray.100")}
                boxShadow="4px 4px 0"
              >
                <Box>
                  <MenuItem>
                    <Link to="/profilePage" align="start">
                      <Text fontWeight="300">Beeyond The Pages</Text>
                      <Text fontSize="sm" color="gray.500">
                        @Bee_yondthepages
                      </Text>
                    </Link>
                  </MenuItem>
                </Box>
                <MenuDivider />
                {/* <MenuItem> */}
                  <Text ml={3} as='u' fontWeight="400" fontSize={'lg'}>Setting</Text>
                {/* </MenuItem> */}
                <MenuItem>
                <Link to="/forgotpasword">
                  <Text fontWeight="300">Forgot Password</Text>
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/reset-password/:token">
                  <Text fontWeight="300">Reset Password</Text>
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/change-password">
                  <Text fontWeight="300">Change Password</Text>
                </Link>
                </MenuItem>
                <MenuDivider />
                <Link>
                  <MenuItem>
                    <Text
                      onClick={handleLogout}
                      variant={"unstyled"}
                      fontWeight="300"
                      size={"md"}
                    >
                      Sign Out
                    </Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

const DesktopNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);


  const NAV_ITEMS = [
    {
      label: "Category",
      children: categories.map((category) => ({
        label: category.name,
        href: `/category/${category.map}`,
      })),
    },
    {
      label: "Find you want",
      children: [
        {
          label: "Job Board",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Freelance Projects",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
      label: "Our story",
      href: "#",
    },
    {
      label: "Membership",
      href: "#",
    },
    {
      label: "Write",
      href: "/article",
      icon: <CiEdit size={20} />,
    },
  ];
  

  return (
    <Stack direction={"row"} spacing={3} textColor={"black"} >
      {NAV_ITEMS.map((navItem) => (
      <Flex
        key={navItem.label}
        alignItems={"center"}
        fontSize={"sm"}
        alignContent={"center"}
        textColor={"black"}
      >
        <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
              <Link
                p={1}
                to={navItem.href ?? "#"}
                fontSize={"sm"}
              >
                <LinkChakra textColor={"black"} fontWeight={"medium"}>
                  <Flex>
                    {navItem.label}
                    <span>{navItem.icon}</span>
                  </Flex>
                </LinkChakra>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                textColor={"white"}
                backgroundColor={"blackAlpha.100"}
                bg="RGBA(0, 0, 0, 0.5)"
                opacity={0.9}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Flex>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "white" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "yellow.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"yellow.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};


