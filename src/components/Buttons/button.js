import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
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
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    setBeers(beerList);
  }, [beerList]);
  const idParams = useParams();
  const navigator = useNavigate();

  const handleClick = () => {
    const filtered = beers.find((beer) => {
      console.log(beer._id.toString() === idParams.id);
    });

    if (filtered) {
      navigator(`/allBeerList/${filtered.id}`);
    } else {
      console.log("No beer found with the specified ID");
    }
  };

  return (
    <div>
      <ButtonStyled onClick={handleClick}>Details</ButtonStyled>
    </div>
  );
};

export default Button;
