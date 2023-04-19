import { useEffect, useState } from "react";
import beerList from "../data/beerList.json";
import Button from "../components/Buttons/button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AllBeersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  border: 5px solid #e5e5e5;
  width: 55vw;
`;

const AllBeersListStyled = styled.div`
  margin: 10px auto;
  .item-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Roboto Slab";
    padding: 5vh 0;
    width: 50vw;
    margin: 0 auto;
    border-bottom: 5px solid #e5e5e5;
    .right-box {
      display: block;
      text-align: start;
      width: 30vw;
      h1 {
        font-size: 50px;
        text-align: start;
      }
      h2 {
        color: orange;
        font-size: 30px;
      }
    }
    img {
      width: 10vw;
      height: 40vh;
    }
  }
`;
const HomeButton = styled(Link)`
  width: 54vw;
  padding: 10px;
  border: none;
  background-color: orange;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const AllBeersList = () => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    setBeers(beerList);
  }, [beerList]);
  return (
    <AllBeersContainer>
      <AllBeersListStyled>
        {beers.map((beer) => {
          return (
            <div className="item-box" key={uuidv4()}>
              <img src={beer.image_url} alt="img" />
              <div className="right-box">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>Created by: {beer.contributed_by}</h3>
                <Link to={`/beerDetails/${beer._id}`}>
                  <Button />
                </Link>
              </div>
            </div>
          );
        })}
      </AllBeersListStyled>

      <HomeButton />
    </AllBeersContainer>
  );
};

export default AllBeersList;
