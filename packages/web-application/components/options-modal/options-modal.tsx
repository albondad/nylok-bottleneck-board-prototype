import React, { ComponentProps, useMemo } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export type OptionsModalPropsType = {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
};

export const OptionsModal = ({
  isOpen: isOpenProp = false,
  onClose: onCloseProp = () => {},
  ...restProps
}: OptionsModalPropsType) => {
  return (
    <Modal isOpen={isOpenProp} onClose={onCloseProp}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Heading</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input />
            </InputGroup>
          </Box>

          <VStack marginTop="1rem" gap="0.5rem">
            {["Option 01", "Option 02", "Option 03", "Option 04"].map(
              (element: string) => {
                return (
                  <Button key={element} width="100%" justifyContent="left">
                    {element}
                  </Button>
                );
              }
            )}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseProp}>
            Close
          </Button>
          <Button onClick={onCloseProp}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
