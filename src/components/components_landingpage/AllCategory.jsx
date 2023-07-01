import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import axios from "axios";


export const Business =()=>{
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=1"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}



export const Economy =()=>{ 
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=2"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

export const Thecnology =()=>{ 
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

export const Sport =()=>{ 
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=4"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}

export const Culinary =()=>{ 
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=5"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}



export const International = () => {
  const [blogs, setBlogs] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=6"
        );
        setBlogs(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box>
      {blogs?.map((blog) => (
        <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
          <Box>
            <Image
              src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
              alt="Dan Abramov"
              minW="300px"
              maxW="300px"
              mr={"5"}
            />
          </Box>

          <Text>
            <Text mb={"2"}>{blog.User.username}</Text>
            <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
              {blog.Category.name}
            </Heading>
            <Link to="/">
              <Heading size="md" fontFamily={"initial"} mb={"1"}>
                {blog.title}
              </Heading>
            </Link>
            <Text
              fontSize="sm"
              mb={"1"}
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.content}
            </Text>
            <Text
              fontSize={"xs"}
              as="u"
              textColor={"gray.500"}
              fontFamily={"initial"}
            >
              {blog.createdAt}
            </Text>{" "}
            <br />
            <Button
              leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
              onClick={handleSave}
              variant={"unstyled"}
              size={"xs"}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Text>
        </Flex>
      ))}
    </Box>
  );
}


export const Fiction = () => {
    const [blogs, setBlogs] = useState([]);
    const [isSaved, setIsSaved] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=7"
          );
          setBlogs(response.data.result);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleSave = () => {
      setIsSaved(!isSaved);
    };
  
    return (
      <Box>
        {blogs?.map((blog) => (
          <Flex key={blog.id} spacing={9} align="start" mt={"5"}>
            <Box>
              <Image
                src={`https://minpro-blog.purwadhikabootcamp.com/${blog.imageURL}`}
                alt="Dan Abramov"
                minW="300px"
                maxW="300px"
                mr={"5"}
              />
            </Box>
  
            <Text>
              <Text mb={"2"}>{blog.User.username}</Text>
              <Heading as={"u"} size="md" fontFamily={"initial"} mb={"1"}>
                {blog.Category.name}
              </Heading>
              <Link to="/">
                <Heading size="md" fontFamily={"initial"} mb={"1"}>
                  {blog.title}
                </Heading>
              </Link>
              <Text
                fontSize="sm"
                mb={"1"}
                textColor={"gray.500"}
                fontFamily={"initial"}
              >
                {blog.content}
              </Text>
              <Text
                fontSize={"xs"}
                as="u"
                textColor={"gray.500"}
                fontFamily={"initial"}
              >
                {blog.createdAt}
              </Text>{" "}
              <br />
              <Button
                leftIcon={isSaved ? <AiFillLike /> : <AiOutlineLike />}
                onClick={handleSave}
                variant={"unstyled"}
                size={"xs"}
              >
                {isSaved ? "Saved" : "Save"}
              </Button>
            </Text>
          </Flex>
        ))}
      </Box>
  
    );
  }