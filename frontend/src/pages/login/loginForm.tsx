import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import { useHistory } from "react-router-dom";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<RegisterProps>;
}
interface RegisterProps {
  email: string;
  password: string;
}
export const LoginForm = ({
  handleSignIn,
  errors,
  register,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      as="form"
      onSubmit={handleSignIn}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      mr="5%"
      w={["90%", "90%", "30%", "30%"]}
    >
      <Heading size="lg">Login</Heading>
      <VStack spacing="5" mt="6">
        <Box w="100%">
          <Input
            placeholder="Digite seu nome"
            label="name"
            type="name"
            error={errors.name}
            {...register("email")}
          />
          {!errors.name}
        </Box>
        <Input
          placeholder="Digite sua senha"
          error={errors.password}
          type="password"
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          bg="green.500"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "green.800" }}
          type="submit"
        >
          Login
        </Button>
        <Text color="gray.300" textAlign="center">
          Crie sua conta para saborear muitas delícias e <br /> matar sua fome!
        </Text>
        <Button
          bg="gray.100"
          w="100%"
          color="whigray.300"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "gray.200" }}
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
