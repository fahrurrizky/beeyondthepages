import {
  Box,
  Heading,
  Spacer,
  Button,
  VStack,
  HStack,
  Grid,
  Text,
  Link,
  Image,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';

function Card({
    title,
    username,
    userProfile,
    publishedDate,
    tagList,
    headerImage,
    postLink,
    readingTime,
    reactionsCount,
    commentsCount
  }) {
    return (
      <Box
        mt="3"
        as="article"
        bg="white"
        borderRadius="md"
        overflow="hidden"
        border="1px solid #08090a1a"
        ml={'0'}
      >
        {/* {headerImage ? <Image alt="header image" src={headerImage} /> : ''} */}
  
        <Flex spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="90px"
                maxW="90px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                If You Don’t Stand For Something You Will Fall For Anything
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Flex>
      </Box>
    );
  }
  
  export default Card;
  