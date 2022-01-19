import { Button, Flex, Grid, Heading, Link, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/inputs";

interface signupFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
}
interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignupForm = ({
  handleSignUp,
  errors,
  register,
}: signupFormProps) => {
  const history = useHistory();

  return (
    <Grid
      as="form"
      onSubmit={handleSignUp}
      padding="30px 25px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "30%", "30%"]}
    >
      <Flex justifyContent="space-between">
        <Heading size="lg">Cadastro</Heading>
        <Link as="button" color="gray.300" onClick={() => history.push("/")}>
          Retornar para o login
        </Link>
      </Flex>
      <VStack spacing="5" mt="6">
        <Input
          placeholder="Digite seu nome"
          error={errors.password}
          {...register("name")}
        />
        <Input
          placeholder="Digite seu email"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        {!errors.email}

        <Input
          placeholder="Digite sua senha"
          error={errors.password}
          type="password"
          {...register("password")}
        />
        <Input
          placeholder="Confirme sua senha"
          error={errors.password}
          type="password"
          {...register("confirmPassword")}
        />
      </VStack>
      <Button
        mt="4"
        bg="gray.100"
        w="100%"
        color="gray.300"
        h="60px"
        borderRadius="8px"
        _hover={{ background: "gray.400" }}
        type="submit"
      >
        Cadastrar
      </Button>
    </Grid>
  );
};
