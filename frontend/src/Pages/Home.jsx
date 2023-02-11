import React from "react";
import { Card, Text, Image, Box, Heading } from "@chakra-ui/react";
import picture from "../Assets/home_back.png";

const Home = () => {
  return (
    <div>
      <Card m={4} display="flex" flexDirection="row">
        <Box mt={10} ml={5} maxW="40%">
          <Heading marginBottom={10} as="h1">
            Bienvenue sur EasyPlant
          </Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
            tempus iaculis urna id volutpat lacus laoreet non. Enim blandit
            volutpat maecenas volutpat blandit aliquam etiam.
          </Text>
        </Box>
        <Box>
          <Image objectFit="cover" height="auto" src={picture} alt="home" />
        </Box>
      </Card>
    </div>
  );
};

export default Home;
