import React from "react";
import { Heading } from "@chakra-ui/react";

export type PageHeadingPropsType = {};

export const PageHeading = () => {
  return (
    <Heading fontSize="1.5rem" fontWeight={700}>
      Hour by Hour Bottleneck Board
    </Heading>
  );
};
