import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
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
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [mobileVersion] = useMediaQuery("(max-width: 850px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // LogOut function
  function clearStorage() {
    window.localStorage.clear();
    window.location.reload();
    navigate("/products");
  }
  // Navigation links
  const NavLinks = () => (
    <ul
      style={{
        display: "flex",
        fontWeight: "500",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <li>
        {" "}
        <Box mr={8}>
          <NavLink to="/">Accueil</NavLink>
        </Box>
      </li>
      <li>
        <Box mr={8}>
          <NavLink to="/products">Catalogue produits</NavLink>
        </Box>
      </li>

      {user ? (
        <>
          <Box mr={6}>
            <li>
              <NavLink to="/userprofile">Mon Compte</NavLink>
            </li>
          </Box>
          <ButtonGroup>
            <NavLink to="/mybasket">
              <Button
                sx={{ backgroundColor: "#1E643F", color: "white" }}
                size="sm"
                mr={1}
                ml={2}
              >
                <Icon mr={2} as={BsCart4} />
                Panier
              </Button>
            </NavLink>
            <Button
              sx={{ backgroundColor: "#1E643F", color: "white" }}
              size="sm"
              mr={1}
              ml={2}
              onClick={clearStorage}
            >
              Se déconnecter
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Spacer />
          <li>
            <ButtonGroup>
              <Button
                sx={{ backgroundColor: "#1E643F", color: "white" }}
                size="sm"
                mr={1}
                ml={2}
              >
                <NavLink to="/login">Se connecter</NavLink>
              </Button>
            </ButtonGroup>
          </li>
        </Box>
      )}
      <style jsx="true">
        {`
          @media (max-width: 850px) {
            ul {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </ul>
  );

  return (
    <Box bg="white">
      {mobileVersion ? (
        <Flex display="flex" flexDirection="column">
          <nav>
            <>
              <Button ref={btnRef} variant="ghost" onClick={onOpen}>
                <HamburgerIcon />
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
                    <DrawerHeader>Navigation</DrawerHeader>
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
            <Box justifyContent="flex-end" mr={6}>
              <Image
                src={Logo}
                alt="logo de l'entreprise représentant une branche à trois feuilles"
                maxWidth="50"
              />
            </Box>
            <Flex>
              <NavLinks />
            </Flex>
          </nav>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
