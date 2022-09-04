import { ContainerProps } from "react-bootstrap";
import { StyledContainer } from "./page-container.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type PageContainerPropsType = ContainerProps &
  ComponentProps<typeof StyledContainer> & {};

export const PageContainer = ({
  className: classNameProp,
  ...restProps
}: PageContainerPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("page-container", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return <StyledContainer className={classNameMemo} {...restProps} />;
};
