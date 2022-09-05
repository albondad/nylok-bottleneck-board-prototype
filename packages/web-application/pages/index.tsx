import type { NextPage } from "next";
import {
  HourByHourBottleneckBoardTable,
  PageContainer,
  PageHeading,
} from "../components";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <PageHeading />
      <HourByHourBottleneckBoardTable />
    </PageContainer>
  );
};

export default Home;
