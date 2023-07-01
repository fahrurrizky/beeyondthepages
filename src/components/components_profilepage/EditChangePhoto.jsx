import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';

const EditPhotoModal = ({ isOpen, onClose, onSave, token }) => {
  const [profilePhoto, setProfilePhoto] = useState('');

  const handleSave = () => {
    const formData = new FormData();
    formData.append('file', profilePhoto);

    axios
      .post('https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.result);
        onSave(profilePhoto);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change Profile Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Upload Photo</FormLabel>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </FormControl>
          {profilePhoto && (
            <img src={URL.createObjectURL(profilePhoto)} alt="Profile" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleSave} disabled={!profilePhoto}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPhotoModal;
