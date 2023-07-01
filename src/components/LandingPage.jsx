import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  // Link as LinkChakra,
} from "@chakra-ui/react";
import CaptionCarousel from "./components_landingpage/CarouselBanner";
import Footer from "./components_landingpage/Footer";
import AllCategory from "./components_landingpage/BlogSection";
import {Business, Economy, Thecnology, Sport, Culinary, International,Fiction} from "./components_landingpage/AllCategory";



function LandingPage() {

  return (
    <Box overflowY={"scroll"}>
      <Box bg="white" h="800px" bgPosition="center" bgRepeat="no-repeat">
        <Container maxW="container.xl" h="100%">
          <Flex px={"2"} py={"100"}>
            <Box mt={"150"} boxSize={"200%"} fontWeight={"extrabold"}>
              <Text fontSize={"40"}>
                ..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....
              </Text>
              <br></br>
              <Text fontSize={"50px"}>
                Diligence Is The Mother Of Good Fortune.
                <br />
                <Button variant={"outline"} colorScheme="">
                  Read More
                </Button>
              </Text>
            </Box>
            <Spacer />
            <Box boxSize={"150%"} py={"10"}>
              <Image
                src="https://images.unsplash.com/photo-1522120691812-dcdfb625f397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                // ml={"6"}
                // width="150%"
                height={"600"}
              />
            </Box>
            <Box pt={"100"} w={"900"} boxSize={"200%"} ml={"10"}>
              <Text fontSize={"15px"} as="cite" fontWeight={"extrabold"}>
                _______________________________We are repeatedly do, <br />
                Exellence, __________Then is not an act but a Habit. <br />
                "Aristoteles"
              </Text>
              <br />
              <br />
              <br />
              <Image
                src="https://images.unsplash.com/photo-1554498808-d3ae8f23540c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                px={"2"}
                width="90%"
                ml={"20"}
              />
              <br />
              <br />
              <Text
                fontSize={"13px"}
                as="cite"
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                If you fail to control your own Mind, __________You may be sure
                you will control nothing else.
                <br />
                "Napoleon Hill"
              </Text>
              ________________________________
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box mt={"20px"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Box height="90px">
              <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"}>
                Latest Article__
              </Heading>
              <hr
                width={"200px"}
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 3,
                  borderColor: "#000000",
                  borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
                }}
              />
              <Text ml={"60px"}>
                |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
              </Text>
            </Box>
          </GridItem>
          <GridItem display={"flex"} justifyContent={"flex-end"}>
            <Box>
              <hr
                width={"200px"}
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 3,
                  borderColor: "#000000",
                  borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
                }}
              />
              <Heading
                fontSize={"20px"}
                fontStyle={"oblique"}
                mt={"20px"}
                ml={"55px"}
              >
                <Button variant={""} fontStyle={"oblique"}>
                  View All__
                </Button>
              </Heading>
            </Box>
          </GridItem>
        </Grid>
        {/* <Categories/> */}
        <Box mt={"30px"}>
          <CaptionCarousel />
        </Box>
      </Box>

      <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"} mt={"50px"}>
        Popular News__
      </Heading>
      <hr
        width={"200px"}
        style={{
          color: "black",
          backgroundColor: "black",
          height: 3,
          borderColor: "#000000",
          borderWidth: 0.5,
        }}
      />
      <Text ml={"60px"}>
        |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
      </Text>
      <Box py={"10px"} px={"50px"}>
        <Box
          bgImage={
            "https://images.unsplash.com/photo-1613929728701-c97c4c4dca37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          }
          bgPosition="center"
          bgRepeat="no-repeat"
          h="550px"
          // w="1300px"
          position="relative"
        >
          <Box
            position="absolute"
            backgroundColor={"RGBA(0, 0, 0, 0.64)"}
            zIndex={"10"}
            mt={150}
            ml={20}
            maxW={"370px"}
            maxH={"550px"}
            p={"7"}
          >
            <Heading
              display={"flex"}
              justifyContent={"flex-start"}
              textColor={"white"}
            >
              Shoot For The Moon And If You Miss You Will Still Be Among The
              Stars
            </Heading>
            <br />
            <Text textColor={"white"}>
              Met to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of extra space, including wider seats as
              standard, no control boxes Read MoreMet to launch on the
              manufacturer’s new A330neo aircraft in 2017, it’s offering lots of
              extra space,
            </Text>
            <Button backgroundColor={"white"} mt={"3"} size={"sm"}>
              Read More
            </Button>
          </Box>
        </Box>
      </Box>

      <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"} mt={"150px"}>
        Featured__
      </Heading>
      <hr
        width={"200px"}
        style={{
          color: "black",
          backgroundColor: "black",
          height: 3,
          borderColor: "#000000",
          borderWidth: 0.5, // Mengatur ketebalan garis menjadi 2 piksel
        }}
      />
      <Text ml={"60px"}>
        |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
      </Text>
      <Box py={"10px"} px={"50px"}>
        <Grid templateColumns="repeat(3, 1fr)" siz gap={2}>
          <GridItem w={"300px"} pt="45">
            <img
              width={"350px"}
              src="https://images.unsplash.com/photo-1673245886349-6b0cae152c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="sect"
            />
            <Heading as="h3" size="md" mt={"10px"}>
              Nothing Is More Powerful Than An Idea Whose Time Has Come
            </Heading>
            <Button variant={"outline"} borderColor={"black"} mt={"10px"}>
              Read More
            </Button>
          </GridItem>
          <GridItem w={"590px"} mr={"10px"}>
            <Heading as="h3" size="xl" mb={"9px"}>
              <hr
                width={"200px"}
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 3,
                  borderColor: "#000000",
                  borderWidth: 0.5,
                }}
              />
              You Have As Much Laughter As You Have Faith
            </Heading>
            <Text>
              Met to launch on the manufacturer’s new A330neo aircraft in 2017,
              it’s offering lots of Quis ipsum suspendisse ultrices gravid
            </Text>
            <Button
              variant={"outline"}
              borderColor={"black"}
              mb={"30"}
              mt={"10px"}
            >
              Read More
            </Button>
            <img
              width={"550px"}
              src="https://images.unsplash.com/photo-1467779009031-53938b78ca38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="sect"
            />
          </GridItem>
          <GridItem>
            <Box p={4} boxSize={"110%"} pt={"40px"}>
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                fontWeight={"bold"}
                fontSize={"2xl"}
              >
                ------------------
              </Box>
              <img
                width={"250px"}
                src="https://images.unsplash.com/photo-1542850083-aff0f80c1646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbm9jaHJvbWUlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="sect"
              />
              <Heading as="h3" size="lg" mt={"10px"}>
                A Harmful Truth Is Better Than A Useful Lie
              </Heading>
              <Button variant={"outline"} borderColor={"black"} mt={"10px"}>
                Read More
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Heading ml={"60px"} fontSize={"45px"} fontStyle={"oblique"} mt={"50px"}>
        Hot News__
      </Heading>
      <hr
        width={"200px"}
        style={{
          color: "black",
          backgroundColor: "black",
          height: 3,
          borderColor: "#000000",
          borderWidth: 0.5,
        }}
      />
      <Text ml={"60px"}>
        |&nbsp;&nbsp;Quis ipsum suspendisse ultrices gravida.
      </Text>
      <Box py={"10px"} px={"50px"}>
        <Box
          bgImage={
            "https://images.unsplash.com/photo-1675282500942-151fc0a73565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80"
          }
          bgPosition="center"
          bgRepeat="no-repeat"
          h="550px"
          w="900px"
          position="relative"
        >
          <Box
            position="absolute"
            backgroundColor={"RGBA(0, 0, 0, 0.64)"}
            // bgColor={"white"}
            // zIndex={"10"}
            mt={150}
            ml={720}
            mr={1000}
            w={"570px"}
            h={"250px"}
            borderWidth={"medium"}
            borderColor={"gray"}
          >
            <Heading
              display={"flex"}
              justifyContent={"flex-start"}
              textColor={"white"}
              mt={"40px"}
              ml={"20px"}
            >
              He Who Has A Why To Live Can Bear Almost Any How
            </Heading>
            <Text ml={"20px"} textColor={"white"}>
              | Quis ipsum suspendisse ultrices gravida.
            </Text>
            <Button
              // backgroundColor={"black"}
              variant={"outline"}
              mt={"3"}
              size={"sm"}
              textColor={"white"}
              ml={"20px"}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>

      <Box py={"70px"} px={"120px"}>
        <Grid templateColumns="repeat(3, 1fr)" gap={"10"}>
          <GridItem w="100%" h="10">
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                ______If You Don’t Stand For Something You Will Fall For
                Anything.
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </GridItem>
          <GridItem w="100%" h="10">
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                Learning Never Exhausts The Mind.______
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </GridItem>
          <GridItem w="100%" h="10">
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                ______We Are All In The Gutter, But Some Of Us Are Looking At
                The Stars.
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </GridItem>
        </Grid>
      </Box>



      <Flex py={"10px"} px={"50px"}>
        {/* 10 blog */}

        <Box 
        mt={"30px"} 
        mr={"50px"} 
        minW={"900px"}
        maxW={"900px"} 
        position="sticky"
        height="100vh"
        overflow="scroll"
        >
          <Tabs variant="enclosed">
            <TabList fontFamily={"initial"} borderColor={"balck"}position="sticky" overflow="scroll">
              <Tab>All Category</Tab>
              <Tab>Business</Tab>
              <Tab>Economy</Tab>
              <Tab>Thecnology</Tab>
              <Tab>Sport</Tab>
              <Tab>Culinary</Tab>
              <Tab>Internationl</Tab>
              <Tab>Fiction</Tab>
              <Tab>Education</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AllCategory />
              </TabPanel>
              <TabPanel>
                <Business />
              </TabPanel>
              <TabPanel>
                <Economy />
              </TabPanel>
              <TabPanel>
                <Thecnology />
              </TabPanel>
              <TabPanel>
                <Sport />
              </TabPanel>
              <TabPanel>
                <Culinary />
              </TabPanel>
              <TabPanel>
                <International />
              </TabPanel>
              <TabPanel>
                <Fiction />
              </TabPanel>
              <TabPanel>
                {/* <Cart /> */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Sidebar */}
        <Box p={4} 
        position="relative"
        height="100vh"
        overflow="scroll"
        >
          <Heading size="xl" fontFamily={"serif"} mb={"3"}>
            Hot News
          </Heading>
          <hr
            width={"full"}
            style={{
              color: "black",
              backgroundColor: "black",
              borderColor: "#000000",
            }}
          />
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

          <Flex spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="90px"
                maxW="90px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                Learning Never Exhausts The Mind.
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Flex>

          <Flex spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1601807576163-587225545555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="90px"
                maxW="90px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                We Are All In The Gutter, But Some Of Us Are Looking At The
                Stars
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Flex>
          <Flex spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Dan Abramov"
                minW="90px"
                maxW="90px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mb={"2"}>
                You Can’t Blame Gravity For Falling In Love.
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Flex>

          <Divider mt={6} mb={4} />

          <Heading size="xl" fontFamily={"serif"} mb={"3"}>
            Popular News
          </Heading>
          <hr
            width={"full"}
            style={{
              color: "black",
              backgroundColor: "black",
              borderColor: "#000000",
            }}
          />
          <Box spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="350px"
                maxW="30px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mt={"2"}>
                If You Don’t Stand For Something You Will Fall For Anything
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Box>

          <Box spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="350px"
                maxW="30px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mt={"2"}>
                If You Don’t Stand For Something You Will Fall For Anything
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Box>

          <Box spacing={9} align="start" mt={"10"}>
            <Box>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Dan Abramov"
                minW="350px"
                maxW="30px"
                mr={"5"}
              />
            </Box>
            <Link to="/category/technology">
              <Heading size="sm" mt={"2"}>
                If You Don’t Stand For Something You Will Fall For Anything
              </Heading>
              <Text fontSize={"sm"} as={"i"}>
                March 6, 2019
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}

export default LandingPage;
