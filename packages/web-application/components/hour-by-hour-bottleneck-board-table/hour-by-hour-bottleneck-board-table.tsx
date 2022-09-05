import { StyledTable } from "./hour-by-hour-bottleneck-board-table.styled-components";
import { TableProps } from "react-bootstrap";
import classNames from "classnames";
import React, { ComponentProps, useMemo, useState } from "react";
import { NumberModal } from "../number-modal";
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

export type HourByHourBottleneckBoardTablePropsType = TableProps &
  ComponentProps<typeof StyledTable> & {};

export const HourByHourBottleneckBoardTable = ({
  className: classNameProp,
  ...restProps
}: HourByHourBottleneckBoardTablePropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames(
      "hour-by-hour-bottleneck-board-table",
      classNameProp
    );
    return newClassNameMemo;
  }, [classNameProp]);

  const [isNumberModalOpenState, setIsNumberModalOpenState] = useState(false);

  const handleNumberModalClose = () => {
    setIsNumberModalOpenState(false);
  };

  return (
    <Box marginTop="1rem">
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
                  >
                    {element.opNumber}
                  </Td>
                  <Td
                    borderColor="gray.200"
                    borderStyle="solid"
                    borderWidth="1px 0 0 1px"
                    fontSize="1rem"
                    padding="1rem 2rem"
                  >
                    {element.itemNumber}
                  </Td>
                  <Td
                    borderColor="gray.200"
                    borderStyle="solid"
                    borderWidth="1px 0 0 1px"
                    fontSize="1rem"
                    padding="1rem 2rem"
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
