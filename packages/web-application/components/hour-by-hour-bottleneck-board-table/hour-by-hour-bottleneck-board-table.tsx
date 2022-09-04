import { StyledTable } from "./hour-by-hour-bottleneck-board-table.styled-components";
import { TableProps } from "react-bootstrap";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { NumberModal } from "../number-modal";

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
        <tr>
          <td>01-01-2022</td>
          <td>
            1111
            <NumberModal />
          </td>
          <td>1111</td>
          <td>1111</td>
        </tr>
        <tr>
          <td>01-01-2022</td>
          <td>1111</td>
          <td>1111</td>
          <td>1111</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
