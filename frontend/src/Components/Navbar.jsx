import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/plant.png";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Box,
  useDisclosure,
  useMediaQuery,
  Image,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [mobileVersion] = useMediaQuery("(max-width: 850px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const NavLinks = () => (
    <ul style={{ display: "flex" }}>
      <li>
        <Box mr={6}>
          <NavLink to="/home">Accueil</NavLink>
        </Box>
      </li>
      <li>
        <Box mr={6}>
          <NavLink to="/products">Produits</NavLink>
        </Box>
      </li>
      <li>
        <Box mr={6}>
          <NavLink to="/account">Mon Compte</NavLink>
        </Box>
      </li>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <li>
          <ButtonGroup>
            <Button colorScheme="teal" size="sm">
              <NavLink to="/register">S'inscrire</NavLink>
            </Button>
          </ButtonGroup>
        </li>
        <Spacer />
        <li>
          <ButtonGroup>
            <Button colorScheme="teal" size="sm">
              <NavLink to="/login">Se connecter</NavLink>
            </Button>
          </ButtonGroup>
        </li>
      </Box>
    </ul>
  );

  return (
    <Box width="100vw">
      {mobileVersion ? (
        <Flex
          display="flex"
          flexDirection="column"
          alignContent={"center"}
          justify="space-between"
        >
          <nav>
            <>
              <Button ref={btnRef} variant="ghost" onClick={onOpen}>
                <ArrowUpDownIcon />
              </Button>
              <Flex>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <NavLinks />
                  </DrawerContent>
                </Drawer>
              </Flex>
            </>
          </nav>
        </Flex>
      ) : (
        <Flex
          display="flex"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              padding: ".5rem",
            }}
          >
            <Box mr={6}>
              <Image src={Logo} alt="logo" maxWidth="50" />
            </Box>
            <NavLinks />
          </nav>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
