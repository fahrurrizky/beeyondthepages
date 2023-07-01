import { SimpleGrid } from '@chakra-ui/react';
import ArticleCard from '../components/ArticleCard';


const Articles = ({ article }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {article.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </SimpleGrid>
  );
};

export default Articles;
