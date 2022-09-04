import type { NextPage } from "next";
import {
  HourByHourBottleneckBoardTable,
  PageContainer,
  PageHeading,
} from "../components";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <PageHeading>Hour by Hour Bottleneck Board</PageHeading>
      <HourByHourBottleneckBoardTable />
    </PageContainer>
  );
};

export default Home;
