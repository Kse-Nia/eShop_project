import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseBasket, clearBasket } from "../features/basketSlice";
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
  Alert,
  AlertIcon,
  Icon,
} from "@chakra-ui/react";
import Empty from "../Assets/empty.png";
import { MdDeleteOutline } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Basket = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart);
  const [alert, setAlert] = useState(false);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleDecreaseCart = (id) => {
    dispatch(decreaseBasket(id));
    window.location.reload();
  };
  const handleClearCart = () => {
    dispatch(clearBasket());
  };

  return (
    <Container>
      <Heading as="h1" variant="h1" textAlign="center" m={4}>
        Mon panier
      </Heading>
      <Box>
        <Card minHeight="50vh">
          {cartItems && cartItems.length > 0 ? (
            <>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th>Produit : </Th>
                      <Th>Image</Th>
                      <Th>Prix</Th>
                      <Th>Quantité</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cartItems.map((products) => (
                      <Tr key={products.id}>
                        <Td>{products.name}</Td>
                        <Td>
                          <Image
                            src={products.image}
                            objectFit="contain"
                            alt="image produit"
                            borderRadius="lg"
                          />
                        </Td>
                        <Td isNumeric>{products.price} €</Td>
                        <Td>
                          {products.cartQuantity}
                          <Button
                            onClick={() => {
                              handleDecreaseCart(products);
                              setAlert(true);
                            }}
                          >
                            -
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box>
                {" "}
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      handleClearCart();
                      setAlert(true);
                    }}
                    sx={{ backgroundColor: "#BF0202", color: "white" }}
                    size="sm"
                    m={5}
                  >
                    <Icon as={MdDeleteOutline} />
                    Vider le panier
                  </Button>
                  <Button
                    onClick={() => {
                      handleClearCart();
                      setAlert(true);
                    }}
                    sx={{ backgroundColor: "#7E52A0", color: "white" }}
                    size="sm"
                    m={5}
                  >
                    Passer à l'étape suivante
                    <Icon m={2} as={FaLongArrowAltRight} />
                  </Button>
                </ButtonGroup>
                {alert && (
                  <Alert status="success">
                    <AlertIcon />
                    Panier supprimé
                  </Alert>
                )}
              </Box>
            </>
          ) : (
            <Container
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Text textAlign="center">Aucun article pour le moment..</Text>
              <Image m="auto" opacity=".7" maxW={20} src={Empty} alt="" />
            </Container>
          )}
        </Card>
      </Box>
    </Container>
  );
};

export default Basket;
