import classNames from "classnames";
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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

export type NumberModalPropsType = {
  isOpen: ModalProps["isOpen"];
  onClose: ModalProps["onClose"];
};

export const NumberModal = ({
  isOpen: isOpenProp = false,
  onClose: onCloseProp = () => {},
  ...restProps
}: NumberModalPropsType) => {
  return (
    <Modal isOpen={isOpenProp} onClose={onCloseProp}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>

          <Box marginTop="1rem">
            <Grid templateColumns="repeat(3, 1fr)" gap="0.5rem">
              <GridItem width="100%">
                <Button width="100%">1</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">2</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">3</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">4</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">5</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">6</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">7</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">8</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">9</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">0</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">.</Button>
              </GridItem>
              <GridItem width="100%">
                <Button width="100%">DEL</Button>
              </GridItem>
            </Grid>
          </Box>
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
