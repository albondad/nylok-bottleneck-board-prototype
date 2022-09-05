import React, { useMemo } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export type PageContainerPropsType = BoxProps & {};

export const PageContainer = ({
  className: classNameProp,
  ...restProps
}: PageContainerPropsType) => {
  return <Box padding="4rem" {...restProps} />;
};
