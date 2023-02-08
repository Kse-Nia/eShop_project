import React, { useContext } from "react";
import {
  Box,
  Container,
  useMediaQuery,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ItemCard from "../Components/itemCard";
import { items } from "../items";

const Products = () => {
  console.log(items);
  const [mobileQuery] = useMediaQuery("(max-width: 900px)");

  return (
    <Box m="0" overflow="hidden">
      <Text fontSize="4xl" textAlign="center" m={8}>
        Plantes disponibles
      </Text>
      {mobileQuery ? (
        <Flex display="flex" flexDirection="column">
          {items.length > 0 ? (
            items.map((item) => <ItemCard key={item.id} {...item} />)
          ) : (
            <>
              <p>Aucune plante pour le moment :( </p>
              <p>Revenez plus tard </p>
            </>
          )}
        </Flex>
      ) : (
        <SimpleGrid columns={2} minChildWidth="30%" py={3} m={8}>
          {items.length > 0 ? (
            items.map((item) => <ItemCard key={item.id} {...item} />)
          ) : (
            <>
              <p>Aucune plante pour le moment :( </p>
              <p>Revenez plus tard </p>
            </>
          )}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Products;
