import { ContainerProps } from "react-bootstrap";
import { StyledH1 } from "./page-heading.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type PageHeadingPropsType = ContainerProps &
  ComponentProps<typeof StyledH1> & {};

export const PageHeading = ({
  className: classNameProp,
  ...restProps
}: PageHeadingPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("page-heading", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return <StyledH1 className={classNameMemo} {...restProps} />;
};
