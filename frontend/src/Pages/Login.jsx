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
  Text,
  Heading,
  Box,
} from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$"; // Regex email format validation

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
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
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <Container display="flex" justifyContent="center">
      <Card minW="70vw" m={6}>
        <Heading as="h1" textAlign="center" fontSize={"1.5rem"}>
          Authentification
        </Heading>
        <Box p={5}>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                margin="normal"
                required
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                pattern={emailRegex}
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
                onChange={onChange}
                value={password}
              />
              <Box textAlign="center" mt={2}>
                <Button
                  sx={{ backgroundColor: "#1E643F", color: "white" }}
                  size="md"
                  type="submit"
                >
                  Se connecter
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
