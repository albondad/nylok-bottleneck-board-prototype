import classNames from "classnames";
import React, { useMemo } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export type PageContainerPropsType = BoxProps & {};

export const PageContainer = ({
  className: classNameProp,
  ...restProps
}: PageContainerPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("PageContainer", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return <Box className={classNameMemo} padding="4rem" {...restProps} />;
};
