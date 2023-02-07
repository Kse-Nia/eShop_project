import React, { useContext } from "react";
import { Container } from "@chakra-ui/react";
import ItemCard from "../Components/itemCard";
import { items } from "../items";

const Products = () => {
  //console.log(items);
  return (
    <Container>
      <ItemCard props={items} />
    </Container>
  );
};

export default Products;
