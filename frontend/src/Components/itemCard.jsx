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
  Icon,
  Skeleton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsCartPlus } from "react-icons/bs";

const ItemCard = (item) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAdd = (id) => {
    dispatch(addToBasket(item));
    setAdd(true);
  };

  return (
    <Card shadow="md" m={2}>
      <CardBody>
        <Image src={item.image} objectFit="contain" alt="" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Skeleton isLoaded={!isLoaded}>
            <Heading size="md">{item.name}</Heading>
            <Text>{item.description}</Text>
            <Text as="b" color="blue.600" fontSize="2xl" textAlign="end">
              {item.price} €
            </Text>
          </Skeleton>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="solid"
            sx={{ backgroundColor: "#1E643F", color: "white" }}
            onClick={() => dispatch(handleAdd(item))}
          >
            <Icon mr={2} as={BsCartPlus} />
            Acheter
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
