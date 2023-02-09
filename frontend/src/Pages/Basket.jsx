import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseBasket,
  removeFromBasket,
  getTotals,
  clearBasket,
} from "../features/basketSlice";
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
  Tfoot,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Empty from "../Assets/empty.png";

const Basket = () => {
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.cart);
  const [alert, setAlert] = useState(false);

  const [cartTotalQ, setCartTotalQ] = useState(0);
  const [cartTotalP, setCartTotalP] = useState(0);

  const cartItems = myCart.cartItems;
  console.log("items", cartItems);
  //const basket = localStorage.getItem("basket");

  useEffect(() => {
    dispatch(getTotals());
  }, [myCart, dispatch]);

  const handleDecreaseCart = (product) => {
    dispatch(decreaseBasket(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(decreaseBasket(product));
  };
  const handleClearCart = () => {
    dispatch(clearBasket());
  };
  const handleTotal = () => {
    dispatch(getTotals());
  };

  return (
    <Container>
      <Heading variant="h1" textAlign="center" m={4}>
        Mon panier
      </Heading>
      <Box>
        <Card minW="60vw" minH="50vh">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((products) => (
              <div key={products.id}>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Produit : </Th>
                        <Th>Image</Th>
                        <Th>Prix</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>{products.name}</Td>
                        <Td>{products.image}</Td>
                        <Td isNumeric>{products.price}</Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>{handleTotal}</Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </div>
            ))
          ) : (
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Text textAlign="center">Aucun article pour le moment..</Text>
              <Image m="auto" opacity=".7" maxW={20} src={Empty} alt="" />
            </Box>
          )}
        </Card>
        <ButtonGroup>
          <Button
            onClick={() => {
              handleClearCart();
              setAlert(true);
            }}
            sx={{ backgroundColor: "red", color: "white" }}
            size="sm"
            m={5}
          >
            Supprimer le panier
          </Button>
        </ButtonGroup>
        {alert && (
          <Alert status="success">
            <AlertIcon />
            Panier supprimé
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default Basket;
