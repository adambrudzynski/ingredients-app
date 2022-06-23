import { Box, Heading, Image } from "@chakra-ui/react";
import { Endpoints } from "../../constants";
import { IngredientSearchResult } from "../../types";

interface ListItemProps {
  item: IngredientSearchResult;
  type: Endpoints;
}

export const SearchResultListItem = ({ item, type }: ListItemProps) => {
  return (
    <Box w="xs" borderWidth="1px" borderRadius="lg" minH="280px">
      <Heading m={4} as="h4" size="md" color={"gray.600"}>
        {item.name}
      </Heading>
      <Image
      mx="auto"
        src={`https://spoonacular.com/cdn/${type}_250x250/${item.image}`}
        alt={item.name}
      />
    </Box>
  );
};
