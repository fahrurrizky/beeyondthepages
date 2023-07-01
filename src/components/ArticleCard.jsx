import { Box, Image, Heading, Text, Link } from '@chakra-ui/react';



export default function ArticleCard({ article }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={article.image} alt={article.title} />
      <Box p="6">
        <Heading as="h3" size="md" mb="2">
          {article.title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb="4">
          {article.description}
        </Text>
        <Link color="blue.500" href={article.link} isExternal>
          Read more
        </Link>
      </Box>
    </Box>
  );
};


