import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";

const itemCard = (props) => {
    const data 
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src=""
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Acheter
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Ajouter au panier
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default itemCard;
