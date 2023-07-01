import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Textarea,
} from '@chakra-ui/react';

const ProfileUpdateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      maxW={{ base: '90%', md: '80%', lg: '50%' }}
      m="auto"
      borderWidth="1px"
      borderRadius="md"
      p={6}
    >
      <Heading as="h2" size="lg" mb={6}>
        Update your profile
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={3}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email" mb={3}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="bio" mb={6}>
          <FormLabel>Bio</FormLabel>
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mb={6}>
          Update profile
        </Button>
      </form>
    </Box>
  );
};

export default ProfileUpdateForm;
