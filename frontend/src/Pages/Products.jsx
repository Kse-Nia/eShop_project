import React, { useContext } from "react";
import {
  Box,
  Container,
  useMediaQuery,
  Flex,
  SimpleGrid,
  Text,
  Heading,
} from "@chakra-ui/react";
import ItemCard from "../Components/itemCard";
import { items } from "../items";

const Products = () => {
  console.log(items);
  const [mobileQuery] = useMediaQuery("(max-width: 900px)");

  return (
    <Box m={0} p={0} overflow="hidden">
      <Text fontSize="4xl" textAlign="center" m={8}>
        Plantes disponibles
      </Text>
      {mobileQuery ? (
        <SimpleGrid columns={3} minChildWidth="50%" m={5} py={2}>
          {items.length > 0 ? (
            items.map((item) => <ItemCard key={item.id} {...item} />)
          ) : (
            <>
              <p>Aucune plante pour le moment :( </p>
              <p>Revenez plus tard </p>
            </>
          )}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={3} minChildWidth="30%" py={3}>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id}>
                <ItemCard {...item} />
              </div>
            ))
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
