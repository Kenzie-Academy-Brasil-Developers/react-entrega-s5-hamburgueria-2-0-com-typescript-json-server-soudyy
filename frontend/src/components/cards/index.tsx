import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/cartContext";
import { api } from "../../services/api";

interface Products {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Cards = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [auth, setAuth] = useState(false);
  const { addToCart } = useCart();
  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [auth]);

  return (
    <Grid
      display="flex"
      flexDir="row"
      justifyContent={["flex-start", "flex-start", "center", "center"]}
      alignItems="center"
      flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
      overflowX={["scroll", "scroll", "hidden", "hidden"]}
    >
      {products.map((item) => {
        return (
          <Flex
            key={item.id}
            flexDir="column"
            height="350px"
            minWidth="300px"
            border="2px"
            borderColor="gray.100"
            borderRadius="8px"
            marginX={["5px", "5px", "3%", "5%"]}
            marginY="10px"
            _hover={{ borderColor: "green.300" }}
          >
            <VStack mb="10px">
              <Image
                bg="gray.100"
                w="100%"
                h="150px"
                src={item.img}
                alt={item.name}
              />
              <Box
                h="10rem"
                w="100%"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Heading ml="10px" fontSize="h2">
                  {item.name}
                </Heading>
                <Text ml="10px" color="gray.300">
                  {item.category}
                </Text>
                <Text ml="10px" color="green.600" fontWeight="bold">
                  {item.price}.00
                </Text>

                <Button
                  ml="10px"
                  bg="gray.100"
                  color="white"
                  _hover={{ bg: "green.300" }}
                  onClick={() => addToCart(item)}
                >
                  Adicionar
                </Button>
              </Box>
            </VStack>
          </Flex>
        );
      })}
    </Grid>
  );
};
