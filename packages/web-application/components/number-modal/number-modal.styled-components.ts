import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const StyledModal = styled(Modal)`
  & {
    font-size: 1rem;
    margin-top: 1rem;

    .NumberModal-numberPad {
      margin-top: 1rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;

      .NumberModal-item {
        width: calc((100% - 0.5rem * 2) / 3);
      }
    }
  }
`;
