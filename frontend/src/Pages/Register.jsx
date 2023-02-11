import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Card,
  Heading,
  Box,
} from "@chakra-ui/react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"; // Regex password format validation
  const emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$"; // Regex email format validation

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { username, email, password, controlpassword } = formData;
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isSuccess || user) {
      window.location.reload();
      navigate("/userprofile");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
      controlpassword,
    };
    dispatch(login(userData));
  };

  return (
    <Container display="flex" justifyContent="center">
      <Card minW="70vw" m={6}>
        <Heading as="h1" textAlign="center" fontSize={"1.5rem"}>
          Créer un nouveau compte
        </Heading>
        <Box p={5}>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel htmlFor="username">Nom d'utilisateur</FormLabel>
              <Input
                margin="normal"
                required
                id="username"
                label="username"
                name="username"
                autoComplete="pseudo"
                onChange={onChange}
                value={username}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                margin="normal"
                required
                id="email"
                label="Email"
                name="email"
                pattern={emailRegex}
                autoComplete="email"
                onChange={onChange}
                value={email}
              />
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <Input
                margin="normal"
                required
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                pattern={passwordRegex}
                onChange={onChange}
                value={password}
              />
              <FormLabel htmlFor="controlpassword">
                Confirmer mot de passe
              </FormLabel>
              <Input
                margin="normal"
                required
                name="controlpassword"
                label="Confirmer mot de passe"
                type="password"
                id="controlpassword"
                autoComplete="control-password"
                pattern={passwordRegex}
                onChange={onChange}
                value={controlpassword}
              />
              <Box textAlign="center" mt={2}>
                <Button
                  sx={{ backgroundColor: "#1E643F", color: "white" }}
                  size="md"
                  type="submit"
                >
                  S'inscrire
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Card>
    </Container>
  );
};

export default Register;
