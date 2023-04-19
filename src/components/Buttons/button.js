import { useEffect, useState } from "react";
import styled from "styled-components";
import beerList from "../../data/beerList.json";

const ButtonStyled = styled.button`
  background-color: orange;
  border-radius: 30px;
  color: #fff;
  border: none;
  width: 10vw;
  height: 5vh;
  font-size: 25px;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: "Roboto Slab";
`;

const Button = () => {
  return (
    <div>
      <ButtonStyled>Details</ButtonStyled>
    </div>
  );
};

export default Button;
