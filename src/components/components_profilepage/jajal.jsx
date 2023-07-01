import {
    Box,
    Button,
    Heading,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { makeArticle } from "../redux/articleReducer";
  
  export const Write = () => {
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
  
    return (
      <Box mt={"50px"} align="center">
        <Heading mb={"20px"}>=========== Mulai Menulis ===========</Heading>
        <Box width={"750px"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="title"
              mb={"20px"}
              placeholder={"Masukkan Judul Artikel"}
            />
            <Textarea
              placeholder="Masukkan Isi Artikel"
              height={"300px"}
              mb={"20px"}
              id="content"
            ></Textarea>
            <Box alignSelf={"left"} mb={"20px"}>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                style={{ width: "300px", alignItems: "center" }}
              >
                <option value="">Pilih Kategori Tulisanmu</option>
                {category &&
                  category.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
              </select>
            </Box>
            <Input type="text" placeholder="Keyword" id="keywords" mb={"20px"} />
            <Input type="file" id="file" variant={"unstyled"} mb={"20px"} />
            <Input type="text" placeholder="Country?" id="country" mb={"20px"} />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Box>
    );
  };