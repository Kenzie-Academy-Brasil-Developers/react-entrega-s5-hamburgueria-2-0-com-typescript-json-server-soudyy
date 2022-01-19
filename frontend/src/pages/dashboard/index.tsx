import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Cards } from "../../components/cards";
import { CartModal } from "../../components/modal";
import { SearchBox } from "../../components/searchBox";
import { theme } from "../../styles/themes";

export const Dashboard = () => {
  const { isOpen, onClose } = useDisclosure();
  const isWide = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <CartModal isOpen={isOpen} onClose={onClose} />
      {isWide ? (
        <Flex>
          <HStack
            bg="gray.100"
            w="100vw"
            display="flex"
            justifyContent="space-around"
          >
            <Box padding="5px" display="flex" alignItems="flex-end" mb="1em">
              <Heading as="h1" fontWeight="bold">
                Burguer
              </Heading>
              <Text
                fontSize="h3"
                fontWeight="bold"
                color={theme.colors.red["500"]}
                ml="10px"
              >
                Kenzie
              </Text>
            </Box>
            <Box>
              <SearchBox isOpen={isOpen} />
            </Box>
          </HStack>
        </Flex>
      ) : (
        <Flex>
          <HStack
            bg="gray.100"
            w="100vw"
            display="flex"
            justifyContent="space-around"
          >
            <Box padding="5px" display="flex" alignItems="flex-end" mb="1em">
              <Heading as="h1" fontWeight="bold">
                Burguer
              </Heading>
              <Text
                fontSize="h3"
                fontWeight="bold"
                color={theme.colors.red["500"]}
                ml="10px"
              >
                Kenzie
              </Text>
            </Box>
            <Box>
              <SearchBox isOpen={isOpen} />
            </Box>
          </HStack>
        </Flex>
      )}

      <Flex justifyContent="center" height="80vh" w="100vw">
        <Cards />
      </Flex>
    </>
  );
};
