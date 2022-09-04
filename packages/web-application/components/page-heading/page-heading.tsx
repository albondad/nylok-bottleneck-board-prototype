import { ContainerProps } from "react-bootstrap";
import { StyledContainer } from "./page-heading.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type PageHeadingPropsType = ContainerProps &
  ComponentProps<typeof StyledContainer> & {};

export const PageHeading = ({
  className: classNameProp,
  ...restProps
}: PageHeadingPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("page-heading", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return <StyledContainer className={classNameMemo} {...restProps} />;
};
