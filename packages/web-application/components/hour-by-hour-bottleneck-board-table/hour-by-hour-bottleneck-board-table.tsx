import { StyledTable } from "./hour-by-hour-bottleneck-board-table.styled-components";
import { TableProps } from "react-bootstrap";
import classNames from "classnames";
import React, { ComponentProps, useMemo, useState } from "react";
import { NumberModal } from "../number-modal";
import { sampleDataUtility } from "../../utilities";

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
    <StyledTable bordered={true} className={classNameMemo} {...restProps}>
      <thead>
        <tr>
          <th>Date</th>
          <th>OP #</th>
          <th>Item #</th>
          <th>Target PPH</th>
        </tr>
      </thead>
      <tbody>
        {sampleDataUtility.sampleData.map((element) => {
          const handleNumberTableDataClick = () => {
            setIsNumberModalOpenState(true);
          };
          return (
            <tr key={element.id}>
              <td>{element.date}</td>
              <td onClick={handleNumberTableDataClick}>{element.opNumber}</td>
              <td onClick={handleNumberTableDataClick}>{element.itemNumber}</td>
              <td onClick={handleNumberTableDataClick}>{element.targetPph}</td>
            </tr>
          );
        })}
      </tbody>
      <NumberModal
        show={isNumberModalOpenState}
        onClose={handleNumberModalClose}
      />
    </StyledTable>
  );
};
