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

  //const cartItems = myCart.cartItems;
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  console.log("items", cartItems);

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
      <Heading as="h1" variant="h1" textAlign="center" m={4}>
        Mon panier
      </Heading>
      <Box>
        <Card>
          {cartItems && cartItems.length > 0 ? (
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
                      <Td isNumeric>{products.price}</Td>
                      <Td>{products.cartQuantity}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>{handleTotal}</Tr>
                </Tfoot>
              </Table>
            </TableContainer>
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
            sx={{ backgroundColor: "#BF0202", color: "white" }}
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
