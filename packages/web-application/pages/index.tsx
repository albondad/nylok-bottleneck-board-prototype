import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useTheme,
  Box,
  Heading,
  TableContainer,
  Table,
  Tr,
  Text,
  Th,
  Thead,
  Tbody,
  Td,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
  Grid,
  GridItem,
  Stack,
  PopoverAnchor,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const themeHook = useTheme();
  console.log("[remove me] themeHook", themeHook);
  return (
    <Box maxWidth="100%" margin="0 auto" padding="2rem">
      <Heading fontSize="1.5rem">Hour by Hour Bottleneck Board</Heading>

      <Box
        display="flex"
        marginTop="2rem"
        border={`1px solid ${themeHook.colors.gray[100]}`}
        borderRadius="0.5rem"
      >
        <Box width="70%">
          <TableContainer width="100%">
            <Table>
              <Thead>
                <Tr>
                  <Th color="#000000" fontSize="0.75rem">
                    Date
                  </Th>
                  <Th color="#000000" fontSize="0.75rem">
                    OP #
                  </Th>
                  <Th color="#000000" fontSize="0.75rem">
                    Item #
                  </Th>
                  <Th color="#000000" fontSize="0.75rem">
                    Target PPH #
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="0.75rem">01-01-2000</Td>
                  <Td fontSize="0.75rem">
                    <Popover placement="bottom-start">
                      <PopoverTrigger>
                        <Box>111111</Box>
                      </PopoverTrigger>
                      <PopoverContent width="15rem">
                        <PopoverHeader display="flex" alignItems="center">
                          Number
                          <PopoverCloseButton
                            bottom="unset"
                            left="unset"
                            marginLeft="auto"
                            position="relative"
                            right="unset"
                            top="unset"
                          />
                        </PopoverHeader>
                        <PopoverBody>
                          <PopoverBody paddingTop="1rem">
                            <NumberInput>
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                            <Grid
                              templateColumns="repeat(3, 1fr)"
                              gap="1rem"
                              marginTop="1rem"
                            >
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">1</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">2</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">3</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">4</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">5</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">6</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">7</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">8</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">9</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">0</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">.</Button>
                              </GridItem>
                              <GridItem display="flex" justifyContent="center">
                                <Button width="100%">
                                  <DeleteIcon />
                                </Button>
                              </GridItem>
                            </Grid>
                          </PopoverBody>
                        </PopoverBody>
                        <PopoverFooter>
                          <Stack>
                            <Button>Cancel</Button>
                            <Button>Save</Button>
                          </Stack>
                        </PopoverFooter>
                      </PopoverContent>
                    </Popover>
                  </Td>
                  <Td fontSize="0.75rem">11111</Td>
                  <Td fontSize="0.75rem">10.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">01-01-2000</Td>
                  <Td fontSize="0.75rem">11111</Td>
                  <Td fontSize="0.75rem">11111</Td>
                  <Td fontSize="0.75rem">10.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">01-01-2000</Td>
                  <Td fontSize="0.75rem">11111</Td>
                  <Td fontSize="0.75rem">11111</Td>
                  <Td fontSize="0.75rem">10.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          width="30%"
          display="inline-flex"
          overflowX="scroll"
          borderLeft={`1px solid ${themeHook.colors.gray[100]}`}
        >
          <TableContainer minWidth="100%">
            <Table>
              <Thead>
                <Tr>
                  <Th color="#000000" fontSize="0.75rem">
                    1st
                  </Th>
                  <Th color="#000000" fontSize="0.75rem">
                    2nd
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <TableContainer minWidth="100%">
            <Table>
              <Thead>
                <Tr>
                  <Th color="#000000" fontSize="0.75rem">
                    3rd
                  </Th>
                  <Th color="#000000" fontSize="0.75rem">
                    4th
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
                <Tr>
                  <Td fontSize="0.75rem">11.00</Td>
                  <Td fontSize="0.75rem">09.00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
