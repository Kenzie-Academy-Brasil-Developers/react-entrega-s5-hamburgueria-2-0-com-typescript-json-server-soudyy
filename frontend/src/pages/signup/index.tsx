import { Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { Description } from "../login/Desc";
import { SignupForm } from "./signupForm";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("senha obrigatória"),
  confirmPassword: yup
    .string()
    .required("senha obrigatória")
    .oneOf([yup.ref("password")], "senhas diferentes"),
});
interface SignUpData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const Signup = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({ resolver: yupResolver(signUpSchema) });

  const history = useHistory();

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    api
      .post("/users", { name, email, password })
      .then((res) => {
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      flexDir={["column", "column", "row", "row"]}
    >
      <Description />
      <SignupForm
        errors={errors}
        handleSignUp={handleSubmit(handleSignUp)}
        register={register}
      />
    </Flex>
  );
};
