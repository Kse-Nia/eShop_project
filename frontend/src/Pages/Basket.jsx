import React from "react";
import {
  Container,
  Card,
  TableContainer,
  Heading,
  Text,
  Image,
  ButtonGroup,
  Button,
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import Empty from "../Assets/empty.png";

const Basket = () => {
  const basket = localStorage.getItem("basket");

  return (
    <Container>
      <Heading variant="h1" textAlign="center" m={4}>
        Mon panier
      </Heading>
      <Box>
        <Card minW="60vw" minH="50vh">
          {basket && basket.length > 0 ? (
            basket.map((item) => (
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Nom :</Th>
                      <Th>Image</Th>
                      <Th>Prix</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.image}</Td>
                      <Td isNumeric>{item.price}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            ))
          ) : (
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Text textAlign="center">Aucun article pour le moment..</Text>
              <Image m="auto" opacity=".7" maxW={20} src={Empty} alt="" />
            </Box>
          )}
        </Card>
      </Box>
    </Container>
  );
};

export default Basket;
