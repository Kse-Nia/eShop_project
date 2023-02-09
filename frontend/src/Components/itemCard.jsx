import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../features/basketSlice";

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

const ItemCard = (item) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);

  /* useEffect(() => {
    if (add) {
      // Reload page
      window.location.reload();
    }
  }, [add]); */

  const handleAdd = (id) => {
    dispatch(addToBasket(item));
    setAdd(true);
  };

  return (
    <Card m={2}>
      <CardBody>
        <Image
          src={item.image}
          objectFit="contain"
          alt="image produit"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.name}</Heading>
          <Text>{item.description}</Text>
          <Text as="b" color="blue.600" fontSize="2xl" textAlign="end">
            {item.price} €
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
            onClick={() => dispatch(handleAdd(item))}
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
