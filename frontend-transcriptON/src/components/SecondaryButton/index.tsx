import React from "react";
import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
  icon?: any;
  onClick: () => void;
}

export const SecondaryButton = ({children, icon, onClick} : IProps) => {
  return(
    <Container onClick={onClick}>
      {children}
      {icon}
    </Container>
  )
}