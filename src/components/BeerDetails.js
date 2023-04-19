import { useEffect, useState } from "react";
import beerList from "../data/beerList.json";
import styled from "styled-components";
import HomeButton from "../components/Buttons/HomeButton";
import Back from "../resource/icons/Back.png";

const BeerDetailsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin: 20px auto;
  border: 1px solid #e3e3e3;
  padding: 20px;

  .main-image {
    width: 15vw;
    height: 50vh;
  }

  .bottom-container {
    width: 35vw;
    h1 {
      font-size: 50px;
    }
    h2 {
      color: orange;
    }
    .date-box {
      display: block;
      text-align: start;
      width: 40vw;
      color: gray;
    }
    .back-button  {
      margin: 8vh 0;
    }
    p {
      font-weight: bold;
    }
  }
`;

const BeerDetails = (props) => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    setBeers(beerList);
  }, [beerList]);

  return (
    <BeerDetailsStyled>
      {beers.map((beer) => {
        return (
          <>
            <img src={beer.image_url} alt="" className="main-image" />
            <div className="bottom-container">
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <div className="date-box">
                <h6>First brewed: {beer.first_brewed}</h6>
                <h6>First brewed: {beer.attenuation_level}</h6>
              </div>
              <p>{beer.description}</p>
              <img src={Back} alt="backImage" className="back-button" />
            </div>
            <HomeButton width="40vw" />
          </>
        );
      })}
    </BeerDetailsStyled>
  );
};

export default BeerDetails;
