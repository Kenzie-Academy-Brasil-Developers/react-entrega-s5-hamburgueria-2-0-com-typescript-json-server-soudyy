import { Box, Button, Flex, theme, useBreakpointValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext";
import { Input } from "../inputs";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";
import { useCart } from "../../contexts/cartContext";
interface SearchData {
  title: string;
}
interface SeachBoxProps {
  isOpen: boolean;
}
export const SearchBox = (isOpen: SeachBoxProps) => {
  const { cartItem } = useCart();
  const { signOut } = useAuth();
  const { register } = useForm();
  const handleSearch = ({ title }: SearchData) => {
    // setCartItem(cartItem.filter((item) => item.name === title));
    console.log(cartItem);
  };
  const isWide = useBreakpointValue({ base: false, md: true });
  return (
    <>
      {isWide ? (
        <Flex
          mt="3"
          w="100%"
          paddingBottom="6"
          borderBottomWidth="1px"
          borderColor="gray.50"
          flexDir={["column", "column", "row", "row"]}
        >
          <Flex as="form">
            <Box
              display="flex"
              alignItems="center"
              bg="white"
              border="2px"
              borderColor="gray.300"
              borderRadius="5px"
            >
              <Input
                placeholder="Digitar pesquisa"
                bg="white"
                w={["100%", "100%", "20vw"]}
                _hover={{ bg: "white" }}
                border="none"
                _focus={{ border: "none" }}
                {...register("title")}
              />
              <Button
                borderRadius="8px"
                w="65px"
                h="50px"
                fontSize="2xl"
                bg="green.800"
                mr="2"
                onClick={() => handleSearch}
              >
                <FaSearch color={theme.colors.white} />
              </Button>
            </Box>
          </Flex>
          <Button
            color="gray.500"
            h="60px"
            borderRadius="8px"
            onClick={() => isOpen}
            mt={["4", "4", "0"]}
            _hover={{ bg: "none", color: "green.500" }}
            _focus={{ border: "none" }}
          >
            <BsFillCartFill fontSize="30px" />
          </Button>
          <Button
            color="gray.500"
            h="60px"
            borderRadius="8px"
            onClick={signOut}
            mt={["4", "4", "0"]}
            _hover={{ bg: "none", color: "green.500" }}
            _focus={{ border: "none" }}
          >
            <MdOutlineExitToApp fontSize="30px" />
          </Button>
        </Flex>
      ) : (
        <>
          {" "}
          <Flex
            mt="3"
            w="100%"
            paddingBottom="6"
            borderBottomWidth="1px"
            borderColor="gray.50"
            flexDir="row"
          >
            <Flex as="form" flexDir="row">
              <Box display="flex" alignItems="center">
                <Button
                  borderRadius="8px"
                  w="55px"
                  h="30px"
                  fontSize="2xl"
                  padding="0"
                  onClick={() => handleSearch}
                >
                  <FaSearch fontSize="100%" color={theme.colors.gray[500]} />
                </Button>
              </Box>
            </Flex>
            <Button
              color="gray.500"
              h="60px"
              borderRadius="8px"
              padding="0"
              onClick={() => isOpen}
              _hover={{ bg: "none", color: "green.500" }}
              _focus={{ border: "none" }}
            >
              <BsFillCartFill fontSize="30px" />
            </Button>
            <Button
              color="gray.500"
              h="60px"
              borderRadius="8px"
              padding="0"
              onClick={signOut}
              _hover={{ bg: "none", color: "green.500" }}
              _focus={{ border: "none" }}
            >
              <MdOutlineExitToApp fontSize="30px" />
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};
