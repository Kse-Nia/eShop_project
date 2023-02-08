import React, { useContext } from "react";
import {
  Container,
  Flex,
  Card,
  Grid,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Text,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ItemCard = (props) => {
  const plants = props.props;

  return (
    <Container>
      <div>
        <Text fontSize="2em" textAlign="center">
          Plantes disponibles
        </Text>
      </div>
      <div>
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div key={plants.id}>
              <Card width="90%" marginBottom={6}>
                <CardBody>
                  <Image
                    src={plant.image}
                    alt="image produit"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{plant.name}</Heading>
                    <Text>{plant.description}</Text>
                    <Text color="blue.600" fontSize="2xl" textAlign="end">
                      {plant.price} €
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      //onClick={addToBasket}
                    >
                      <AddIcon boxSize={3} m={2} />
                      Ajouter
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <Text fontSize="2em" textAlign="center">
            Aucune plante disponible pour le moment :(
          </Text>
        )}
      </div>
    </Container>
  );
};

export default ItemCard;
