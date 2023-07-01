import React from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Textarea, VStack } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const BloggingFeature = () => {
  const initialValues = {
    title: '',
    author: '',
    publicationDate: '',
    image: '',
    category: '',
    content: '',
    video: '',
    keywords: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    publicationDate: Yup.string().required('Publication Date is required'),
    image: Yup.string().url('Invalid image URL').required('Image URL is required'),
    category: Yup.string().required('Category is required'),
    content: Yup.string().required('News content is required'),
    video: Yup.string().url('Invalid video URL'),
    keywords: Yup.string(),
  });

  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Box maxW="md" mx="auto" py={8}>
      <Heading as="h2" size="lg" mb={6}>
        Create a Blog
      </Heading>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <VStack spacing={4}>
            <Field name="title">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.title && form.touched.title}>
                  <FormLabel>Title</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="author">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.author && form.touched.author}>
                  <FormLabel>Author</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.author}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="publicationDate">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.publicationDate && form.touched.publicationDate}>
                  <FormLabel>Publication Date</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.publicationDate}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="image">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.image && form.touched.image}>
                  <FormLabel>Image URL</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="category">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.category && form.touched.category}>
                  <FormLabel>Category</FormLabel>
                  <Select {...field}>
                    <option value="">Select Category</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Sports">Sports</option>
                  </Select>
                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="content">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.content && form.touched.content}>
                  <FormLabel>News Content</FormLabel>
                  <Textarea {...field} />
                  <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="video">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.video && form.touched.video}>
                  <FormLabel>Video URL</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.video}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="keywords">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.keywords && form.touched.keywords}>
                  <FormLabel>Keywords</FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.keywords}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button type="submit" colorScheme="blue">Create Blog</Button>
          </VStack>
        </Form>
      </Formik>
    </Box>
  );
};

export default BloggingFeature;
