import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const ButtonStyle = styled.button`
  background-color: #dc0000;
  font-size: 18px;
  color: white;
  font-family: bold;
  padding: 10px 10px;
  margin: auto;
  border-width: 2px;
  border-radius: 5px;
  border: 2px solid white;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  &:hover {
    border-radius: 5px; // Change border-radius on hover
    background-color: red; // Optionally, change the background or other styles
    color: white; // Change the text color on hover
  }
`;
const CloseStyle = styled.button`
  font-size: 15px;
  border: 0 !important;
  color: #000;
  background: none;
`;
const Buttons = ({ label, onClick, fullWidth }) => {
  return (
    <>
      <ButtonStyle onClick={onClick} fullWidth={fullWidth}>
        {label}
      </ButtonStyle>
    </>
  );
};
const Close = ({ label, onClick }) => {
  return (
    <>
      <CloseStyle onClick={onClick}>{label}</CloseStyle>
    </>
  );
};

const ButtonView = ({ label, onClick, className }) => {
  return (
    <div>
      <Button onClick={onClick} className={className}>
        {label}
      </Button>
    </div>
  );
};
export { Buttons, Close, ButtonView };
