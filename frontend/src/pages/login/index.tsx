import * as yup from "yup";
import { useAuth } from "../../contexts/authContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex } from "@chakra-ui/react";
import { Description } from "./Desc";
import { LoginForm } from "./loginForm";

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const signInSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatŕia"),
  });
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data: SignInData) => {
    signIn(data)
      .then((_) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Flex
      justifyContent="center"
      align="center"
      w="100vw"
      h="100vh"
      flexDir={["column-reverse", "column-reverse", "row", "row"]}
    >
      <LoginForm
        errors={errors}
        handleSignIn={handleSubmit(handleSignIn)}
        register={register}
      />
      <Description />
    </Flex>
  );
};
