import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  Box,
} from "@chakra-ui/react";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <Card
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        m={5}
      >
        <Heading as="h1" mt={4}>
          Mon Compte utilisateur
        </Heading>
        <Box m={7}>
          <Text>Prénom: {user.name}</Text>
          <Text>Email : {user.email}</Text>
          <ButtonGroup mt={5}>
            <Button sx={{ backgroundColor: "#1E643F", color: "white" }}>
              Modifier mes données
            </Button>
            <Button sx={{ backgroundColor: "#BF0202", color: "white" }}>
              Supprimer le compte
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
    </div>
  );
};

export default Profile;
