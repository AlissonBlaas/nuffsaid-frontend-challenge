import { Card } from "@mui/material";

import styled from "styled-components";

type IProps = {
  backgroundColor: string;
}

export const CardStyled = styled(Card)`
  display: grid;
  position: relative;
  placeItems: center;
  text-align: start;
  padding: 10px;
  background-color: ${(props: IProps) => props.backgroundColor};
  height: 60px;
  margin: 10px 0;

  :nth-child(2n) {
    display: none;
  }

  button {
    align-self: flex-end;
    text-transform: none;
    color: black;
    font-weight: 600;
    height: 30px;
  }
`;

