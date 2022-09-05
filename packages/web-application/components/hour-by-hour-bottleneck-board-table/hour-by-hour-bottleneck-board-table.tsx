import React, { useState } from "react";
import { NumberModal, OptionsModal } from "../";
import { sampleDataUtility } from "../../utilities";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export type HourByHourBottleneckBoardTablePropsType = {};

export const HourByHourBottleneckBoardTable =
  ({}: HourByHourBottleneckBoardTablePropsType) => {
    const [numberModalIsOpenState, setIsNumberModalOpenState] = useState(false);

    const handleNumberTdClick = () => {
      setIsNumberModalOpenState(true);
    };

    const handleNumberModalClose = () => {
      setIsNumberModalOpenState(false);
    };

    const [optionsModalIsOpenState, setOptionsModalIsOpenState] =
      useState(false);

    const handleOptionsTdClick = () => {
      setOptionsModalIsOpenState(true);
    };

    const handleOptionsModalClose = () => {
      setOptionsModalIsOpenState(false);
    };

    return (
      <Box marginTop="1rem">
        <NumberModal
          isOpen={numberModalIsOpenState}
          onClose={handleNumberModalClose}
        />

        <OptionsModal
          isOpen={optionsModalIsOpenState}
          onClose={handleOptionsModalClose}
        />

        <TableContainer>
          <Table
            variant="unstyled"
            borderColor="gray.200"
            borderStyle="solid"
            borderWidth="1px"
          >
            <Thead backgroundColor="gray.200">
              <Tr>
                <Th fontSize="1rem" padding="1rem 2rem">
                  Date
                </Th>
                <Th fontSize="1rem" padding="1rem 2rem">
                  OP #
                </Th>
                <Th fontSize="1rem" padding="1rem 2rem">
                  Item #
                </Th>
                <Th fontSize="1rem" padding="1rem 2rem">
                  PPH
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sampleDataUtility.sampleData.map((element) => {
                return (
                  <Tr key={element.id}>
                    <Td
                      borderColor="gray.200"
                      borderStyle="solid"
                      borderWidth="1px 0 0 1px"
                      fontSize="1rem"
                      padding="1rem 2rem"
                    >
                      {element.date}
                    </Td>
                    <Td
                      borderColor="gray.200"
                      borderStyle="solid"
                      borderWidth="1px 0 0 1px"
                      fontSize="1rem"
                      padding="1rem 2rem"
                      onClick={handleOptionsTdClick}
                    >
                      {element.opNumber}
                    </Td>
                    <Td
                      borderColor="gray.200"
                      borderStyle="solid"
                      borderWidth="1px 0 0 1px"
                      fontSize="1rem"
                      padding="1rem 2rem"
                      onClick={handleOptionsTdClick}
                    >
                      {element.itemNumber}
                    </Td>
                    <Td
                      borderColor="gray.200"
                      borderStyle="solid"
                      borderWidth="1px 0 0 1px"
                      fontSize="1rem"
                      padding="1rem 2rem"
                      onClick={handleNumberTdClick}
                    >
                      {element.targetPph}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
