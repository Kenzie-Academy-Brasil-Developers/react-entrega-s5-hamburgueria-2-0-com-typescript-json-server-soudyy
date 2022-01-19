import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type InputVariationOptions = { [key: string]: string };

const InputVariation: InputVariationOptions = {
  error: "red.700",
  default: "gray.200",
  focus: "gray.900",
  filled: "green.6 00",
};
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, label, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);
  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);
  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.300">{label}</FormLabel>}
      <ChakraInput
        name={name}
        bg="gray.100"
        color={InputVariation[variation]}
        borderColor={InputVariation[variation]}
        onChangeCapture={(e) => setValue(e.currentTarget.value)}
        onFocus={handleInputFocus}
        onBlurCapture={handleInputBlur}
        variant="outline"
        _hover={{ bgColor: "gray.100" }}
        _placeholder={{ color: "gray.300" }}
        size="lg"
        h="60px"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
export const Input = forwardRef(InputBase);
