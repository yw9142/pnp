import React from "react";

import styled from "styled-components";

const ButtonContainer = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : props.width ?? "503px")};
  height: ${(props) => props.height ?? "60px"};
  background: #03c75a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  padding: 17px 215px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
`;

function Button(props): JSX.Element {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
}

export default Button;
