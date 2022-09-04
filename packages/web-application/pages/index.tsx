import type { NextPage } from "next";
import { Table, Container } from "react-bootstrap";
import { PageContainer } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <div>Hour by Hour Bottleneck Board</div>

      <Table bordered={true}>
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
            <td>1111</td>
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
      </Table>
    </PageContainer>
  );
};

export default Home;
