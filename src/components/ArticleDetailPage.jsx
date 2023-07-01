import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Text,
  Select,
  Link as LinkChakra,
} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { ExternalLinkIcon } from "@chakra-ui/icons";
// import logo from '../components/components_landingpage/Bee1.png';
import { useDispatch, useSelector } from "react-redux";
import { makeArticle } from "../redux/articleReducer";
import axios from "axios"

const BloggingFeature = () => {
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [category, setCategory] = useState();
  let coba = [];
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory"
      );
      setCategory(res.data);


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
        const { username: fetchedUsername} =
          response.data;
        setUsername(fetchedUsername);
      
    } catch (error) {
      alert("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      country: document.getElementById("country").value,
      CategoryId: selectedOption,
      url: "/",
      keywords: document.getElementById("keywords").value,
    };
    const file = document.getElementById("file").files[0];
    dispatch(makeArticle(data, file));
  };

  const [isFormEmpty, setIsFormEmpty] = useState(false);
  const [content, setContent] = useState('');
  const [previewImage, setPreviewImage] = useState(null); // New state for preview image

  const handleContent = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const allowedSizeInBytes = 2 * 1024 * 1024; // 2MB

    if (file.size > allowedSizeInBytes) {
      alert('File size must be maximum 2MB');
      event.target.value = '';
    } else {
      setPreviewImage(URL.createObjectURL(file)); // Set the preview image URL
    }
  };

  const handleCreateBlog = () => {
    // Check if any required fields are empty
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publicationDate = document.getElementById('publicationDate').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    if (!title || !author || !publicationDate || !category || !content) {
      setIsFormEmpty(true);
      return;
    }

    // Perform create blog logic
    setIsFormEmpty(false);
  };

  return (
    <Box py={100} width={'900px'} mx="auto" >
      {/* <center>
        <img src={logo} alt="Logo" width="30%" />
      </center> */}
      <Heading as="h2" size="lg" mb={6}>
        Create a Blog
      </Heading>
      {/* Form */}
      <Box borderWidth="1px" borderRadius="md" p={4}>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel>Title</FormLabel>
          <Input type="text" id="title" />
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel>Author</FormLabel>
          <Input isDisabled type="text" id="author" variant='filled' placeholder={username}/>
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel>Date of publication</FormLabel>
          <Input type="date" id="publicationDate" />
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel alignContent={'center'}>Image</FormLabel>
          <Input type="file" id="file" variant={""}/>
          {previewImage && <img src={previewImage} alt="Preview" width="200px"  id="file" />}
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel>Category</FormLabel>
          <Select
                value={selectedOption}
                onChange={handleOptionChange}
                style={{ width: "868px", alignItems: "center" }}
              >
                <option value="">Select a Category</option>
                {category &&
                  category.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
              </Select>
        </FormControl>

        <FormControl mb={9} onSubmit={handleSubmit}>
          <FormLabel>News content</FormLabel>
          <Textarea
              placeholder="Write your article"
              height={"300px"}
              mb={"20px"}
              id="content"
            ></Textarea>
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel alignContent={'center'}>Video</FormLabel>
          <Input
            type="file"
            variant={''}
            accept=".jpeg,.jpg,.png,.gif"
            onChange={handleImageChange}
          />
          {previewImage && <img src={previewImage} alt="Preview" width="200px" />}
        </FormControl>
        <FormControl mb={4} onSubmit={handleSubmit}>
          <FormLabel>Keywords</FormLabel>
          <Input type="text"  id="keywords"/>
          <FormLabel>Country</FormLabel>
          <Input type="text" placeholder="Your country" id="country" mb={"20px"} />
        </FormControl>
        {isFormEmpty && (
          <Text color="red" mt={2}>
            Please fill in all required fields.
          </Text>
        )}
        <Button colorScheme="blue" mt={4} onClick={handleSubmit}>
          Create Blog
        </Button>
      </Box>

      {/* Message for non-verified users */}
      <Text mt={4}>
        You need to be a verified user to create a blog. Please{' '}
        <LinkChakra textColor={'teal'}>
        <Link to="/verification/:token">
          verify your account<ExternalLinkIcon mx="2px" />
        </Link>
        </LinkChakra>
      </Text>
    </Box>
  );
};

export default BloggingFeature;
