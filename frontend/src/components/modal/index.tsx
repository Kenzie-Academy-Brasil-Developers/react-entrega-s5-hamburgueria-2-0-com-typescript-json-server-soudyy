import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/cartContext";
import { theme } from "../../styles/themes";

interface ModalCreate {
  isOpen: boolean;
  onClose: () => void;
}
export const CartModal = ({ isOpen, onClose }: ModalCreate) => {
  const { cartItem, removeFromCart, addToCart, clearCart } = useCart();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent textAlign="center">
          <ModalHeader display="flex" bg="green.500" borderRadius="5px 5px 0 0">
            <Text fontWeight="bold" ml="2" color="white">
              Carrinho de Compras
            </Text>
          </ModalHeader>
          <ModalCloseButton
            onClick={onClose}
            color="green.300"
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            fontSize="md"
            borderRadius="md"
            _hover={{ color: "green.800" }}
          />
          <ModalBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            {cartItem.length === 0 ? (
              <VStack spacing="5">
                <Heading w="100%" h="60px" fontSize="h3" fontWeight="bold">
                  Sua Sacola está vazia
                  <Text
                    m="10px"
                    fontSize="heading"
                    fontWeight="thin"
                    color="gray.300"
                  >
                    Adicione itens
                  </Text>
                </Heading>
              </VStack>
            ) : (
              <>
                {cartItem.map((item, index) => (
                  <>
                    <HStack
                      key={index}
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb="10px"
                    >
                      <Box display="flex">
                        <Image h="80px" w="80px" bg="gray.100" src={item.img} />
                        <Box ml="10px">
                          <Text fontWeight="bold">{item.name}</Text>
                          <Box
                            mt="10px"
                            display="flex"
                            alignItems="center"
                            w="106px"
                            h="30px"
                            border="2px"
                            borderColor="gray.100"
                          >
                            <Button
                              padding="0"
                              margin="0"
                              color="red.400"
                              borderRadius="none"
                              w="20px"
                              h="30px"
                              onClick={() => console.log("manutenção")}
                            >
                              -
                            </Button>
                            <Text
                              textAlign="center"
                              margin="5"
                              w="30px"
                              h="30px"
                            >
                              1
                            </Text>
                            <Button
                              borderRadius="none"
                              color="red.400"
                              w="30px"
                              h="30px"
                              onClick={() => console.log("manutenção")}
                            >
                              +
                            </Button>
                          </Box>
                        </Box>
                      </Box>

                      <Button onClick={() => removeFromCart(item)} bg="none">
                        <FaTrash color={theme.colors.gray[300]} />
                      </Button>
                    </HStack>
                  </>
                ))}
                <VStack mb="10px" borderTop="2px" borderColor="gray.100">
                  <Box
                    display="flex"
                    w="90%"
                    justifyContent="space-between"
                    m="15px"
                  >
                    <Text>Total</Text>
                    <Text>
                      R$ {cartItem.reduce((a, b) => a + b.price, 0)}.00
                    </Text>
                  </Box>
                  <Button onClick={clearCart} width="90%" color="gray.300">
                    Remover Todos
                  </Button>
                </VStack>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
