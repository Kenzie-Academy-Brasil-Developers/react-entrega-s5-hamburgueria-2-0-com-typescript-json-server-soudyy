import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { theme } from "../../styles/themes";
import Points from "../../assets/points.svg";

export const Description = () => {
  const isWide = useBreakpointValue({ base: false, md: true });
  return (
    <Flex
      flexDir="column"
      m="20px"
      w={["100%", "100%", "377px", "377px"]}
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" alignSelf="flex-start" alignItems="flex-end" mb="1em">
        <Heading as="h1" fontWeight="bold">
          Burguer
        </Heading>
        <Text fontSize="2xl" color={theme.colors.red["500"]} ml="10px">
          Kenzie
        </Text>
      </Box>
      <Box
        display="flex"
        alignSelf="flex-start"
        border="1px"
        borderColor="gray.100"
        borderRadius="5px"
        w={["350px", "377px"]}
        h="95px"
        boxShadow="lg"
      >
        <Center
          backgroundColor="green.100"
          w="100px"
          h="60px"
          margin="10px"
          borderRadius="5px"
          alignSelf="center"
        >
          <FiShoppingBag color={theme.colors.green[600]} />
        </Center>
        <Text mt="10px" color="gray.300">
          A vida é como um sanduíche, é preciso recheá-la com os
          <b> melhores</b> ingredientes.
        </Text>
      </Box>
      {isWide ? (
        <Image mt="2em" w="181px" h="79px" src={Points} alt="pontinhos" />
      ) : (
        <></>
      )}
    </Flex>
  );
};
