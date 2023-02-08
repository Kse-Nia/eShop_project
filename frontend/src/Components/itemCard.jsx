import React, { useContext } from "react";
import {
  Card,
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
  return (
    <Card m={2}>
      <CardBody>
        <Image src={props.image} alt="image produit" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Text>{props.description}</Text>
          <Text as="b" color="blue.600" fontSize="2xl" textAlign="end">
            {props.price} €
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            sx={{ backgroundColor: "#1E643F", color: "white" }}
            //onClick={addToBasket}
          >
            <AddIcon boxSize={3} m={2} />
            Ajouter au panier
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
