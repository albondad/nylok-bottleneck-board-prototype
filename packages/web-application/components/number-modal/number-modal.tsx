import { Modal, Button, Form, Container, ModalProps } from "react-bootstrap";
import { StyledModal } from "./number-modal.styled-components";
import classNames from "classnames";
import React, { ComponentProps, useMemo } from "react";

export type NumberModalPropsType = ModalProps &
  ComponentProps<typeof StyledModal> & {
    onClose?: (event: any) => any;
    isOpen?: boolean;
  };

export const NumberModal = ({
  className: classNameProp,
  isOpen: isOpenProp = false,
  onClose: onCloseProp = () => {},
  ...restProps
}: NumberModalPropsType) => {
  const classNameMemo = useMemo(() => {
    const newClassNameMemo = classNames("NumberModal", classNameProp);
    return newClassNameMemo;
  }, [classNameProp]);

  return (
    <StyledModal
      className={classNameMemo}
      onHide={onCloseProp}
      show={isOpenProp}
      {...restProps}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title>Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control value="0"></Form.Control>
        <div className="NumberModal-numberPad">
          <Button className="NumberModal-item">1</Button>
          <Button className="NumberModal-item">2</Button>
          <Button className="NumberModal-item">3</Button>
          <Button className="NumberModal-item">4</Button>
          <Button className="NumberModal-item">5</Button>
          <Button className="NumberModal-item">6</Button>
          <Button className="NumberModal-item">7</Button>
          <Button className="NumberModal-item">8</Button>
          <Button className="NumberModal-item">9</Button>
          <Button className="NumberModal-item">0</Button>
          <Button className="NumberModal-item">.</Button>
          <Button className="NumberModal-item">DEL</Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCloseProp} variant="secondary">
          Close
        </Button>
        <Button onClick={onCloseProp} variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
};
