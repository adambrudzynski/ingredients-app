import { Box, Heading, Image } from "@chakra-ui/react";
import { IngredientSearchResult } from "../../types";

interface ListItemProps {
  item: IngredientSearchResult;
}

export const SearchResultListItem = ({ item }: ListItemProps) => {
  return (
    <Box w="xs" borderWidth="1px" borderRadius="lg">
      <Heading as="h4" size="md" color={"gray.600"}>
        {item.name}
      </Heading>
      <Image
        src={"https://spoonacular.com/cdn/ingredients_250x250/" + item.image}
        alt={item.name}
      />
    </Box>
  );
};
