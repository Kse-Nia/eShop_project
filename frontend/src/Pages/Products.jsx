import React, { useEffect, useState } from "react";
import data from "../data.json";

//CSS
import customTheme from "../Utils/customTheme";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  Image,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

const Products = (props) => {
  console.log(data);

  return (
    <div>
      <h1>Products list</h1>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {data.laptops.map((laptop) => {
          return (
            <>
              <div key={laptop.id}>
                <Card maxW="sm">
                  <CardBody>
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{laptop.name}</Heading>
                      <Image
                        src={laptop.picture}
                        alt="laptop picture"
                        borderRadius="lg"
                      />
                      <Text>Lorem ipsum</Text>
                      <Text color="blue.600" fontSize="2xl">
                        Prix: {laptop.price}€
                      </Text>
                      <Text color="blue.600" fontSize="2xl">
                        Quantité restante: {laptop.quantity}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button colorScheme="blue" size="md">
                        Ajouter au panier
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </div>
            </>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Products;
